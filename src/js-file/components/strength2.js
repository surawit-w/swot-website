import React, { Component } from "react";
import contactPic from "../../images/contact.png";
import teamPic from "../../images/team.png";
import "../../stylesheets/components/footer.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import "../../stylesheets/components/checkbox.scss";
import Swal from "sweetalert2";

export default class strength2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalScore: parseFloat(0).toFixed(3),
      alreadyChecked_arr: [],
      s_option_arr: [
        "s-option1",
        "s-option2",
        "s-option3",
        "s-option4",
        "s-option5",
        "s-option6",
        "s-option7",
        "s-option8",
        "s-option9",
        "s-option10",
        "s-option11",
        "s-option12",
        "s-option13",
        "s-option14",
        "s-option15",
        "s-option16",
        "s-option17",
        "s-option18",
        "s-option19",
        "s-option20",
        "s-option21",
        "s-option22",
        "s-option23",
        "s-option24",
        "s-option25",
        "s-option26",
        "s-option27",
        "s-option28",
        "s-option29",
        "s-option30",
        "s-option31",
        "s-option32",
        "s-option33",
        "s-option34",
        "s-option35",
        "s-option36",
      ],
      textOptionArr: [
        "1)	มีบริการหลังการขาย",
        "2)	มีเอกลักษณ์ในการบริการลูกค้า",
        "3)	มีเอกลักษณ์เฉพาะตัวของกิจการ",
        "4)	กิจการมีความมั่นคงเนื่องจากเปิดมาเป็นเวลานานจึงมีลูกค้าประจำและจงรักภักดีต่อกิจการ",
        "5)	มีภาพลักษณ์ของแบรนด์ที่ดี",
        "6)	ราคาการให้บริการถูกกว่าคู่แข่งในตลาดแข่งขันเดียวกัน ",
        "7)	ราคาสามารถเข้าถึงลูกค้าได้ทุกระดับ เช่น นักศึกษา พนักงานเงินเดือน ผู้บริหาร ผู้สูงอายุ",
        "8)	มีการจัดทำโปรโมชั่นส่วนลดสำหรับลูกค้าที่ซื้อตามจำนวนที่กำหนด หรือในเทศกาลต่าง ๆ ",
        "9)	มีบริการที่จอดรถยนต์สำหรับลูกค้า ",
        "10)	ทำเลที่ตั้งเอื้ออำนวยต่อการทำธุรกิจ อยู่ใกล้กับกลุ่มเป้าหมาย",
        "11)	สถานที่มีการตกแต่งที่มีเอกลักษณ์ ",
        "12)	มีการจัดทำห้องสุขาไว้เพื่อบริการลูกค้า ที่มีความสะอาดและสะดวกสบาย ",
        "13)	การจัดโปรโมชั่นดึงดูดลูกค้าใหม่และเก่าให้กลับมาใช้บริการ",
        "14)	มีการใช้สื่อ Social media เพื่อประชาสัมพันธ์และการติดต่อสื่อสารกับลูกค้า ",
        "15)	มีการโฆษณาประชาสัมพันธ์ในทุกช่องทาง ",
        "16)	มีการจัดทำโปรโมชั่นรายเดือนเพื่อดึงดูดลูกค้า",
        "17)	มีมาตรฐานด้านเวลาในการบริการที่ชัดเจน",
        "18)	มีการประเมินความพึงพอใจของผู้รับการบริการ",
        "19)	มีการนำเทคโนโลยีที่มาใช้ให้เกิดประสิทธิภาพในการบริการ",
        "20)	มีเครื่องอำนวยความสะดวกเพื่อบริการลูกค้า ",
        "21)	มีการจัดเตรียมสินค้าไว้เพื่อบริการลูกค้าให้เพียงพอต่อความต้องการ",
        "22)  มีการวิจัยและพัฒนาธุรกิจอย่างสม่ำเสมอ ",
        "23)	ทำเลที่ตั้งเอื้ออำนวยต่อการทำธุรกิจ",
        "24)	ไม่เสียค่าเช่าพื้นที่กิจการ เนื่องจากเป็นเจ้าของสถานประกอบการเอง",
        "25)	สถานที่มีการตกแต่งที่สวยงาน ทันสมัย ดึงดูดความสนใจลูกค้า",
        "26)	สถานที่ไม่มีกลิ่นเหม็นรบกวน ",
        "27)	มีมาตรฐานโดยมีการจัดอบรมพนักงานอยู่เสมอ",
        "28)	เจ้าของกิจการมีความชำนาญในการทำธุรกิจ",
        "29)  มีจำนวนพนักงานเหมาะสมกับขนาดกิจการและเพียงพอต่อความต้องการของลูกค้า",
        "30)	อัตราการลาออกของบุคลากรต่ำ",
        "31)	บุคลากรมีความชำนาญเกี่ยวกับสินค้าและบริการของกิจการ",
        "32)  พนักงานได้รับการฝึกให้มีความเชี่ยวชาญในการดำเนินงานอย่างมีประสิทธิภาพ",
        "33)  กิจการมีความมั่นคงทางการเงิน ",
        "34)	มีการจัดหาเงินทุนจากแหล่งเงินทุนที่มีดอกเบี้ยต่ำ ",
        "35)	กิจการมีเงินทุนหมุนเวียนเพียงพอ",
        "36)	กิจการมีต้นทุนต่ำหรือมีกำไรต่อหน่วยสูง ",
      ],
      option_arr: [],
      score_arr: [
        0.03, //1
        0.03, //2
        0.03, //3
        0.02, //4
        0.028, //5
        0.025, //6
        0.025, //7
        0.025, //8
        0.1, //9
        0.1, //10
        0.025, //11
        0.025, //12
        0.025, //13
        0.028, //14
        0.025, //15
        0.02, //16
        0.025, //17
        0.02, //18
        0.028, //19
        0.025, //20
        0.025, //21
        0.025, //22
        0.025, //23
        0.02, //24
        0.025, //25
        0.025, //26
        0.025, //27
        0.025, //28
        0.02, //29
        0.02, //30
        0.028, //31
        0.025, //32
        0.028, //33
        0.02, //34
        0.02, //35
        0.025, //36
      ],
      totalScore: (0.0).toFixed(3),
      left_option_arr: [],
      alreadyCheckText_arr: [],
      optionInfoArr: [],
      type: "strength",
      color: "#f6f6f6",
    };
  }

  handleClick = async (button) => {
    this.state.left_score_arr = [];
    let checkedArr = this.state.alreadyChecked_arr;
    let totalScore = 0.0;
    this.state.optionInfoArr = [];

    // If checkbox is checked.
    if (button.target.checked) {
      checkedArr.push(`${button.target.id}`); // push already checked button to Array.

      for (var i = 0; i < checkedArr.length; i++) {
        for (var j = 0; j < this.state.s_option_arr.length; j++) {
          let tempCheck = checkedArr[i];
          if (tempCheck === `s-option${j + 1}`) {
            await this.state.optionInfoArr.push({
              optionText: this.state.textOptionArr[j],
              optionScore: this.state.score_arr[j],
            });
            totalScore = totalScore + this.state.score_arr[j];
            tempCheck = "";
          }
        }
      }
      console.log(this.state.optionInfoArr);
      await this.setState({ totalScore: parseFloat(totalScore).toFixed(3) });
      console.log(this.state.totalScore);

      // If checkbox is unchecked.
    } else if (!button.target.checked) {
      this.state.optionInfoArr = [];
      let tempUnCheckedArr = [`${button.target.id}`];
      await this.setState({
        alreadyChecked_arr: checkedArr.filter(
          (n) => !tempUnCheckedArr.includes(n)
        ),
      });
      // await console.log(this.state.alreadyChecked_arr)
      for (var i = 0; i < this.state.alreadyChecked_arr.length; i++) {
        for (var j = 0; j < this.state.s_option_arr.length; j++) {
          let tempCheck = this.state.alreadyChecked_arr[i];
          // console.log(tempUnCheckedArr[0], `s-option${j+1}`)
          // console.log(this.state.totalScore, this.state.score_arr[j])
          if (tempUnCheckedArr[0] === `s-option${j + 1}`) {
            totalScore = this.state.totalScore - this.state.score_arr[j];
          }
          if (tempCheck === `s-option${j + 1}`) {
            await this.state.optionInfoArr.push({
              optionText: this.state.textOptionArr[j],
              optionScore: this.state.score_arr[j],
            });
            tempCheck = "";
          }
        }
      }
      console.log(this.state.optionInfoArr);
      await this.setState({ totalScore: parseFloat(totalScore).toFixed(3) });
      console.log(this.state.totalScore);
    }
  };

  componentDidMount = async () => {
    console.log(this.props.swotolc);
    localStorage.setItem("swotolcBoolean", false);
    if (this.props.swotolc) {
      localStorage.setItem("swotolcBoolean", true);
    }
  };
  handleSubmit = () => {
    let { totalScore, alreadyChecked_arr, optionInfoArr } = this.state;
    for (var i = 0; i < optionInfoArr.length; i++) {
      optionInfoArr[i].optionScore = parseFloat(
        optionInfoArr[i].optionScore / totalScore
      ).toFixed(3);
    }
    localStorage.setItem("strength_result2", JSON.stringify(optionInfoArr));
    let details = JSON.parse(localStorage.getItem("strength_result2"));
    console.log(details); // ได้ค่ามาละ 5555
    this.props.callbackFromParent(details);
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div
        className="wrapper-swot-form strength"
        style={{ padding: "60px", borderRadius: "20px" }}
      >
        <h2 style={{ fontFamily: "regular" }}>Strength (จุดแข็ง)</h2>
        <div className="form-wrapper" style={{ padding: "16px 20px" }}>
          <Form style={{ fontFamily: "exlight" }}>
            <fieldset>
              <Form.Group as={Row} style={{ fontSize: "1.5em" }}>
                <Form.Label
                  as="legend"
                  style={{ fontSize: "18px", fontFamily: "regularItalic" }}
                >
                  จุดแข็งของทางร้านมีอะไรบ้าง (สามารถเลือกได้มากกว่า 1 ข้อ)
                </Form.Label>
                <Col>
                  <div
                    className="option-checkbox"
                    style={{ color: this.state.color }}
                  >
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option1"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(1) มีบริการหลังการขาย</p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option2"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(2) มีเอกลักษณ์ในการบริการลูกค้า</p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option3"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(3) มีเอกลักษณ์เฉพาะตัวของกิจการ</p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option4"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>
                      (4)
                      กิจการมีความมั่นคงเนื่องจากเปิดมาเป็นเวลานานจึงมีลูกค้าประจำและจงรักภักดีต่อกิจการ
                    </p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option5"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(5) มีภาพลักษณ์ของแบรนด์ที่ดี</p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option6"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>
                      (6) ราคาการให้บริการถูกกว่าคู่แข่งในตลาดแข่งขันเดียวกัน
                    </p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option7"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>
                      (7) ราคาสามารถเข้าถึงลูกค้าได้ทุกระดับ เช่น นักศึกษา
                      พนักงานเงินเดือน ผู้บริหาร ผู้สูงอายุ
                    </p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option8"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>
                      (8)
                      มีการจัดทำโปรโมชั่นส่วนลดสำหรับลูกค้าที่ซื้อตามจำนวนที่กำหนด
                      หรือในเทศกาลต่าง ๆ
                    </p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option9"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(9) มีบริการที่จอดรถยนต์สำหรับลูกค้า</p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option10"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>
                      (10) ทำเลที่ตั้งเอื้ออำนวยต่อการทำธุรกิจ
                      อยู่ใกล้กับกลุ่มเป้าหมาย
                    </p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option11"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(11) สถานที่มีการตกแต่งที่มีเอกลักษณ์</p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option12"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>
                      (12) มีการจัดทำห้องสุขาไว้เพื่อบริการลูกค้า
                      ที่มีความสะอาดและสะดวกสบาย
                    </p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option13"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>
                      (13)
                      การจัดโปรโมชั่นดึงดูดลูกค้าใหม่และเก่าให้กลับมาใช้บริการ
                    </p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option14"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>
                      (14) มีการใช้สื่อ Social media
                      เพื่อประชาสัมพันธ์และการติดต่อสื่อสารกับลูกค้า
                    </p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option15"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(15) มีการโฆษณาประชาสัมพันธ์ในทุกช่องทาง</p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option16"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(16) มีการจัดทำโปรโมชั่นรายเดือนเพื่อดึงดูดลูกค้า</p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option17"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(17) มีมาตรฐานด้านเวลาในการบริการที่ชัดเจน</p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option18"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(18) มีการประเมินความพึงพอใจของผู้รับการบริการ</p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option19"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>
                      (19) มีการนำเทคโนโลยีที่มาใช้ให้เกิดประสิทธิภาพในการบริการ
                    </p>
                  </div>
                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option20"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(20) มีเครื่องอำนวยความสะดวกเพื่อบริการลูกค้า</p>
                  </div>
                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option21"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>
                      (21)
                      มีการจัดเตรียมสินค้าไว้เพื่อบริการลูกค้าให้เพียงพอต่อความต้องการ
                    </p>
                  </div>
                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option22"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(22) มีการวิจัยและพัฒนาธุรกิจอย่างสม่ำเสมอ</p>
                  </div>
                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option23"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(23) ทำเลที่ตั้งเอื้ออำนวยต่อการทำธุรกิจ</p>
                  </div>
                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option24"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>
                      (24) ไม่เสียค่าเช่าพื้นที่กิจการ
                      เนื่องจากเป็นเจ้าของสถานประกอบการเอง
                    </p>
                  </div>
                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option25"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>
                      (25) สถานที่มีการตกแต่งที่สวยงาน ทันสมัย
                      ดึงดูดความสนใจลูกค้า
                    </p>
                  </div>
                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option26"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(26) สถานที่ไม่มีกลิ่นเหม็นรบกวน </p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option27"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(27) มีมาตรฐานโดยมีการจัดอบรมพนักงานอยู่เสมอ </p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option28"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(28) เจ้าของกิจการมีความชำนาญในการทำธุรกิจ </p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option29"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>
                      (29)
                      มีจำนวนพนักงานเหมาะสมกับขนาดกิจการและเพียงพอต่อความต้องการของลูกค้า
                    </p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option30"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(30) อัตราการลาออกของบุคลากรต่ำ</p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option31"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>
                      (31) บุคลากรมีความชำนาญเกี่ยวกับสินค้าและบริการของกิจการ
                    </p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option32"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>
                      (32)
                      พนักงานได้รับการฝึกให้มีความเชี่ยวชาญในการดำเนินงานอย่างมีประสิทธิภาพ{" "}
                    </p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option33"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(33) กิจการมีความมั่นคงทางการเงิน </p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option34"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>
                      (34) มีการจัดหาเงินทุนจากแหล่งเงินทุนที่มีดอกเบี้ยต่ำ{" "}
                    </p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option35"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(35) กิจการมีเงินทุนหมุนเวียนเพียงพอ </p>
                  </div>
                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option36"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(36) กิจการมีต้นทุนต่ำหรือมีกำไรต่อหน่วยสูง </p>
                  </div>
                </Col>
              </Form.Group>
            </fieldset>
          </Form>
        </div>
        <div id="buttonNextCenter">
          <button id="buttonNext" onClick={this.handleSubmit}>
            ถัดไป
          </button>
        </div>
      </div>
    );
  }
}
