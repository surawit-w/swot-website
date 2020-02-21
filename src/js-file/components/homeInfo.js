import React, { Component } from "react";
import "../../stylesheets/components/font.css";
import "../../stylesheets/components/homeInfo.css";
import swotPic from "../../images/swot-analysis.jpg";
import olcPic from "../../images/olc-pic.jpg";

export default class homeInfo extends Component {
  render() {
    return (
      <div className="all">
        {/* left column */}
        <div className="left-column">
          <div className="about">
            <h1>เกี่ยวกับเรา</h1>
            <div className="about-info">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="home-button">
            <div className="buttons">
              <button className="button-swot" id="button-swot">
                แบบประเมิน SWOT
              </button>
              <button className="button-olc" id="button-olc">
                แบบประเมิน OLC
              </button>
              <button className="button-both" id="button-both">
                แบบประเมิน SWOTและOLC
              </button>
            </div>
          </div>
          <div className="info">
            <div className="swot-info">
              <img src={swotPic} alt="swot-pic" className="swot-pic" />
            </div>
          </div>
          <div className="info2">
            <div className="olc-info">
              <img src={olcPic} alt="olc-pic" className="olc-pic" />
            </div>
          </div>
        </div>

        {/* right column */}
        <div className="right-column">
          <div className="news">
            <h1>ข่าวและบทความ</h1>
          </div>
        </div>
      </div>
    );
  }
}
