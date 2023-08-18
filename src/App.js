import "./App.css";
import Image from "./components/Image";
import TextSection from "./components/TextSection";
import ShareSection from "./components/ShareSection";

function App() {
  return (
    <div className="app">
      <Image />
      <div>
        <TextSection />
        <ShareSection />
      </div>
    </div>
  );
}

export default App;
