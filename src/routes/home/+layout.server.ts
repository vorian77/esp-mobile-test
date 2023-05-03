import { API_NINJAS_SECRET } from '$env/static/private'
const categories = [
	'amazing',
	'art',
	'beauty',
	'best',
	'change',
	'courage',
	'dreams',
	'education',
	'equality',
	'experience',
	'failure',
	'faith',
	'family',
	'fear',
	'forgiveness',
	'friendship',
	'funny',
	'future',
	'great',
	'happiness',
	'history',
	'hope',
	'imagination',
	'inspirational',
	'intelligence',
	'knowledge',
	'leadership',
	'learning',
	'life',
	'success'
]

const demoQuote = {
	quote:
		"I try to give to the poor people for love what the rich could get for money. No, I wouldn't touch a leper for a thousand pounds yet I willingly cure him for the love of God.",
	author: 'Mother Teresa',
	category: 'love'
}

export async function load({ fetch }) {
	const categoryIdx = Math.floor(Math.random() * (categories.length + 1))
	const api = 'https://api.api-ninjas.com/v1/quotes?limit=1&category=' + categories[categoryIdx]

	const fetchQuote = async () => {
		// const quotesRes = await fetch(api, {
		// 	method: 'GET',
		// 	headers: {
		// 		'X-API-KEY': API_NINJAS_SECRET,
		// 		contentType: 'application/json'
		// 	}
		// });
		// const quotesData = await quotesRes.json();
		// return quotesData[0];
		return { ...demoQuote, api }
	}

	return {
		quote: await fetchQuote()
	}
	// throw error(404', 'Not found');
}
