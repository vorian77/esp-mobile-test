<script>
	import FormElText from '$comps/esp/form/FormElText.svelte'

	export let formDefn = ''
	// export let form

	const comps = [
		{ type: 'phone', component: FormElText },
		{ type: 'text', component: FormElText }
	]

	function getComp(type) {
		let obj = comps.find((comp) => comp.type === type)
		return obj.component
	}

	async function onSubmit() {
		return ''
	}
</script>

<div class="esp-card">
	<h2>{formDefn.name}</h2>
	<!-- <h5>{formDefn.description}</h5> -->

	<form method="POST" action="?/update">
		{#each formDefn.fields as field, index (field.name)}
			<svelte:component this={getComp(field.component)} {field} />
		{/each}

		<button type="submit" class="esp-btn w-full mt-2">Update</button>
	</form>
</div>
