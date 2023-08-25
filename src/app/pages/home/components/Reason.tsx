import React from "react";


const Reason = () => {
  return (
    <section className="section section-reason">
      <div className="container">
        <h3 className="section-title pb-24 sm-pb-16 center-text">
          Why should you choose us?
        </h3>
        <ul className="service-list p-24 sm-p-reset sm-pt-16 row">
          <li className="service-item col col-3 col-sm-12">
            <a className="link-free-ship" href="">
              <span className="wrapper-ic wrapper-ic-white">
                <i className="icon icon-shipping"></i>
              </span>
              <div className="service-info">
                <h4 className="service-title txt-bold">Free shipping</h4>
                <p className="service-desc">
                  All purchases over $199 are eligible for free shipping via
                  USPS First className Mail.
                </p>
              </div>
            </a>
          </li>
          <li className="service-item col col-3 col-sm-12">
            <a className="link-payment" href="">
              <span className="wrapper-ic wrapper-ic-white">
                <i className="icon icon-payment"></i>
              </span>
              <div className="service-info">
                <h4 className="service-title txt-bold">Easy Payments</h4>
                <p className="service-desc">
                  All payments are processed instant lover a secure payment
                  protocol.
                </p>
              </div>
            </a>
          </li>
          <li className="service-item col col-3 col-sm-12">
            <a className="link-guarantee" href="">
              <span className="wrapper-ic wrapper-ic-white">
                <i className="icon icon-guarantee-b"></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">Money-Back Guarantee</h4>
                <p className="service-desc">
                  If an item arrived damaged or you'vechanged your mind, you can
                  send itback for a full refund.
                </p>
              </div>
            </a>
          </li>
          <li className="service-item col col-3 col-sm-12">
            <a className="link-quality" href="">
              <span className="wrapper-ic wrapper-ic-white">
                <i className="icon icon-quality"></i>
              </span>
              <div className="service-info">
                <h4 className="service-title txt-bold">Finest Quality</h4>
                <p className="service-desc">
                  Designed to last, each of our products hasbeen crafted with
                  the finest materials.
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Reason;
