import React from "react";

const Banner = () => {
  return (
    <section className="section relative section-banner">
      <div className="container">
        <div className="banner-desc">
          <h2 className="banner-title">
            Sale of the <br />
            <span className="text-primary">summer</span>
            <br />
            collection
          </h2>
          <a className="banner-button d-flex align-center justify-space-between" href="@#">
            <span className="left-arrow-bg">
              <i className="icon icon-left-arrow"></i>
            </span>

            <p className="banner-btn-desc">SHOP NOW</p>
          </a>
        </div>
      </div>
      <ul className="feature-list">
        <li className="feature-item">
          <span className="wrapper-ic wrapper-ic-primary">
            <i className="icon icon-truck"></i>
          </span>
          <div className="feature-detail">
            <h4 className="feature-name">Free shipping</h4>
            <p className="feature-desc">On purchases over $199</p>
          </div>
        </li>
        <li className="feature-item">
          <span className="wrapper-ic wrapper-ic-primary">
            <i className="icon icon-happy"></i>
          </span>
          <div className="feature-detail">
            <h4 className="feature-name">99% Satisfied Customers</h4>
            <p className="feature-desc">
              Our clients opinions speak for themselves
            </p>
          </div>
        </li>
        <li className="feature-item">
          <span className="wrapper-ic wrapper-ic-primary">
            <i className="icon icon icon-guarantee"></i>
          </span>
          <div className="feature-detail">
            <h4 className="feature-name">Originality Guaranteed</h4>
            <p className="feature-desc">
              30 days warranty for each product from our store
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Banner;
