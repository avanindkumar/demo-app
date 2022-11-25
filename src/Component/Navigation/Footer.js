import React from "react";
import "./Footer.css";
import facebookImage from "../../assets/Facebook.svg";
import twitterImage from "../../assets/Twitter.svg";
import instaImage from "../../assets/Instagram.svg";
import logoImage from "../../assets/Logo.svg";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logoImage} alt="Logo" />
        <p>
          <strong>LaslesVPN </strong> is a private virtual network that has
          unique features and has high security.
        </p>
        <div className="footer-social-liks">
          <img src={facebookImage} alt="Facebook" />
          <img src={twitterImage} alt="Twitter" />
          <img src={instaImage} alt="Instagram" />
        </div>
        <p className="footer-copyright">
          ©2020<strong>LaslesVPN</strong>
        </p>
      </div>
      <div className="footer-action">
        <FooterLinks
          title="Product"
          list={[
            "Download",
            "Pricing",
            "Location",
            "Server",
            "Countries",
            "Blog",
          ]}
        />
        <FooterLinks
          title="Engage"
          list={[
            "LaslesVPN ?",
            "FAQ",
            "Tutorials",
            "About Us",
            "Privacy Policy",
            "Terms of Service",
          ]}
        />
        <FooterLinks
          title="Earn Money"
          list={["Affiliate", "Become Partner"]}
        />
      </div>
    </div>
  );
};

export default Footer;
