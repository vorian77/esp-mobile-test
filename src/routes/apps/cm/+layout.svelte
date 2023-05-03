<script>
	import { AppShell, AppBar } from '@skeletonlabs/skeleton'
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<a href="/">My Students</a>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
