import React, { Component } from "react";
import "../../stylesheets/components/font.css";
import "../../stylesheets/components/homeInfo.css";
import manualPic from "../../images/manual.jpg";
import kkbsLogo from "../../images/kkbs-logo.png";
import { withRouter } from "react-router-dom";

class homeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  render() {
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
                onClick={() => {
                  this.props.history.push("/swot-info");
                  window.scrollTo(0, 0);
                }}
              >
                แบบประเมิน SWOT
              </button>
              <button
                className="button-olc"
                id="button-olc"
                onClick={() => {
                  this.props.history.push("/olc-info");
                  window.scrollTo(0, 0);
                }}
              >
                แบบประเมิน OLC
              </button>
              <button
                className="button-both"
                id="button-both"
                onClick={() => {
                  this.props.history.push("/pre-swotolc");
                  window.scrollTo(0, 0);
                }}
              >
                แบบประเมิน SWOT และ OLC
              </button>
            </div>
          </div>
          {/* <div className="info">
            <div className="swot-info">
              <p>
                <span
                  style={{
                    textAlign: "center",
                    fontSize: "2em",
                    color: "#f16f20",
                    justifyContent: "center",
                  }}
                >
                  คู่มือการทำ Swot Analysis
                  <br />
                </span>
                <br /> 1. เมื่อเข้าสู้หน้าของเครื่องมือแล้ว
                จะพบกับหน้าแรกให้เลือกประเภทของธุรกิจของธุรกิจของท่าน <br />
                <br />
                2. เมื่อเลือกประเภทธุรกิจของท่านแล้วหน้าเว็บจะไปที่หน้าถัดไป
                คือการเริ่มต้นการทำ Swot Analysis โดยท่านเลือกจุดแข็ง จุดอ่อน
                โอกาส และอุปสรรคของธุรกิจท่านมากที่สุด
                เมื่อเลือกครบปัจจัยแรกโปรแกรมจะเลื่อนลงไปให้ท่านเลือกปัจจัยถัดไปจนครบทุกปัจจัย
                ให้ท่านกดปุ่ม Next เพื่อไปประเมินในขั้นตอนถัดไป
                <br />
                <br /> 3. เมื่อเข้าสู่หน้าถัดไปท่านจะพบกับปัจจัยอย่างอย่างละ 5
                ข้อ เพื่อให้ท่านให้คะแนนแต่ละปัจจัย
                โดยการให้คะแนนแต่ละปัจจัยนั้นจะมีการกำหนดค่าคะแนนให้ 1 – 5
                โดยเรียงจากกส่งผลกระทบน้อยไปมาก
                การให้คะแนนแต่ละปัจจัยต้องเป้นความจริงจากธุรกิจของท่าน
                เพื่อความถูกต้องในการวิเคราะห์ธุรกิจของท่าน
                เมื่อท่านให้คะแนนครบทุกปัจจัยแล้ว
                โปรแกรมจะประมวลผลและได้รับผลประเมินออกมาให้ถัดกดปุ่ม Next
                เพื่อดำเนินการต่อไป
                <br /> <br />
                4. เมื่อท่านได้รับผลประเมินของแต่ละปัจจัยออกมา
                โปรแกรมจะทำผลประเมินมาวาดกราฟลงใน BCG Matrix
                และให้คำแนะนำสำหรับธุรกิจของท่าน
                <br />
              </p>
            </div>
          </div> */}
          {/* <div className="info2">
            <div className="olc-info">
              <p>
                <span
                  style={{
                    textAlign: "center",
                    fontSize: "2em",
                    color: "#f16f20",
                    justifyContent: "center",
                  }}
                >
                  คู่มือการทำ OLC Analysis
                  <br />
                </span>
                <br />
                1. ให้ผู้ใช้งานเลือกคำตอบที่ตรงกับธุรกิจตนเองมากที่สุดไม่เกิน 10
                ตัวเลือก <br />
                <br />
                2. เมื่อทำการเลือกเสร็จสิ้น
                ระบบจะทำการประมวลผลว่าธุรกิจหรือกิจการของคุณนั้นอยู่ในช่วงใดของวงจรชีวิตธุรกิจ
                (OLC)
                <br />
                <br /> 3. ในกรณีที่ทำแบบทดสอบเสร็จสิ้นแล้วไม่ปรากฏคำตอบ
                หากแต่แสดงหน้าเว็บไซต์ที่เป็นแบบสอบถามอีกครั้ง
                ให้ท่านทำการให้คะแนนตัวเลือกทั้งหมด 5 ข้อ
                โดยต้องให้คะแนนในแต่ละข้อไม่ซ้ำกันและท่านสามารถให้คะแนนได้ตั้งแต่
                1-5 คะแนน เมื่อทำการให้คะแนนเสร็จสิ้นให้กดประเมินผลอีกครั้ง
                <br />
                <br />
                *หมายเหตุ 1.
                ผลการประเมินที่ได้อาจเป็นข้อมูลเพียงเบื้องต้นเท่านั้น 2.
                ตัวเลือกที่ใช้ในการทำแบบทดสอบนั้นอยู่ในช่วงระยะเวลาปัจจุบัน
                (เดือนพฤษภาคม พ.ศ.2563)
                <br />
              </p>
              
            </div>
          </div> 
          */}
        </div>

        {/* right column */}
        <div className="right-column">
          <div className="news">
            <h1>ข่าวและบทความ</h1>

            <div className="cards">
              <div className="card1">
                <div className="card1-pic">
                  <img
                    src={manualPic}
                    alt=""
                    onClick={() => {
                      this.props.history.push("/howto");
                      window.scrollTo(0, 0);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                  <h2>คู่มือการใช้</h2>
                </div>
              </div>

              <div className="card2">
                <div className="card2-pic">
                  <a href="https://kkbs.kku.ac.th/" target="_blank">
                    <img src={kkbsLogo} alt="" />
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
              <div
                className="fb-page page1"
                data-href="https://www.facebook.com/IQMKKUModel/"
                data-tabs="timeline"
                data-width="800px"
                data-height=""
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/IQMKKUModel/"
                  class="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/IQMKKUModel/">Facebook</a>
                </blockquote>
              </div>

              <div
                className="fb-page page2"
                data-href="https://www.facebook.com/IQMKKUModel/"
                data-tabs="timeline"
                data-width="300px"
                data-height=""
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/IQMKKUModel/"
                  class="fb-xfbml-parse-ignore"
                ></blockquote>
              </div>
            </div>
          </div>
          {/* facebook page2 */}
          <div className="facebook">
            <h1>Facebook page</h1>
            <div
              style={{
                display: "block",
                margin: "0 auto",
                width: "100%",
              }}
            >
              <div
                className="fb-page page1"
                data-href="https://www.facebook.com/pg/%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%AA%E0%B8%B3%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%88%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%81%E0%B8%A3-114111063647678/posts/"
                data-tabs="timeline"
                data-width="800px"
                data-height=""
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/pg/%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%AA%E0%B8%B3%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%88%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%81%E0%B8%A3-114111063647678/posts/"
                  class="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/pg/%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%AA%E0%B8%B3%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%88%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%81%E0%B8%A3-114111063647678/posts/">
                    Facebook
                  </a>
                </blockquote>
              </div>

              <div
                className="fb-page page2"
                data-href="https://www.facebook.com/pg/%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%AA%E0%B8%B3%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%88%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%81%E0%B8%A3-114111063647678/posts/"
                data-tabs="timeline"
                data-width="300px"
                data-height=""
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/pg/%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%AA%E0%B8%B3%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%88%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%81%E0%B8%A3-114111063647678/posts/"
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

export default withRouter(homeInfo);
