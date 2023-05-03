<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(async () => {
		// goto('/welcome')
	});
</script>

<h1>Welcome (temp)</h1>

<ul>
	<li>
		<a href="/welcome">Welcome</a>
	</li>
	<li>
		<a href="/home">Home</a>
	</li>
	<li>
		<a href="/dev/demo">Dev - Native API Demo</a>
	</li>
	<li>
		<a href="/apps/cm/363609068843040849">CaseManager - Profile</a>
	</li>
</ul>
