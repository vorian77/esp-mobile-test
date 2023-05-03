<script lang="ts">
	import type { Form } from '$lib'

	// export let formID = '';

	// $: formDef = $forms.filter((form) => form.id == formID);

	// import { onMount } from 'svelte';
	// import { enhance } from '$app/forms';
	// import * as forms from '$utils/UtilsForms.svelte';
	// import { formStore } from '$lib/stores';

	//import FormElText from '$components/form/FormElText.svelte';
	//import * as yup from 'yup';

	//export let form;
	// onMount(async () => {
	// 	formDef = forms.getValue(formID);
	// });

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
</script>

<!-- <h1>{formDef.title}</h1> -->
<!-- <h1>{$formStore[0].defn.title}</h1> -->

<form on:submit>
	<!-- {#each $formStore[0].defn.fields as f}
		<label class="label mt-4">
			<span>{f.label}</span>
			<input class="input bg-white" type="text" name={f.name} placeholder={f.label} />
		</label>
	{/each} -->

	<!-- <button type="button" class="esp-btn text-white variant-filled-primary w-full">Submit</button> -->
</form>

<!-- <form method="POST" use:enhance>
		<div class="field">
			<label class="label" for="nameFirst">First Name</label>
			<div class="control">
				<input
					class="input"
					type="text"
					id="nameFirst"
					name="nameFirst"
					placeholder="Enter your first name..."
					required
				/>
			</div>
			z
		</div>

		<div class="field is-grouped mt-5">
			<div class="control">
				<button type="submit" class="button is-primary">Submit</button>
			</div>
			<div class="control">
				<button type="reset" class="button is-primary is-light">Reset</button>
			</div>
		</div>
	</form> -->

<!-- Fields -->
<!-- <ul>
		{#each formDef.fields as field, index (field.name)}
			<div class="block">
				<li>
					<svelte:component this={getComp(field.component)} {field} />
				</li>
			</div>
		{/each}
	</ul> -->

<!-- Button Group -->
<!-- <div class="field is-grouped mt-5">
		<div class="control">
			<button class="button is-primary" on:click={onSubmit}>Submit</button>
		</div>
		<div class="control">
			<button class="button is-primary is-light">Cancel</button>
		</div>
	</div> -->

<!-- <div class="field">
			<label class="label" for="nameFirst">First Name</label>
			<div class="control">
				<input
					class="input"
					type="text"
					id="nameFirst"
					name="nameFirst"
					placeholder="Enter your first name..."
					required
				/>
			</div>
		</div>
	
		<div class="field">
			<label class="label" for="nameLast">Last Name</label>
			<div class="control">
				<input
					class="input"
					type="text"
					id="nameLast"
					name="nameLast"
					placeholder="Enter your last name..."
					required
				/>
			</div>
		</div> -->
