
import { Map, MapControls } from "@/components/ui/map";
import { Card } from "@/components/ui/card";

function App() {


  return (
    <div className="flex flex-col w-full p-2">
      <Card className="h-[800px] p-0 overflow-hidden">
        <Map center={[1.5199, 37.2672]} zoom={11}>
          <MapControls
            position="top-left"
            showZoom
            showCompass
            showLocate
            showFullscreen
          />

        </Map>
      </Card>
    </div>
  )
}

export default App
