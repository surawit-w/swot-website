import React, { Component } from "react";
import Navbar from "../components/navbar";
import HomeInfo from "../components/homeInfo";
import Footer from "../components/footer";
import "../../stylesheets/pages/swotInfoPage.css";

export default class preswotPage extends Component {
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
              this.props.history.push('/'); window.scrollTo(0, 0)
            }}
          >
            HOME > SWOT >{" "}
            <span style={{ color: "#f16f20" }}>เลือกประเภทธุรกิจ</span>
          </p>
        </div>
        <div className="whole">
          <div className="swot-infobox">
            <h1>เลือกประเภทของธุรกิจ</h1>

            <button
              className="button"
              onClick={() => { this.props.history.push('/swot-analysis'); window.scrollTo(0, 0) }}
            >
              <span>ธุรกิจผลิต</span>
            </button>

            <button
              className="button"
              onClick={() => { this.props.history.push('/swot-analysis2'); window.scrollTo(0, 0) }}
            >
              <span>ธุรกิจบริการ</span>
            </button>

            <button
              className="button"
              onClick={() => { this.props.history.push('/swot-analysis3'); window.scrollTo(0, 0) }}
            >
              <span>ธุรกิจการค้า</span>
            </button>
            <p style={{ marginTop: "10%" }}>
              ธุรกิจผลิตหรือธุรกิจอุตสาหกรรม :{" "}
              <span style={{ color: "#363C54" }}>
                เป็นธุรกิจที่ต้องซื้อวัตถุดิบแล้วนำเข้าสู่การผลิต
                โดยใช้แรงงานและค่าใช้จ่ายในการผลิต ผลที่ออกมาคือสินค้าสำเร็จรูป
                รายได้ของธุรกิจนี้คือรายได้จากการขาย
                การจัดทำรายงานทางการเงินค่อนข้างที่จะยุ่งยาก
                เนื่องจากต้องคำนวณต้นทุนการผลิตค่อนข้างซับซ้อน เช่น
                ร้านชานมไข่มุกที่มีการผลิตไข่มุกจำหน่ายเอง ร้านเบเกอรี่
                ร้านขายขนมไทย ร้านขายลูกชิ้นที่ผลิตลูกชิ้นด้วยโรงงานของตนเอง
                การทำนาทำไร่ เป็นต้น
              </span>{" "}
              <br />
              <br />
              ธุรกิจบริการ :{" "}
              <span style={{ color: "#363C54" }}>
                เป็นธุรกิจที่ให้บริการในรูปแบบของแรงงาน
                รายได้มาจากค่าบริการที่คิดจากลูกค้า ซึ่งอยู่ในลักษณะค่าธรรมเนียม
                ค่านายหน้า ค่าบริการ และค่าเช่า เป็นต้น
                สำหรับต้นทุนส่วนใหญ่จะอยู่ในรูปแบบของแรงงาน เช่น ร้านตัดผม
                ร้านนวดแผนไทย ร้านเกมส์ ร้านทำเล็บ หอพักให้เช่า
                ร้านพิมพ์งาน-ถ่ายเอกสาร รับเหมาก่อสร้าง ร้านซักผ้า ร้านซ่อมรถ
                เป็นต้น
              </span>
              <br />
              <br />
              ธุรกิจการค้าหรือธุรกิจพาณิชยกรรม :{" "}
              <span style={{ color: "#363C54" }}>
                เป็นประเภทธุรกิจที่เห็นกันทั่วๆ ไป
                เป็นการที่กิจการซื้อสินค้าสำเร็จรูปมาแล้วขายสินค้าเหล่านั้นออกไปสู่ผู้บริโภค
                ต้นทุนเกือบทั้งหมดเกิดจากต้นทุนในการซื้อสินค้า
                ทำให้การจัดการรายจ่ายและต้นทุนค่อนข้างง่ายและไม่ซับซ้อน
                เพราะไม่มีต้นทุนทางการผลิต
                รายได้ธุรกิจส่วนใหญ่มาจากรายได้จากการขาย
                ธุรกิจพาณิชยกรรมสามารถแบ่งออกได้อีก 2 ประเภท คือ <br />
                &nbsp;&nbsp;1.1 ธุรกิจค้าส่ง หมายถึง
                การขายสินค้าให้กับกิจการค้าปลีก หรือกิจการค้าส่งด้วยกัน เช่น
                ประตูน้ำ แมคโคร หรือร้านที่มีสินค้าในร้านที่ขายในราคาส่ง
                ร้านขายส่งเครื่องดื่ม-สุรา เป็นต้น <br />
                &nbsp;&nbsp;1.2 ธุรกิจค้าปลีก หมายถึง
                ธุรกิจที่ขายสินค้าให้โดยตรงกับผู้บริโภค
                เพื่อการบริโภคหรือการใช้ประโยชน์เฉพาะส่วนบุคคลในครัวเรือน
                โดยสินค้าที่ขายให้ส่วนใหญ่เป็นสินค้าสำเร็จรูปที่ไม่ได้ถูกนำไปผ่านกระบวนการการผลิตหรือเปลี่ยนแปลง
                เช่น ร้านขายของชำทั่วไป ร้านขายอาหารสัตว์ ร้านอุปกรณ์การเรียน
                ร้านขายเสื้อผ้า ร้านเสริมสวยที่มีการจำหน่ายผลิตภัณฑ์บำรุงผม
                เป็นต้น
              </span>
            </p>
          </div>
        </div>
        <Footer className="footer" />
      </div>
    );
  }
}
