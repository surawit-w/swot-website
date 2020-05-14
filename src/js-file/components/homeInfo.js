import React, { Component } from "react";
import "../../stylesheets/components/font.css";
import "../../stylesheets/components/homeInfo.css";
import swotPic from "../../images/swot-analysis.jpg";
import olcPic from "../../images/olc-pic.jpg";
import manualPic from "../../images/manual.jpg";
import kkbsLogo from "../../images/kkbs-logo.png";
import { FacebookProvider, Page } from "react-facebook";
import { Transition } from "semantic-ui-react";

export default class homeInfo extends Component {
  state = { visible: true };
  render() {
    const { visible } = this.state;

    return (
      <div className="all">
        {/* left column */}
        <div className="left-column">
          <div className="about">
            <h1>เกี่ยวกับเรา</h1>

            <div className="about-info">
              <p>
                โปรแกรมวิเคราะห์สิ่งแวดล้อมและศักยภาพขององค์กรด้วยเครื่องมือทางการจัดการเพื่อพัฒนาการดำเนินธุรกิจขององค์กรและพัฒนากลยุทธ์ทางการตลาดเป็นโปรแกรมที่สร้างขึ้นเพื่อช่วยให้ผู้ประกอบการธุรกิจ
                SMEs สามารถเข้าถึงการใช้เครื่องมือทางการจัดการ (Swot Analysis
                ,Organization Life Cycle)
                เข้ามาช่วยวิเคราะห์ธุรกิจของตนเองได้อย่างมีหลักการโดยใช้โปรแกรมสำเร็จรูป
                ส่งผลให้ผู้ประกอบการสามารถทราบถึงแนวทางในการแก้ไขปัญหาที่องค์กรกำลังประสบอยู่
                รวมถึงแนวทางในการพัฒนาองค์กรในด้านต่างๆให้มีประสิทธิภาพมากยิ่งขึ้น
              </p>
            </div>
          </div>
          <div className="home-button">
            <div className="buttons">
              <button
                className="button-swot "
                id="button-swot"
                onClick={() => (window.location = "/swot-info")}
              >
                แบบประเมิน SWOT
              </button>
              <button
                className="button-olc"
                id="button-olc"
                onClick={() => (window.location = "/olc-info")}
              >
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

            <div className="cards">
              <div className="card1">
                <div className="card1-pic">
                  <img src={manualPic} />
                  <h2>คู่มือการใช้</h2>
                </div>
              </div>

              <div className="card2">
                <div className="card2-pic">
                  <a href="https://kkbs.kku.ac.th/" target="_blank">
                    <img src={kkbsLogo} />
                  </a>
                  <h2>ไปที่ website</h2>
                </div>
              </div>
            </div>
          </div>
          {/*facebook page*/}
          <div className="facebook">
            <h1>Facebook page</h1>
            <div
              style={{
                display: "block",
                margin: "0 auto",
                width: "100%",
              }}
            >
              {/* <FacebookProvider appId="584678505415758">
                <Page
                  
                  href="https://www.facebook.com/TundermanJudhai/"
                  tabs="timeline"
                />
              </FacebookProvider> */}
              <div
                className="fb-page page1"
                data-href="https://www.facebook.com/facebook"
                data-tabs="timeline"
                data-width="800px"
                data-height=""
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/facebook"
                  class="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/facebook">Facebook</a>
                </blockquote>
              </div>

              <div
                className="fb-page page2"
                data-href="https://www.facebook.com/facebook"
                data-tabs="timeline"
                data-width="300px"
                data-height=""
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/facebook"
                  class="fb-xfbml-parse-ignore"
                ></blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
