import React from "react";
import SectionHeader from "../UIElement/SectionHeader";
import SliderCard from "../UIElement/SliderCard";
import person1Image from "../../assets/Ellipse 175.png";
import person2Image from "../../assets/Ellipse 175 (1).png";
import person3Image from "../../assets/Ellipse 175 (2).png";

import "./TestimonialSection.css";

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      <SectionHeader
        title="Trusted by Thousands of Happy Customer"
        text="These are the stories of our customers who have joined us with great pleasure when using this crazy feature."
      />
      <div className="slider">
        <SliderCard
          avatar={person1Image}
          name="Viezh Robert"
          location="Warsaw, Poland"
          rating="4.5"
          text="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
        />
        <SliderCard
          avatar={person2Image}
          name="Viezh Robert"
          location="Warsaw, Poland"
          rating="4.5"
          text="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
        />
        <SliderCard
          avatar={person3Image}
          name="Viezh Robert"
          location="Warsaw, Poland"
          rating="4.5"
          text="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
        />
      </div>
    </div>
  );
};

export default TestimonialSection;
