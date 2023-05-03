<script>
	import { Camera, CameraResultType } from '@capacitor/camera'

	let currentPict

	const takePicture = async () => {
		const image = await Camera.getPhoto({
			quality: 90,
			allowEditing: true,
			resultType: CameraResultType.Uri
		})
		currentPict = image.webPath
	}
</script>

<div class="esp-card">
	<h3 class="font-bold">Camera API Test</h3>
	<section class="">
		<p class="text-slate-400 italic">
			Click to use your device's camera to take a picture. Allow the app the required permissions
			once asked.
		</p>

		<img class="mx-auto mt-2" src={currentPict} alt="demo pic" width="250" />

		<button type="button" class="esp-btn w-full mt-2" on:click={takePicture}>Take A Picture</button>
	</section>
</div>
