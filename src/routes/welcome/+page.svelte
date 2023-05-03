<script>
	import { goto } from '$app/navigation'
	import logo from '$assets/YO-Baltimore-logo.png'
</script>

<div id="full-screen" class="container">
	<div class="content">
		<img class="mx-auto" src={logo} width="260" alt="YO logo" />

		<!-- button group -->
		<div class="flex-box">
			<button type="button" class="esp-btn w-full mt-10" on:click={() => goto('/dev/demo')}
				>Get started</button
			>
			<button
				type="button"
				class="esp-btn-ringed w-full mt-1"
				on:click={() => goto('/apps/cm/363609068843040849')}>Log in</button
			>
			<button class="esp-btn variant-filled-primary">Test</button>
		</div>
	</div>
</div>

<style>
	#full-screen {
		height: 100vh;
		overflow: hidden; /* Hide scrollbars */
		background-image: url('$assets/moed2.jpg');
		background-size: cover;
	}
	img {
		height: 100%;
	}
	.container {
		position: relative;
		text-align: center;
		color: whitesmoke;
	}

	.content {
		position: fixed;
		top: 75%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 90%;
	}
</style>
