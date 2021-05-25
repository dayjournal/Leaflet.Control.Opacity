import * as Leaflet from "leaflet";

declare module "leaflet" {
	interface OpacityOptions extends Leaflet.ControlOptions {
		collapsed?: boolean
		label?: string | null
	}
	namespace Control {
		class Opacity extends Leaflet.Control {
			constructor(
				options?: OpacityOptions
			)
		}
	}
	namespace control {
		function opacity(overlays: { [key: string]: L.Layer }, options: OpacityOptions): L.Control.Opacity
	}
}