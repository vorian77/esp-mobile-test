<script lang="ts">
	import { page } from '$app/stores'
	import Form from '$comps/esp/form/Form.svelte'
</script>

<Form formDefn={$page.data} />

<pre>
  {JSON.stringify($page, null, 2)}
</pre>
