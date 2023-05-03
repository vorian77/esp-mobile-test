<script>
	import AuthSignup from './AuthSignup.svelte'
	import AuthLogin from './AuthLogin.svelte'

	export let authType = 'login'

	const components = {
		signup: AuthSignup,
		login: AuthLogin
	}
</script>

<div class="section is-flex">
	<svelte:component this={components[authType]} />
</div>

<style>
	.section {
		background-color: whitesmoke;
		justify-content: center;
	}
</style>
