<script>
	import { page } from '$app/stores'
</script>

<h1>Case Manager Error</h1>
<div class="esp-card">
	<p>URL: {$page.url}</p>
	<p>Status: {$page.status}</p>
	<p>Error: {$page.error?.message}</p>
</div>
