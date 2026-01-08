
import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MarkerTooltip,
} from "@/components/ui/map";
import { Card } from "@/components/ui/card";

const locations = [
  {
    id: 1,
    name: "Machakos University",
    lng: 37.2651,
    lat: -1.5435,
  },
  {
    id: 2,
    name: "Century Park",
    lng: 37.2595,
    lat: -1.5391,
  },
  {
    id: 3,
    name: "Machakos TTI",
    lng: 37.2628,
    lat: -1.5309
  },
]

function App() {



  return (
    <div className="flex flex-col w-full p-2">
      <Card className="h-[800px] p-0 overflow-hidden">
        <Map center={[37.261402, -1.5382198]} zoom={14}>
          <MapControls
            position="top-left"
            showZoom
            showCompass
            showLocate
            showFullscreen
          />

          {locations.map((location) => (
            <MapMarker
              key={location.id}
              longitude={location.lng}
              latitude={location.lat}
            >
              <MarkerContent>
                <div className="size-4 rounded-full bg-green-500 border-2 border-white shadow-lg" />
              </MarkerContent>
              <MarkerTooltip>{location.name}</MarkerTooltip>
              <MarkerPopup>
                <div className="space-y-1">
                  <p className="font-medium text-white">{location.name}</p>
                  <p className="text-xs text-white">
                    {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                  </p>
                </div>
              </MarkerPopup>
            </MapMarker>
          ))}

        </Map>
      </Card>
    </div>
  )
}

export default App
