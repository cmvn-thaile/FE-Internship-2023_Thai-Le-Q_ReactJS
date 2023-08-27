import React from "react";
import logo from "../../assets/img/logo.png";
import icFacebook from "../../assets/img/ic-facebook.svg";
import icTwitter from "../../assets/img/ic-twitter.svg";
import icLinkedin from "../../assets/img/ic-linkedin.svg";
import icInstagram from "../../assets/img/ic-instagram.svg";
import icYoutube from "../../assets/img/ic-youtube.svg";

const Footer = () => {
  //create icon list and icon element
  const iconList = [icFacebook, icTwitter, icLinkedin, icInstagram, icYoutube];
  const iconElement = iconList.map((icon, index) => {
    return (
      <li key={index} className="social-item">
        <a className="social-ic" href="@#">
          <img src={icon} alt={icon} />
        </a>
      </li>
    );
  });

  //create list footer
  const policyList = [
    "Order Status",
    "Shipping and Delivery",
    "Returns",
    "Payment Options",
    "Contact Us",
  ];

  const inforList = [
    "Gift Cards",
    "Find a store",
    "Newsletter",
    "Become a member",
    "Site feedback",
  ];

  const contactList = ["store@uikit.com", "Hotline: +1 131 138 138"];

  const policyElement = policyList.map((policy, index) => {
    return (
      <li key={index} className="infor-shop-item">
        <a className="info-item-link" href="@#">
          {policy}
        </a>
      </li>
    );
  });

  const inforElement = inforList.map((infor, index) => {
    return (
      <li key={index} className="infor-shop-item">
        <a className="info-item-link" href="@#">
          {infor}
        </a>
      </li>
    );
  });

  const contactElement = contactList.map((contact, index) => {
    return (
      <li key={index} className="infor-shop-item">
        {contact}
      </li>
    );
  });

  return (
    <footer>
      <div className="section">
        <div className="container">
          <div className="footer-top row">
            <div className="shop-details-sums col col-5 col-sm-12">
              <h2 className="shop-details-logo">
                <a className="logo-link" href="@#">
                  <img className="logo-img" src={logo} alt="E-Shop" />
                </a>
              </h2>
              <p className="shop-details-desc">
                House My Brand designs clothing for the young, the old &everyone
                in between – but most importantly, for the fashionable
              </p>
              <ul className="social-list">{iconElement}</ul>
            </div>

            <ul className="shop-details-list row col col-6 col-sm-12">
              <li className="shop-details-item col col-4 col-sm-12">
                <p className="infor-shop-title">Shopping online</p>
                <ul className="infor-shop-list">{policyElement}</ul>
              </li>
              <li className="shop-details-item col col-4 col-sm-12">
                <p className="infor-shop-title">Information</p>
                <ul className="infor-shop-list">{inforElement}</ul>
              </li>
              <li className="shop-details-item col col-4 col-sm-12">
                <p className="infor-shop-title">Contact</p>
                <ul className="infor-shop-list">{contactElement}</ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          DESIGN BY CEO.CO - © 2019. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
