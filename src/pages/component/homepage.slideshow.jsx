import React from "react";

export default function SlideShow() {
  return (
    <div>
      <div id="thmg-slider-slideshow" className="thmg-slider-slideshow">
        <div className="container">
          <div
            id="thm_slider_wrapper"
            className="thm_slider_wrapper fullwidthbanner-container"
          >
            <div id="thm-rev-slider" className="rev_slider fullwidthabanner">
              <ul>
                <li
                  data-transition="random"
                  data-slotamount="7"
                  data-masterspeed="1000"
                  data-thumb="https://assets.penguinrandomhouse.com/wp-content/uploads/2020/06/25201848/Homepage.jpg"
                >
                  <img
                    src="https://assets.penguinrandomhouse.com/wp-content/uploads/2020/06/25201848/Homepage.jpg"
                    data-bgposition="left top"
                    data-bgfit="cover"
                    data-bgrepeat="no-repeat"
                    alt="slider-image1"
                  />
                  <div className="info">
                    <div
                      className="tp-caption ExtraLargeTitle sft  tp-resizeme "
                      data-x="0"
                      data-y="220"
                      data-endspeed="500"
                      data-speed="500"
                      data-start="1100"
                      data-easing="Linear.easeNone"
                      data-splitin="none"
                      data-splitout="none"
                      data-elementdelay="0.1"
                      data-endelementdelay="0.1"
                      style={{ zIndex: "2", whiteSpace: "nowrap" }}
                    >

                    </div>
                    <div
                      className="tp-caption LargeTitle sfl  tp-resizeme "
                      data-x="0"
                      data-y="300"
                      data-endspeed="500"
                      data-speed="500"
                      data-start="1300"
                      data-easing="Linear.easeNone"
                      data-splitin="none"
                      data-splitout="none"
                      data-elementdelay="0.1"
                      data-endelementdelay="0.1"
                      style={{ zIndex: "3", whiteSpace: "nowrap" }}
                    >

                    </div>
                    <div
                      className="tp-caption sfb  tp-resizeme "
                      data-x="0"
                      data-y="520"
                      data-endspeed="500"
                      data-speed="500"
                      data-start="1500"
                      data-easing="Linear.easeNone"
                      data-splitin="none"
                      data-splitout="none"
                      data-elementdelay="0.1"
                      data-endelementdelay="0.1"
                      style={{ zIndex: "4", whiteSpace: "nowrap" }}
                    >
                      <a href="#" className="buy-btn">
                        Buy Now
                      </a>
                    </div>
                    <div
                      className="tp-caption Title sft  tp-resizeme "
                      data-x="0"
                      data-y="420"
                      data-endspeed="500"
                      data-speed="500"
                      data-start="1500"
                      data-easing="Power2.easeInOut"
                      data-splitin="none"
                      data-splitout="none"
                      data-elementdelay="0.1"
                      data-endelementdelay="0.1"
                      style={{ zIndex: "4", whiteSpace: "nowrap" }}
                    >

                    </div>
                  </div>
                </li>
                <li
                  data-transition="random"
                  data-slotamount="7"
                  data-masterspeed="1000"
                  data-thumb="https://assets.penguinrandomhouse.com/wp-content/uploads/2020/01/03153350/1200x628_smalltown.jpg"
                >
                  <img
                    src="https://assets.penguinrandomhouse.com/wp-content/uploads/2020/01/03153350/1200x628_smalltown.jpg"
                    data-bgposition="left top"
                    data-bgfit="cover"
                    data-bgrepeat="no-repeat"
                    alt="slider-image2"
                  />
                  <div className="info">
                    <div
                      className="tp-caption ExtraLargeTitle sft  tp-resizeme "
                      data-x="0"
                      data-y="220"
                      data-endspeed="500"
                      data-speed="500"
                      data-start="1100"
                      data-easing="Linear.easeNone"
                      data-splitin="none"
                      data-splitout="none"
                      data-elementdelay="0.1"
                      data-endelementdelay="0.1"
                      style={{ zIndex: "2", whiteSpace: "nowrap" }}
                    >
                    </div>
                    <div
                      className="tp-caption LargeTitle sfl  tp-resizeme "
                      data-x="0"
                      data-y="300"
                      data-endspeed="500"
                      data-speed="500"
                      data-start="1300"
                      data-easing="Linear.easeNone"
                      data-splitin="none"
                      data-splitout="none"
                      data-elementdelay="0.1"
                      data-endelementdelay="0.1"
                      style={{ zIndex: "3", whiteSpace: "nowrap" }}
                    >
                    </div>
                    <div
                      className="tp-caption sfb  tp-resizeme "
                      data-x="0"
                      data-y="520"
                      data-endspeed="500"
                      data-speed="500"
                      data-start="1500"
                      data-easing="Linear.easeNone"
                      data-splitin="none"
                      data-splitout="none"
                      data-elementdelay="0.1"
                      data-endelementdelay="0.1"
                      style={{ zIndex: "4", whiteSpace: "nowrap" }}
                    >
                      <a href="#" className="buy-btn">
                        Mua ngay
                      </a>
                    </div>
                    <div
                      className="tp-caption Title sft  tp-resizeme "
                      data-x="0"
                      data-y="420"
                      data-endspeed="500"
                      data-speed="500"
                      data-start="1500"
                      data-easing="Power2.easeInOut"
                      data-splitin="none"
                      data-splitout="none"
                      data-elementdelay="0.1"
                      data-endelementdelay="0.1"
                      style={{ zIndex: "4", whiteSpace: "nowrap" }}
                    >
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
