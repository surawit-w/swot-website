import React, { Component } from "react";
import contactPic from "../../images/contact.png";
import teamPic from "../../images/team.png";
import "../../stylesheets/components/footer.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import "../../stylesheets/components/checkbox.scss";
import Swal from "sweetalert2";

export default class weakness extends Component {
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
      ],
      textOptionArr: [
        "1)	มีการรับวัตถุดิบที่มาจากทุกแหล่งทำให้ยากต่อการคัดกรองและควบคุมคุณภาพ ",
        "2)	ไม่ตรวจคุณภาพเพราะใช้ความไว้เนื้อเชื่อจากแหล่งผลิต",
        "3)	ไม่มีรูปแบบในการจัดวางคลังสินค้า",
        "4)	ค่าใช้จ่ายในการซ่อมบำรุงสูง ",
        "5)	ใช้กำลังการผลิตไม่เต็มที่ ",
        "6)	เทคโนโลยีมีความล้าสมัย",
        "7)	สถานที่ผลิตอยู่ในย่านชุมชนทำให้เกิดข้อจำกัดในการขยายกำลังผลิต",
        "8)	สถานที่ในการจัดเก็บสินค้าไม่มีมาตรฐาน ทั้งด้านอุณหภูมิหรือระบบการนำเข้า-ออก",
        "9)	การจัดเก็บสินค้าไม่เป็นหมวดหมู่  ทำให้ค้นหายาก",
        "10)	กิจการยังไม่เป็นที่รู้จัก",
        "11)	ขาดการทำการประชาสัมพันธ์ที่ดี",
        "12)	การจัดทำโปรโมชั่นไม่น่าสนใจ ",
        "13)	มีช่องทางการจัดจำหน่ายไม่มากพอ ",
        "14)	ตราสินค้าของกิจการยังไม่เป็นที่รู้จักของผู้บริโภคมากนัก ",
        "15)	ไม่มีบริการติดตั้งสินค้าให้กับลูกค้า ",
        "16)	ไม่มีการบริการซ่อมหรือรับแลกเปลี่ยนสินค้า ",
        "17)	ไม่มีบริการขนส่งสินค้า ",
        "18)	ทุนในการดำเนินกิจการมีอย่างจำกัด",
        "19)	ไม่มีการบันทึกบัญชีที่เป็นมาตรฐาน",
        "20)	ระบบบริหารจัดการไม่มีประสิทธิภาพ",
        "21)	กิจการขาดระบบบัญชีการเงินที่เป็นมาตรฐาน",
        "22)	ต้นทุนการผลิตด้านวัตถุดิบสูง",
        "23)	ราคาสินค้าต่ำเกินไป",
        "24)	ค่าจ้างแรงงานสูง",
        "25)	บุคลากรขาดความรู้เกี่ยวกับเทคโนโลยี",
        "26)	ผู้บริหารมีความรู้และความเชี่ยวชาญอย่างจำกัด",
        "27)	ขาดแคลนแรงงาน",
        "28)	ใช้ระยะเวลานานในการพัฒนาทักษะฝีมือของแรงงาน",
        "29)	พนักงานส่วนใหญ่เป็นหนักงานระดับแรงงาน ทำให้ต้องใช้เวลานานในการพัฒนาฝีมือ",
        "30)	ใช้เงินลงทุนสูงในการพัฒนาผลิต",
        "31)	ไม่มีทุนในการวิจัยและพัฒนาผลิตภัณฑ์",
        "32)	กิจการอยู่ห่างไกลกับแหล่งวัตถุดิบ",
        "33)	อำนาจต่อรองของซับพลายเออร์สูง",
      ],
      option_arr: [],
      score_arr: [
        0.025,
        0.1,
        0.1,
        0.008,
        0.002,
        0.005,
        0.008,
        0.002,
        0.025,
        0.002,
        0.008,
        0.1,
        0.025,
        0.008,
        0.008,
        0.1,
        0.002,
        0.005,
        0.1,
        0.009,
        0.1,
        0.1,
        0.008,
        0.005,
        0.008,
        0.1,
        0.1,
        0.002,
        0.008,
        0.002,
        0.008,
        0.008,
        0.002,
        0.009,
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

  handleSubmit = () => {
    let { totalScore, alreadyChecked_arr, optionInfoArr } = this.state;
    for (var i = 0; i < optionInfoArr.length; i++) {
      optionInfoArr[i].optionScore = parseFloat(
        optionInfoArr[i].optionScore / totalScore
      ).toFixed(3);
    }
    localStorage.setItem("strength_result", JSON.stringify(optionInfoArr));
    let details = JSON.parse(localStorage.getItem("strength_result"));
    console.log(details); // ได้ค่ามาละ 5555
    this.props.callbackFromParent(details);
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div
        className="wrapper-swot-form weakness"
        style={{
          padding: "60px",
          borderRadius: "20px",
          color: this.state.color,
        }}
      >
        <h2 style={{ fontFamily: "regular" }}>Weakness (จุดอ่อน)</h2>
        <div className="form-wrapper" style={{ padding: "16px 20px" }}>
          <Form style={{ fontFamily: "exlight" }}>
            <fieldset>
              <Form.Group as={Row} style={{ fontSize: "1.5em" }}>
                <Form.Label
                  as="legend"
                  style={{ fontSize: "18px", fontFamily: "regularItalic" }}
                >
                  จุดอ่อนของทางร้านมีอะไรบ้าง (สามารถเลือกได้มากกว่า 1 ข้อ)
                </Form.Label>
                <Col>
                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option1"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>
                      (1)
                      มีการรับวัตถุดิบที่มาจากทุกแหล่งทำให้ยากต่อการคัดหรองและควบคุมคุณภาพ
                    </p>
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
                    <p>
                      (2) ไม่ตรวจคุณภาพเพราะใช้ความไว้เนื้อเชื่อใจจากแหล่งผลิต
                    </p>
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
                    <p>(3) ไม่มีรูปแบบในการจัดวางคลังสินค้า</p>
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
                    <p>(4) ค่าใช้จ่ายในการซ่อมบำรุงสูง</p>
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
                    <p>(5) ใช้กำลังการผลิตไม่เต็มที่</p>
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
                    <p>(6) เทคโนโลยีมีความล้าสมัย</p>
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
                      (7)
                      สถานที่ผลิตอยู่ในย่านชุมชนทำให้เกิดข้อจำกัดในการขยายกำลังผลิต
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
                      (8) สถานที่ในการจัดเก็บสินค้าไม่มีมาตรฐาน
                      ทั้งด้านอุณหภูมิกรือรบบการนำเข้า-ออก
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
                    <p>(9) การจัดเก็บสินค้าไม่เป็นหมวดหมู่ ทำให้ค้นหายาก</p>
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
                    <p>(10) กิจการยังไม่เป็นที่รู้จัก</p>
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
                    <p>(11) ขาดการทำการประชาสัมพันธ์ที่ดี</p>
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
                    <p>(12) การจัดทำโปรโมชั่นไม่น่าสนใจ</p>
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
                    <p>(13) มีช่องทางการจัดจำหน่ายไม่มากพอ</p>
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
                      (14)
                      ตราสินค้าของกิจการยังไม่เป็นที่รู้จักของผู้บริโภคมากนัก
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
                    <p>(15) ไม่มีบริการติดตั้งสินค้าให้กับลูกค้า</p>
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
                    <p>(16) ไม่มีการบริการซ่อมหรือรับแลกเปลี่ยนสินค้า</p>
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
                    <p>(17) ไม่มีบริการขนส่งสินค้า</p>
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
                    <p>(18) ทุนในการดำเนินกิจการมีอย่างจำกัด</p>
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
                    <p>(19) ไม่มีการบันทึกบัญชีที่เป็นมาตรฐาน</p>
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
                    <p>(20) ระบบบริหารจัดการไม่มีประสิทธิภาพ</p>
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
                    <p>(21) กิจการขาดระบบบัญชีการเงินที่เป็นมาตรฐาน</p>
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
                    <p>(22) ต้นทุนการผลิตด้่านวัตถุดิบสูง</p>
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
                    <p>(23) ราคาสินค้าต่ำเกินไป</p>
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
                    <p>(24) ค่าจ้างแรงงานสูง</p>
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
                    <p>(25) บุคลาการขาดความรู้เกี่ยวกับเทคโนโลยี</p>
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
                    <p>(26) ผู้บริหารมีความรู้และความเชี่ยวชาญอย่างจำกัด</p>
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
                    <p>(27) ขาดแคลนแรงงาน</p>
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
                    <p>(28) ใช้ระยะเวลานานในการพัฒนาทักษะฝีมือของแรงงาน</p>
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
                      (29) พนักงานส่วนใหญ่เป็นพนักงานระดับแรงงาน
                      ทำให้ต้องใช้เวลาในการพัฒนาฝีมือ
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
                    <p>(30) ใช้เงินลงทุนสูงในการพัฒนาผลิต</p>
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
                    <p>(31) ไม่มีทุนในการวิจัยและพัฒนาผลิตภัณฑ์</p>
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
                    <p>(32) กิจการอยู่ห่างไกลกับแหล่งวัตถุดิบ</p>
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
                    <p>(33) อำนาจต่อรองของซับพลายเออร์สูง</p>
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
