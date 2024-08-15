import "./App.css";
import BgAnimation from "./components/BgAnimation";
import BottomGrid from "./components/BottomGrid";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative h-screen overflow-hidden">
      <BgAnimation />
      <Navbar />
      <BottomGrid />
    </div>
  );
}

export default App;
