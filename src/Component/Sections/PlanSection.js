import React from "react";
import Card from "../UIElement/Card";
import SectionHeader from "../UIElement/SectionHeader";
import "./PlanSection.css";
const PlanSection = () => {
  return (
    <div className="plans">
      <SectionHeader
        title="Choose Your Plan"
        text="Let's choose the package that is best for you and explore it happily
          and cheerfully."
      />
      <div className="plans-card">
        <Card
          name="Free"
          features={[
            "Unlimited Bandwitch",
            "Encrypted Connection",
            "No Traffic Logs",
            "Works on All Devices",
          ]}
          price="Free"
        />
        <Card
          name="Standard"
          features={[
            "Unlimited Bandwitch",
            "Encrypted Connection",
            "Yes Traffic Logs",
            "Works on All Devices",
            "Connect Anyware",
          ]}
          price="$9"
        />
        <Card
          name="Premium"
          features={[
            "Unlimited Bandwitch",
            "Encrypted Connection",
            "Yes Traffic Logs",
            "Works on All Devices",
            "Connect Anyware",
            "Get New Features",
          ]}
          price="$12"
        />
      </div>
    </div>
  );
};

export default PlanSection;
