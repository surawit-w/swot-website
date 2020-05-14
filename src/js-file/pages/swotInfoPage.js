import React, { Component } from "react";
import Navbar from "../components/navbar";
import HomeInfo from "../components/homeInfo";
import Footer from "../components/footer";
import "../../stylesheets/pages/swotInfoPage.css";

export default class swotInfoPage extends Component {
  constructor(props) {
    super(props);
    // State
    this.state = {
      btnActive: 2,
    };
  }

  // Before render
  componentDidMount = async () => {};

  // Render elements
  render() {
    let { btnActive } = this.state;
    return (
      <div>
        <Navbar swot={btnActive} />
        <div className="linkback">
          <p
            onClick={() => {
              document.location.href = "/";
            }}
          >
            HOME >{" "}
            <span
              style={{ color: "#f16f20" }}
              onClick={() => {
                document.location.href = "/";
              }}
            >
              SWOT
            </span>
          </p>
        </div>
        <div className="whole">
          <div className="swot-infobox">
            <h1>การวิเคราะห์ SWOT คืออะไร?</h1>

            <p>
              Swot Analysis คือ
              หลักทฤษฎีการวิเคราะห์ชนิดหนึ่งที่มักใช้วิเคราะห์สถานะขององค์กร
              หรือธุรกิจ โดยการวิเคราะห์ด้วยวิธีการทำ SWOT
              จะนำเอาจุดแข็งและจุดอ่อนขององค์กร รวมถึงโอกาสและอุปสรรค
              เข้ามาใช้พิจารณา และวิเคราะห์สถานะภาพของกิจการ
              เพื่อประโยชน์ในการใช้วางแผนงาน ตลอดจนการสร้างกลยุทธ์ต่างๆ
              ในการดำเนินธุรกิจหรือดำเนินกิจการองค์กรให้ได้อย่างมีประสิทธิภาพ
              และเหมาะสมกับสภาพความเป็นจริงขององค์กรอย่างที่สุด
            </p>
            <br />
            <p>
              จุดแข็ง (Strengths) :{" "}
              <span style={{ color: "#363C54" }}>
                ข้อได้เปรียบของกิจการ
                หมายถึงลักษณะพิเศษหรือลักษณะเด่นขององค์กรที่เอื้อต่อการประสบความสำเร็จ
                สามารถนำมาใช้ประโยชน์และใช้แข่งขันกับคู่แข็งได้ ยกตัวอย่างเช่น
                ความสามารถเฉพาะทางของผู้ประกอบในการดำเนินธุรกิจ
                ความสามารถในการนำนวัตกรรมมาใช้ในการดำเนินกิจการ
                การทำงานร่วมกันเป็นอย่างดีของบุคลากรภายในองค์กร
                การมีความสัมพันธ์ที่ดีหรือมีพาร์ทเนอร์ที่ช่วยสนับสนุนการดำเนินกิจการขององค์กร
                ธุรกิจที่ทำลงทุนน้อยและคืนทุนเร็ว
                <br />
                <br />
                ตัวอย่างเช่น
                <br />– โรงแรมตั้งอยู่ใกล้แหล่งท่องเที่ยวหลายแห่ง
                <br />– เนื่องจากโรงแรมเป็นธุรกิจในครอบครัว
                จึงมีค่าใช้จ่ายในการจ้างงานน้อยกว่าโรงแรมคู่แข่ง
                <br />– เจ้าของโรงแรมมีประสบการณ์ในการบริหารโรงแรมมาก่อน
                <br />– กิจการมี Partner ในอุตสาหกรรมการท่องเที่ยวหลายแห่งเช่น
                ร้านอาหาร บริการทัวร์ท่องเที่ยว
                ทำให้ผู้ใช้บริการที่พักกับโรงแรมได้รับส่วนลด
                และสิทธิประโยชน์ต่างๆ
              </span>{" "}
              <br />
              <br />
              จุดอ่อน (Weaknesses) :{" "}
              <span style={{ color: "#363C54" }}>
                ข้อด้อย ข้อเสีย หรือปัญหาภายในองค์กร
                ที่ส่งผลกระทบต่อการดำเนินกิจการ
                ที่สามารถนำไปสู่ความล้มเหลวของการทำธุรกิจได้ ยกตัวอย่างเช่น
                ปัญหาด้านการสื่อสารของบุคลากรภายในองค์กร
                การใช้โปรแกรมคอมพิวเตอร์ที่ไม่มีลิขสิทธิ์
                ค่าเช่าที่ในการดำเนินกิจการมีราคาสูง อัตราดอกเบี้ยกู้ยืมสูง
                <br />
                <br />
                ตัวอย่างเช่น
                <br />– มีพนักงานให้บริการและอำนวยความสะดวกจำนวนน้อย
                <br />– ห้องพักมีลักษณะเดียวไม่มีความหลากหลาย
                <br />– การจองห้องพักไม่สามารถทำได้ผ่านระบบออนไลน์
              </span>
              <br />
              <br />
              โอกาส (Opportunity) :{" "}
              <span style={{ color: "#363C54" }}>
                เกิดจากปัจจัยภายนอก
                ที่เป็นปัจจัยที่ส่งผลกระทบในแง่ของการเอื้อประโยชน์ให้กับการดำเนินกิจการของบริษัท
                โอกาสต่างจากจุดแข็งตรงที่
                เป็นปัจจัยที่เกิดจากภายนอกองค์กรแต่ส่งผลในทางที่ดีกับองค์กร
                เป็นความได้เปรียบที่เอื้อต่อความสำเร็จของการดำเนินกิจการ
                ยกตัวอย่างเช่น
                รัฐบาลออกนโยบายที่สนับสนุนอุตสาหกรรมที่กิจการกำลังดำเนินธุรกิจอยู่
                เศรษฐกิจที่อยู่ในช่วงขาขึ้น หรือการมีเทคโนโลยี หรือนวัตกรรมใหม่ๆ
                ที่ช่วยให้การดำเนินกิจการเป็นไปได้อย่างเต็มประสิทธิภาพมากขึ้น
                <br /> <br />
                ตัวอย่างเช่น
                <br />
                – นโยบายภาครัฐที่ส่งเสริมการท่องเที่ยวแก่ชาวต่างชาติ เช่น
                การยกเลิกวีซ่าให้กับนักท่องเที่ยวบางประเทศ
                <br /> – นโยบายส่งเสริมการท่องเที่ยวในประเทศให้กับคนไทย เช่น
                การนำค่าใช้จ่ายในการ ท่องเที่ยวเมืองหลักมาหักลดหย่อนภาษีเงินได้
                <br />– มีแหล่งท่องเที่ยวแห่งใหม่เปิดให้บริการในจังหวัด
              </span>
              <br />
              <br />
              อุปสรรค (Threats) :
              <span style={{ color: "#363C54" }}>
                {" "}
                ความเสียเปรียบ หรือผลเสียจากปัจจัยภายนอกที่ส่งผลกระทบต่อกิจการ
                อาจนำมาซึ่งปัญหา และความล้มเหลวของกิจการได้ เช่น
                เศรษฐกิจที่กำลังตกต่ำ
                ราคาน้ำมันที่สูงขึ้นทำให้ต้นทุนในการดำเนินงานเพิ่มขึ้น
                การเพิ่มค่าแรงของแรงงาน หรือ
                นโยบายอัตราดอกเบี้ยที่ถูกปรับให้สูงขึ้น <br />
                <br />
                ตัวอย่างเช่น
                <br />– เศรษฐกิจอยู่ในช่วงขาลง
                ทำให้คนมีเงินใช้จ่ายในการท่องเที่ยวน้อยลง
                <br />– นักท่องเที่ยวเปลี่ยนรูปแบบการเดินทาง
                เป็นการท่องเที่ยวเชิงวัฒนธรรม
                นิยมการเข้าพักในรูปแบบของโฮมสเตย์มากขึ้น
                <br />– ข่าวเรื่องมลภาวะทางอากาศ
                ทำให้นักท่องเที่ยวที่เดินทางไปจังหวัดเชียงใหม่ลดน้อยลง
              </span>
            </p>
            <button
              className="button"
              onClick={() => (window.location = "/pre-swot")}
            >
              <span>เริ่มการวิเคราะห์</span>
            </button>
          </div>
        </div>
        <Footer className="footer" />
      </div>
    );
  }
}
