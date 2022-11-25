import React from "react";
import SectionHeader from "../UIElement/SectionHeader";
import "./NetworkSection.css";
import mapImage from "../../assets/Huge Global.svg";
import netfilxLogo from "../../assets/Mask Group.svg";
import redditLogo from "../../assets/Mask Group (1).svg";
import amazonLogo from "../../assets/Mask Group (2).svg";
import discordLogo from "../../assets/Mask Group (3).svg";
import spotifyLogo from "../../assets/Mask Group (4).svg";

const NetworkSection = () => {
  return (
    <div className="network-section">
      <div className="network-section-header">
        <SectionHeader
          title="Huge Global Network of Fast VPN"
          text="See LaslesVPN everywhere to make it easier for you when you move locations."
        />
      </div>
      <div className="network-section-map">
        <img src={mapImage} alt="Map" />
      </div>
      <div className="network-section-logos">
        <img src={netfilxLogo} alt="Netfilx" />
        <img src={redditLogo} alt="Reddit" />
        <img src={amazonLogo} alt="Amazon" />
        <img src={discordLogo} alt="Discord" />
        <img src={spotifyLogo} alt="Spotify" />
      </div>
    </div>
  );
};

export default NetworkSection;
