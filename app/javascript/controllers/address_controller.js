import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
	static targets = [
		'input'
	]
	connect() {
		console.log("Address controller is connected");
	}

	initGoogle() {
		// setup autocomplete
		console.log(`Googlemaps is initialized and the address controller knows about it`)
		console.log(google);
		//this.<name of target>Target
		new google.maps.places.Autocomplete(this.inputTarget)
	}

	placeSelected() {
		// use autocomplete suggestions
	}
}