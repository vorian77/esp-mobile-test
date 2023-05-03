<script>
	import { getContext } from 'svelte'

	import Dialog from './Dialog.svelte'
	import CloseButton from './CloseButton.svelte'

	const { open } = getContext('simple-modal')

	let name
	let status = 0

	const onCancel = (text) => {
		name = ''
		status = -1
	}

	const onOkay = (text) => {
		name = text
		status = 1
	}

	const showDialog = () => {
		open(
			Dialog,
			{
				message: 'What is your name?',
				hasForm: true,
				onCancel,
				onOkay
			},
			{
				closeButton: false,
				closeOnEsc: false,
				closeOnOuterClick: false
			}
		)
	}
</script>

<section>
	<button on:click={showDialog}>Show a dialog!</button>

	{#if status === 1}
		<p>Hi {name}! 👋</p>
	{:else if status === -1}
		<p><em>Dialog was canceled</em></p>
	{/if}
</section>
