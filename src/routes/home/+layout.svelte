<script>
	import { AppShell, AppBar } from '@skeletonlabs/skeleton'
	import Quotes from '$comps/quotes/quotes.svelte'
	export let data
	const { quote } = data
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>Home Nav</AppBar>
		<h2>User info...</h2>
		<Quotes {quote} />
	</svelte:fragment>
	<slot />
</AppShell>
