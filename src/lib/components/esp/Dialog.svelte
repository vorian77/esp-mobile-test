<script>
	export let dialogShow
	export let dialogBody
	export let dialogResult
	const CANCELLED = 'cancelled'

	let dialog // HTMLDialogElement

	$: if (dialog && dialogShow) dialog.showModal()

	function submit(e) {
		if (e.submitter.id !== 'cancel') {
			e.preventDefault()
			const formData = new FormData(e.target)
			const formParms = Object.fromEntries(formData.entries())
			close(JSON.stringify(formParms, null, 2))
		} else {
			close(CANCELLED)
		}
	}

	document.addEventListener('keydown', (event) => {
		if (dialogShow && (event.key === 'Escape' || event.key === 'Esc')) {
			event.stopImmediatePropagation()
			return close(CANCELLED)
		}
	})

	function close(returnValue) {
		dialogResult = returnValue
		dialogShow = false
		dialog.close()
	}
</script>

<dialog id="dialog" bind:this={dialog}>
	<svelte:component this={dialogBody} on:submit={submit} />
</dialog>
