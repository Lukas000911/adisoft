import "./App.css";
import { useMediaQuery } from "react-responsive";
import Navigation from "./components/Navigation";
import HeroSlider from "./components/HeroSlider";
import SpaceTab from "./components/SpaceTab";
import MobileNavigation from "./components/MobileNavigation";

function App() {
  const isTablet = useMediaQuery({ maxWidth: 768 });
  return (
    <div>
      {isTablet ? <MobileNavigation /> : <Navigation />}
      <HeroSlider />
      <SpaceTab />
    </div>
  );
}

export default App;
