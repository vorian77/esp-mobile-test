<script>
	// import { client, q } from '$utils/fauna';
	// import { enhance } from '$app/forms';

	// import FormElText from '$components/esp/form/FormElText.svelte';
	// import * as yup from 'yup';

	//export let form;
	export let formId = 0

	// async function getForm() {
	// 	const res = await client.query(q.Get(q.Ref(q.Collection('forms'), '363255616174555209')));
	// 	const data = await res.data;
	// 	return data;
	// }
	// export async function load({ fetch }) {
	// 	// const fetchProducts = async () => {
	// 	// 	const productsRes = await fetch('https://dummyjson.com/products?limit=10');
	// 	// 	const productData = await productsRes.json();
	// 	// 	return productData.products;
	// 	// };

	// 	return {
	// 		quote: JSON.stringify(await getForm())
	// 	};
	// 	// throw error(404, 'Not found');
	// }

	//const comps = [{ type: 'text', component: FormElText }];

	// const comps = new Map([
	// 	['checkbox', resolveComponent('FormElCheckbox')],
	// 	['date', resolveComponent('FormElDate')],
	// 	['radio', resolveComponent('FormElRadio')],
	// 	['select', resolveComponent('FormElSelect')],
	// 	['text', resolveComponent('FormElText')]
	// ]);

	// function getComp(type) {
	// 	let obj = comps.find((comp) => comp.type === type);
	// 	return obj.component;
	// }

	// function onSubmit(e) {
	// 	const formData = new FormData(e.target);

	// 	const data = {};
	// 	for (let field of formData) {
	// 		const [key, value] = field;
	// 		data[key] = value;
	// 	}
	// 	alert(JSON.stringify(data, null, 2));
	// }

	async function getData() {
		const response = await fetch('/custom')
		const data = await response.json()
		alert(JSON.stringify(data))
	}
</script>

<div class="esp-card">
	<h2>{formId}</h2>

	<label class="label">
		<span>Input</span>
		<input class="input bg-white" type="text" name="name" placeholder="Input" />
	</label>

	<button type="button" class="esp-btn w-full">Submit</button>
</div>

<div class="esp-card">
	<button type="button" class="esp-btn" on:click={getData}>Get Data</button>
</div>
