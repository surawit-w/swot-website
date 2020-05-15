import React, { Component } from "react";
import Navbar from "../components/navbar";
import Strength from "../components/strength";
import "../../stylesheets/pages/swotPage.css";
import Footer from "../components/footer";

export default class olcResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btnActive: 3,
      data: {
        datasets: [
          {
            backgroundColor: "rgb(241, 111, 32,0.6)",
            borderColor: "rgb(241, 111, 32,1)",
            pointStyle: "circle",
            rotation: 45,
            borderWidth: 10,
            hoverRadius: 10,
            data: [],
          },
        ],
      },
      modeOlc: "",
    };
  }

  // Before render
  componentDidMount = async () => {
    let details = JSON.parse(localStorage.getItem("finalScoreOLC"));
    console.log("detailllllslslslslssl:", details);
    let phraseResult = details[0].phrase;

    switch (true) {
      case phraseResult === "OLC1":
        await this.setState({
          modeOlc:
            "1. ระยะก่อตั้งหรือขั้นแนะนำ (Introduction/Birth) : จากการทำแบบทดสอบนั้น ผลปรากฏว่าธุรกิจของท่านอยู่ในระยะก่อตั้งหรือขั้นแนะนำ เป็นช่วงที่องค์กรหรือธุรกิจของท่านเริ่มก่อตั้งขึ้น โดยองค์กรอาจจะยังไม่ใหญ่โตมาก การทำงานในองค์กรนั้นต้องสามารถผลัดเปลี่ยนหรือหมุนเวียนงานกันทำได้ ผู้บริหารหรือเจ้าของกิจการอาจจะต้องลงมาทำงานด้วยเช่นกัน ระยะนี้ถือว่าอยู่ในช่วงที่อ่อนแอ ถ้าหากคู่แข่งล่วงรู้ว่าธุรกิจหรือองค์กรของเราพึ่งจัดตั้งขึ้น และเราไม่มีกลยุทธ์ป้องกันอาจทำให้คู่แข่งสามารถโจมตีเราได้ง่าย ในระยะนี้จะต้องประคับประคองธุรกิจให้องค์กรสามารถอยู่รอด เพื่อให้สามารถก้าวไปในขั้นต่อไปหรือระยะต่อไปได้	",
        });
        break;

      case phraseResult === "OLC2":
        await this.setState({
          modeOlc:
            "2. ระยะเติบโต (Growth) : จากการทำแบบทดสอบนั้น ผลปรากฏว่าธุรกิจของท่านอยู่ในระยะเติบโต (Growth) ซึ่งเป็นช่วงที่ธุรกิจของท่านเริ่มมีความเข้มแข็งขึ้นและเริ่มเลี้ยงตนเองได้ มีการขยายกำลังคนและมีกำลังที่จะก้าวไปข้างหน้าด้วยการขยายฐานลูกค้า มีผลิตภัณฑ์หรือบริการใหม่ๆออกสู่ตลาด ระยะนี้จะเห็นผลกำไรมากกว่าระยะแรก รูปแบบขององค์การมีลักษณะเป็นทางการมากขึ้น ไม่ว่าจะเป็นในเรื่องของการติดต่อสื่อสาร มีลำดับขั้นของสายบังคับบัญชา นโยบาย แผนการทำงานและวิสัยทัศน์ที่ชัดเจน ดังนั้นกิจการควรใช้โอกาสนี้ในการขยายฐานลูกค้า โดยทำการตลาดให้ธุรกิจหรือแบรนด์เป็นที่รู้จักมากขึ้น หรือหากต้องการขยายขนาดธุรกิจสามารถทำได้ในช่วงนี้",
        });
        break;

      case phraseResult === "OLC3":
        await this.setState({
          modeOlc:
            "3. ระยะวุฒิภาวะ / ระยะเติบโตเต็มที่ (Maturity) : ระยะนี้ถ้าเทียบกับอายุคนจะถือว่าอยู่ในวัยผู้ใหญ่ เพราะเป็นช่วงที่องค์การเติบโตเต็มที่หรือมีอัตราการเจริญเติบโตช้าลง แต่สามารถแบ่งส่วนครองตลาดได้มากกว่าระยะอื่นๆ ซึ่งจะมีค่าใช้จ่ายในการดูแลรักษาลูกค้าหรือค่าใช้จ่ายในการรักษาฐานลูกค้าสูง ต้นทุนก็จะเพิ่มขึ้นในขณะที่ยอดขายเท่าเดิม อาจทำให้กำไรของธุรกิจลดลง  ถ้าหากไม่มีการพัฒนาอาจจะทำให้องค์กรมีโอกาสตายได้ ดังนั้นองค์กรต้องมองหาทางเลือกหรือโอกาสใหม่ๆ มีการพัฒนาอยู่ตลอดเวลา โดยการนำกลยุทธ์มาใช้เพื่อให้ลูกค้าจงรักภักดีต่อแบรนด์ เช่น ช้างมีการแจกผ้าห่มหรือเป็นสปอนเซอร์ให้กับนักฟุตบอล เพื่อรักษาภาพลักษณ์ที่ดีและกลุ่มลูกค้า เป็นต้น	",
        });
        break;

      case phraseResult === "OLC4":
        await this.setState({
          modeOlc:
            "4. ระยะเสื่อมถอย / ระยะตกต่ำ (Decline) : จากการทำแบบทดสอบนั้น ผลปรากฏว่าธุรกิจของท่านอยู่ในระยะเสื่อมถอยหรือระยะตกต่ำ เป็นช่วงที่องค์กรหรือธุรกิจของท่านกำลังประสบปัญหาต่างๆ เช่น พนักงานมีการลาออกเพิ่มขึ้น สินค้าและบริการมียอดขายลดลง พนักงานปฏิบัติตามคำสั่งเพียงอย่างเดียวโดยไม่มีความคิดเห็นหรือไม่มีความคิดสร้างสรรค์เป็นของตนเอง สาเหตุเกิดมาจากความเบื่อหน่ายในการปฏิบัติงาน วิธีการแก้ไขปัญหาก็คือ ต้องใช้กลยุทธ์หรือแรงจูงใจในการทำงาน เช่น จัดกิจกรรมพิเศษ เพิ่มโบนัส เพิ่มเงินเดือน เป็นต้น ",
        });
        break;

      case phraseResult === "OLC5":
        await this.setState({
          modeOlc:
            "5. ระยะการยุบเลิกองค์การหรือกิจการ (Death) : จากการทำแบบทดสอบนั้น ผลปรากฏว่าธุรกิจของท่านอยู่ในระยะที่กำลังจะยุบองค์การหรือกิจการ เป็นช่วงที่องค์กรหรือธุรกิจของท่านเริ่มต้องคิดถึงการยุบกิจการ โดยกิจการจะผ่านมาหมดแล้วในทุกช่วง ไม่ว่าจะเป็นช่วงที่กำไรมากที่สุด เป็นช่วงขาขึ้นของธุรกิจ หรือจะเป็นช่วงที่กำไรน้อยที่สุดจนซึ่งอาจจะเป็นช่วงที่ประสบปัญหามากที่สุด และอาจจะส่งผลต่อเนื่องไปจนถึงการยุบหรือเลิกกิจการได้ การที่กิจการหรือธุรกิจของท่านมาถึงจุดนี้อาจจะเป็นเพราะมีทีมบริหารที่ไม่มีประสบการณ์ในการบริหาร หรืออาจจะมีพนักงานบางคนที่เผยแพร่ข้อมูลของกิจการให้แก่บริษัทอื่นได้ ซึ่งส่งผลถึงแผนงานการบริการหรือผลิตภัณฑ์ที่จะทำนั้นทำให้คู่แข่งทางการค้าได้หาทางรับมือได้ ทำให้จากสิ่งที่วางแผนที่จะสามารถทำกำไรจากแผนที่วางไว้ล้มเหลว ทำการใช้กลยุทธ์ทุกอย่างแล้วก็ไม่มีคนซื้อ ไม่มีคนสนใจ จะเป็นการแจกก็ไม่ได้รับความสนใจทำให้กิจการหรือองค์กรจะต้องสิ้นสุดสถาณภาพขององค์กร ไม่สามารถดำรงสถานะความเป็นองค์การได้อีกต่อไปถึงขั้นยุบหรือเลิกกิจการไปรวมกับองค์การหรือกิจการอื่นด้วยวิธีต่างๆ แต่แท้จริงแล้วนั้นสามารถที่จะพัฒนาได้แต่ต้องใช้มีทุนค่าใช้จ่ายในการพัฒนาสูงมากเหมือนเริ่มต้นกิจการใหม่ ",
        });
        break;
    }
  };

  render() {
    let { btnActive } = this.state;
    return (
      <div>
        <Navbar swot={btnActive} />
        <div style={{ width: "100%", textAlign: "center", marginTop: "5%" }}>
          <h1 style={{ fontFamily: "bold", color: "#363c54", fontSize: "2em" }}>
            ผลลัพธ์การประเมินOLC
          </h1>
        </div>

        <div
          className="info3"
          style={{ padding: "2%", marginLeft: "2%", marginRight: "2%" }}
        >
          <div className="swotolc-info" tyle={{ margin: "0%" }}>
            <p>
              <p
                style={{
                  fontFamily: "light",
                  color: "#f16f20",

                  textAlign: "left",
                  margin: "0",
                  padding: "0",
                }}
              >
                {this.state.modeOlc}
              </p>
            </p>
            {/*<img src={olcPic} alt="olc-pic" className="olc-pic" />*/}
          </div>
        </div>

        <div className="home-button" style={{ padding: "5%" }}>
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
        <Footer />
      </div>
    );
  }
}
