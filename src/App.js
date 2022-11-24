import "./App.css";
import MainHeader from "./Component/Navigation/MainHeader";
import CountSection from "./Component/Sections/CountSection";
import IntroSection from "./Component/Sections/IntroSection";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <IntroSection />
      <CountSection />
    </div>
  );
}

export default App;
