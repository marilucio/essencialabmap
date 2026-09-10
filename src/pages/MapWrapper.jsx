import { useSearchParams } from "react-router";
import MapLanding from "./map/MapLanding";

function MapWrapper() {
  const [searchParams] = useSearchParams();
  const language = searchParams.get("lang") || "pt";

  return <MapLanding language={language} />;
}

export default MapWrapper;
