import React, { Component } from "react";
import "../../stylesheets/components/font.css";
import "../../stylesheets/components/homeInfo.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { withRouter } from "react-router-dom";
class howtoPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btnActive: 2,
    };
  }

  // Before render
  componentDidMount = async () => {
    localStorage.clear();
  };

  render() {
    let { btnActive } = this.state;
    return (
      <div>
        <Navbar home={btnActive} />
        <div className="all">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10%",
              marginRight: "10%",
            }}
          >
            <div className="linkback">
              <p
                onClick={() => {
                  {
                    this.props.history.push("/");
                    window.scrollTo(0, 0);
                  }
                }}
              >
                HOME > <span style={{ color: "#f16f20" }}>คู่มือ</span>
              </p>
            </div>

            <div className="info">
              <div className="swot-info" style={{ marginTop: "0%" }}>
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
                    คู่มือการทำ Organization Life Cycle (OLC)
                    <br />
                  </span>
                  <br />
                  1. ให้ผู้ใช้งานเลือกคำตอบที่ตรงกับธุรกิจตนเองมากที่สุดไม่เกิน
                  10 ตัวเลือก <br />
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
                  5. ให้ผู้ใช้งานเลือกคำตอบที่ตรงกับธุรกิจตนเองมากที่สุดไม่เกิน
                  10 ตัวเลือก เมื่อทำการเลือกเสร็จสิ้นแล้วให้กดที่ปุ่ม ประเมินผล
                  <br />
                  <br />
                  6. เมื่อทำการเลือกเสร็จสิ้นระบบจะทำการประเมินผลลัพธ์ที่ได้
                  หากท่านได้รับผลประเมินของแต่ละปัจจัยออกมา
                  โปรแกรมจะนำผลการประเมินที่ได้มาวาดกราฟลงใน BCG Matrix
                  และวิเคราะห์ว่าธุรกิจหรือกิจการของท่านนั้นอยู่ในช่วงใดของวงจรชีวิตธุรกิจ
                  (OLC) พร้อมคำแนะนำสำหรับธุรกิจของท่าน
                  <br />
                  <br />
                  *หมายเหตุ 1. ข้อมูลที่ได้อาจเป็นข้อมูลเพียงเบื้องต้นเท่านั้น
                  2. ตัวเลือกที่ใช้ในการทำแบบทดสอบนั้นอยู่ในช่วงระยะเวลาปัจจุบัน
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
        </div>
        <Footer />
      </div>
    );
  }
}
export default withRouter(howtoPage);
