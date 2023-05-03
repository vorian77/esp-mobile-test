import { faunaFn } from '$utils/fauna/fauna.server';
import { sendText } from '$utils/UtilsTwilio.js';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const dataComponentDef = await faunaFn('getDataComponentRec', params);
	if (dataComponentDef) {
		return dataComponentDef;
	}
	throw error(404, 'Not found');
};

function serialize(formData) {
	var rtnText = '';
	var object = {};

	function addField(key, value) {
		if (rtnText) {
			rtnText += '\n';
		}
		rtnText += key + ': ' + value;
	}

	formData.forEach((value, key) => {
		// Reflect.has in favor of: object.hasOwnProperty(key)
		if (!Reflect.has(object, key)) {
			object[key] = value;
			addField(key, object[key].toString());
			return;
		}
		if (!Array.isArray(object[key])) {
			object[key] = [object[key]];
			addField(key, object[key].toString());
		}
		object[key].push(value);
		addField(key, object[key].toString());
	});
	return rtnText;
}

export const actions = {
	update: async ({ request }) => {
		const mobilePhoneField = 'phoneMobile';

		const formData = await request.formData();
		const fields = serialize(formData);
		console.log(fields);
		if (formData.has(mobilePhoneField)) {
			sendText(
				formData.get(mobilePhoneField),
				'The Form Factory' + '\n' + 'Student Profile Data:' + '\n\n' + fields
			);
		}
		return { success: true };
	}
};
