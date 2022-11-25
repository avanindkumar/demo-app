import { useRef } from "react";
import "./App.css";
import Footer from "./Component/Navigation/Footer";
import MainHeader from "./Component/Navigation/MainHeader";
import CountSection from "./Component/Sections/CountSection";
import IntroSection from "./Component/Sections/IntroSection";
import IntroSection2 from "./Component/Sections/IntroSection2";
import NetworkSection from "./Component/Sections/NetworkSection";
import PlanSection from "./Component/Sections/PlanSection";
import SubscribeSection from "./Component/Sections/SubscribeSection";
import TestimonialSection from "./Component/Sections/TestimonialSection";

function App() {
  const introSection = useRef();
  const introSection2 = useRef();
  const planSection = useRef();
  const testimonialSection = useRef();
  const helpSection = useRef();
  const navClickHandler = (event) => {
    const el = event.target.textContent;
    if (el === "About") {
      introSection.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (el === "Features") {
      introSection2.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (el === "Pricing") {
      planSection.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (el === "Testimonial") {
      testimonialSection.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (el === "Help") {
      console.log("clicked");
      helpSection.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="App">
      <div className="sticky">
        <MainHeader onClick={navClickHandler} />
      </div>
      <div ref={introSection}>
        <IntroSection />
      </div>
      <CountSection />
      <div ref={introSection2}>
        <IntroSection2 />
      </div>
      <div ref={planSection}>
        <PlanSection />
      </div>
      <NetworkSection />
      <div ref={testimonialSection}>
        <TestimonialSection />
      </div>
      <div className="subscribe-container">
        <SubscribeSection />
      </div>
      <div className="footer-container" ref={helpSection}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
