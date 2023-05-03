<script>
	import FormEl from '$comps/esp/form/FormEl.svelte'
	export let field = {}
	const fieldType = field.type || 'text'
</script>

<FormEl {field}>
	<input class="input bg-white" type={fieldType} name={field.name} placeholder="" />
</FormEl>
