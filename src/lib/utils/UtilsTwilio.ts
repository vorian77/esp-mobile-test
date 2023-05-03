import { Twilio } from 'twilio'

import {
	TWILIO_ACCT_SID,
	TWILIO_AUTH_TOKEN,
	TWILIO_PHONE_NBR,
	TWILIO_MAXPRICE
} from '$env/static/private'

export async function sendText(phoneNbrTo, textBody) {
	const twilio = new Twilio(TWILIO_ACCT_SID, TWILIO_AUTH_TOKEN)

	// parms
	const parms = {
		from: TWILIO_PHONE_NBR,
		to: phoneNbrTo,
		body: textBody,
		MaxPrice: TWILIO_MAXPRICE
	}

	try {
		const message = await twilio.messages.create(parms)
		const bodyRtn = JSON.stringify({ sid: message.sid, parms })
		return {
			status: 201, // created
			body: bodyRtn
		}
	} catch (err) {
		err.message = JSON.stringify(err)
		throw err
	}
}
