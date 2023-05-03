<script>
	import { Geolocation } from '@capacitor/geolocation'

	let lat
	let long

	async function getLocation() {
		const position = await Geolocation.getCurrentPosition()
		lat = position.coords.latitude
		long = position.coords.longitude
	}
</script>

<div class="esp-card">
	<h3 class="font-bold">Geolocation API Test</h3>
	<section class="">
		<p class="text-slate-400 italic">
			Click to use your device's GPS to get your current location. Allow the app the required
			permissions once asked.
		</p>
		<div class="mt-2">
			<p>Your location is:</p>
			<p>Latitude: {lat ? lat : ''}</p>
			<p>Longitude: {long ? long : ''}</p>
		</div>
		<button type="button" class="esp-btn w-full mt-2" on:click={getLocation}
			>Get Current Location</button
		>
	</section>
</div>
