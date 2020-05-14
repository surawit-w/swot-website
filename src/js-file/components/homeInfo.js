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
              {/*<img src={swotPic} alt="swot-pic" className="swot-pic" />*/}
            </div>
          </div>
          <div className="info2">
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
              {/*<img src={olcPic} alt="olc-pic" className="olc-pic" />*/}
            </div>
          </div>
          <div className="info3">
            <div className="swotolc-info">
              <p>
                <span
                  style={{
                    textAlign: "center",
                    fontSize: "2em",
                    color: "#f16f20",
                    justifyContent: "center",
                  }}
                >
                  คู่มือการทำ SWOT+OLC Analysis
                  <br />
                </span>
                <br />
                1. เมื่อเข้าสู้หน้าของเครื่องมือแล้ว
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
                <br />
                <br />
                4. เมื่อทำการกด Next แล้ว
                ในหน้าถัดไปจะเป็นในส่วนของการทำแบบทดสอบ OLC
                <br />
                <br />
                5. ให้ผู้ใช้งานเลือกคำตอบที่ตรงกับธุรกิจตนเองมากที่สุดไม่เกิน 10
                ตัวเลือก เมื่อทำการเลือกเสร็จสิ้นแล้วให้กดที่ปุ่ม ประเมินผล
                <br />
                <br />
                6. เมื่อทำการเลือกเสร็จสิ้นระบบจะทำการประเมินผลลัพธ์ที่ได้
                หากท่านได้รับผลประเมินของแต่ละปัจจัยออกมา
                โปรแกรมจะนำผลการประเมินที่ได้มาวาดกราฟลงใน BCG Matrix
                และวิเคราะห์ว่าธุรกิจหรือกิจการของท่านนั้นอยู่ในช่วงใดของวงจรชีวิตธุรกิจ
                (OLC) พร้อมคำแนะนำสำหรับธุรกิจของท่าน
                <br />
                <br />
                *หมายเหตุ 1. ข้อมูลที่ได้อาจเป็นข้อมูลเพียงเบื้องต้นเท่านั้น 2.
                ตัวเลือกที่ใช้ในการทำแบบทดสอบนั้นอยู่ในช่วงระยะเวลาปัจจุบัน
                (เดือนพฤษภาคม พ.ศ.2563) 3.
                ในกรณีที่ทำแบบทดสอบเสร็จสิ้นแล้วไม่ปรากฏคำตอบ
                หากแต่แสดงหน้าเว็บไซต์ที่เป็นแบบสอบถามอีกครั้ง
                ให้ท่านเลือกคำตอบที่ตรงกับธุรกิจของท่านไม่เกิน 5 ตัวเลือก
                และทำการกดประเมินผลอีกครั้ง
                <br />
              </p>
              {/*<img src={olcPic} alt="olc-pic" className="olc-pic" />*/}
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
                  <img
                    src={manualPic}
                    onClick={() => (window.location = "/howto")}
                    style={{ cursor: "pointer" }}
                  />
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
