import faunadb from 'faunadb'
export const q = faunadb.query
import { error } from '@sveltejs/kit'

// Acquire the env var
import { FAUNADB_SECRET } from '$env/static/private'

if (typeof FAUNADB_SECRET === 'undefined' || FAUNADB_SECRET === '') {
	throw error(401, 'The FAUNADB_SECRET environment variable is not set.')
}

// Instantiate the client
export const client = new faunadb.Client({
	secret: FAUNADB_SECRET,
	domain: 'db.fauna.com',
	port: 443,
	scheme: 'https'
})

function rtnError(err) {
	console.error('Errors: [%s] %s: %s', err.name, err.message, err.errors()[0].description)
}

// faunaDB functions
async function getDataComponentRec(params) {
	const { dataComponentId } = params
	try {
		const res = await client.query(q.Get(q.Ref(q.Collection('dataComponents'), dataComponentId)))
		return await res.data
	} catch (err) {
		rtnError(err)
	}
}

async function getFormRec(params) {
	const { formId } = params
	try {
		const res = await client.query(q.Get(q.Ref(q.Collection('forms'), formId)))
		return await res.data
	} catch (err) {
		rtnError(err)
	}
}

// function switch
export async function faunaFn(faunaFnName, params) {
	switch (faunaFnName.toLowerCase()) {
		case 'getdatacomponentrec':
			return await getDataComponentRec(params)
			break

		case 'getformrec':
			return await getFormRec(params)
			break

		default:
			throw error(404, `FaunaDB function not found: ${faunaFnName}`)
	}
}
