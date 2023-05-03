<script lang="ts">
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton'
	import type { DrawerSettings } from '@skeletonlabs/skeleton'
	import Auth from '$comps/auth/Auth.svelte'

	// const drawerSettings: DrawerSettings = {
	// 	id: 'example-2',
	// 	duration: 400,
	// 	position: 'bottom',
	// 	// width: 'w-[280px] md:w-[480px]',
	// 	height: '0',

	// 	meta: { foo: 'bar', fizz: 'buzz', age: 40 }
	// };

	// function drawerOpen(): void {
	// 	drawerStore.open(drawerSettings);
	// }
	// function drawerClose(): void {
	// 	drawerStore.close();
	// }
</script>

<h1>Test (Auth)</h1>

<Auth />

<!-- <Drawer position="bottom"><Auth /></Drawer>

<div class="container h-full mx-auto flex justify-center">
	<div class="space-y-5">
		<button type="button" class="esp-btn" on:click={drawerOpen}>Open Drawer</button>
		<button type="button" class="esp-btn" on:click={drawerClose}>Close Drawer</button>
	</div>
</div> -->
