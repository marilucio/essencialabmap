import { useSearchParams } from "react-router-dom";
import MapLandingPage from "./MapLandingPage";

function MapWrapper() {
  const [searchParams] = useSearchParams();
  const language = searchParams.get("lang") || "pt";

  return <MapLandingPage language={language} />;
}

export default MapWrapper;

