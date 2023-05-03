<script>
	export let field
</script>

<!-- field -->
<div class="field">
	<label class="label" for={field.name}>{field.label}</label>
	<div class="control">
		<input class="input" type={field.type || field.component} placeholder={field.placeholder} />
	</div>
</div>

<!-- const {(value, errorMessage)} = useField(props.formField.name, nameFieldRules) -->
<style>
	.input-error {
		color: red;
		font-size: 0.8rem;
		padding: 0px;
	}
</style>
