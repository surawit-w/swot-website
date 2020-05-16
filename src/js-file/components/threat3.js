import React, { Component } from "react";
import "../../stylesheets/components/footer.css";
import { Form, Row, Col } from "react-bootstrap";
import "../../stylesheets/components/checkbox.scss";
import Swal from "sweetalert2";

export default class threat3 extends Component {
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
      ],
      textOptionArr: [
        "1)	ไม่ได้รับการสนับสนุนจากภาครัฐ",
        "2)	มีคู่แข่งขันหลายรายในตลาดประเภทเดียวกัน",
        "3)	ภัยคุกคามจากคู่แข่งขันรายใหม่เข้ามาในตลาดสูง เนื่องจากการเข้าสู่ตลาดของร้านค้ามีข้อจำกัดไม่มาก คือ ผู้ใดก็สามารถเปิดได้ เพียงมีเงินทุนในการสร้างร้าน",
        "4)	คู่แข่งขันมีประสิทธิภาพอย่างมาก",
        "5)	สินค้าที่บริการมีสินค้าทดแทน นั่นคือ มีสินค้ารูปแบบอื่นที่สามารถใช้แทนกัน",
        "6)	ราคาต้นทุนของสินค้าสูงขึ้น",
        "7)	สภาพเศรษฐกิจในปัจจุบันทำให้การดำเนินธุรกิจเป็นไปอย่างยากลำบาก เนื่องจากเศรษฐกิจส่งผลต่อการจับจ่ายใช้สอยของผู้บริโภค",
        "8)	พฤติกรรมผู้บริโภคเปลี่ยนไป และมีทัศนคติที่เปลี่ยนไป",
        "9)	พฤติกรรมผู้บริโภคเปลี่ยนแปลง จากการซื้อสินค้าตามหน้าร้านมาเป็นสั่งซื้อผ่านระบบออนไลน์และสื่อ Media ต่างๆ",
        "10) กระแสนิยมของสินค้าบางชนิดมักมาไวไปไว ทำให้บางครั้งสินค้าที่สต็อคไว้ระบายออกไม่ทัน",
        "11) เทคโนโลยีมีข้อจำกัดในการใช้งาน",
        "12) การบูรณาการไปข้างหน้า (Forward Integration) ขายตรงจากโรงงาน และผู้จําหน่ายวัตถุดิบ (Suppliers) ส่งผลให้ผู้ประกอบการค้าปลีกและค้าส่งซึ่งเป็นคนกลางมีบทบาทน้อยลง",
        "13) เกิดภัยพิบัติทางธรรมชาติบ่อยครั้ง และส่งผลกระทบต่อธุรกิจโดยตรง เช่น ทำให้สินค้าเสียหายและรายได้และยอดขายที่ลดลง",
        "14) การระบาดของโรค เกิดการชะงักตัวของเศรษฐกิจ",
        "15) มีกฎหมายหรือระเบียบข้อบังคับใหม่ที่ส่งผลให้มียอดขายลดลง หรือเป็นอุปสรรคต่อการขายสินค้าบางชนิด",
        "16) ภาษีนำเข้า-ส่งออก มีอัตราเพิ่มขึ้นส่งผลต่อกำไรหรือต้นทุน",
      ],
      option_arr: [],
      score_arr: [
        0.065, // 1
        0.063, // 2
        0.06, // 3
        0.065, // 4
        0.06, // 5
        0.063, // 6
        0.064, // 7
        0.065, // 8
        0.06, // 9
        0.063, // 10
        0.06, // 11
        0.062, // 12
        0.062, // 13
        0.065, // 14
        0.063, // 15
        0.06, // 16
      ],
      left_option_arr: [],
      alreadyCheckText_arr: [],
      optionInfoArr: [],
      type: "strength",
      color: "#f6f6f6",
    };
  }

  // Function that handler when click button to check/uncheck box.
  handleClick = async (button) => {
    this.state.left_score_arr = []; // Left Choice Array.
    this.state.optionInfoArr = []; // All Option Array.
    let checkedArr = this.state.alreadyChecked_arr; // Option that already checked array.
    let totalScore = 0.0; // Total Score.

    // If checkbox is checked.
    if (button.target.checked) {
      checkedArr.push(`${button.target.id}`); // Collect button that checked to checkedArr[].
      //  console.log(checkedArr)
      //  console.log(this.state.s_option_arr)

      // Loop for checked count of already checked button in checkedArr[].
      for (var i = 0; i < checkedArr.length; i++) {
        // Loop for check count of option on list in s_option_arr {s-option(1) to s-option(n)}.
        // For check which button that checked.
        for (var j = 0; j < this.state.s_option_arr.length; j++) {
          let tempCheck = checkedArr[i];
          if (tempCheck === `s-option${j + 1}`) {
            // Condition to find option that checked.
            await this.state.optionInfoArr.push({
              // If found save optionText & Score to state.
              optionText: this.state.textOptionArr[j],
              optionScore: this.state.score_arr[j],
            });
            totalScore = totalScore + this.state.score_arr[j]; // And save totalScore.
            tempCheck = ""; // Clear tempCheck.
          }
        }
      }
      console.log(this.state.optionInfoArr); // log() for check option that collect.
      await this.setState({ totalScore: parseFloat(totalScore).toFixed(3) }); // Save totalScore in function to main state.
      console.log(this.state.totalScore); // log() for check totalScore.

      // If checkbox is unchecked.                                                // Same for above function (checked -> unchecked).
    } else if (!button.target.checked) {
      this.state.optionInfoArr = [];
      let tempUnCheckedArr = [`${button.target.id}`];
      await this.setState({
        alreadyChecked_arr: checkedArr.filter(
          (n) => !tempUnCheckedArr.includes(n)
        ),
      });
      // await console.log(this.state.alreadyChecked_arr)
      for (i = 0; i < this.state.alreadyChecked_arr.length; i++) {
        for (j = 0; j < this.state.s_option_arr.length; j++) {
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

  // Function that handle submit form button.
  handleSubmit = () => {
    let { totalScore, optionInfoArr } = this.state;
    for (var i = 0; i < optionInfoArr.length; i++) {
      optionInfoArr[i].optionScore = parseFloat(
        optionInfoArr[i].optionScore / totalScore
      ).toFixed(3);
    }
    localStorage.setItem("strength_result", JSON.stringify(optionInfoArr));
    let details = JSON.parse(localStorage.getItem("strength_result"));
    console.log(details);
    this.props.callbackFromParent(details);
    window.scrollTo(0, 0);
  };

  // Render each of question in Array to html.
  renderForm = (e, i) => (
    <div className="option-checkbox" style={{ color: this.state.color }}>
      <label class="check">
        <input
          type="checkbox"
          id={`s-option${i + 1}`}
          onClick={(event) => this.handleClick(event)}
        />
        <div class="box" />
      </label>
      <p>{e}</p>
    </div>
  );

  render() {
    let { textOptionArr } = this.state;
    return (
      <div
        className="wrapper-swot-form weakness"
        style={{
          padding: "60px",
          borderRadius: "20px",
          color: this.state.color,
        }}
      >
        <h2 style={{ fontFamily: "regular" }}>Threat (อุปสรรค)</h2>
        <div className="form-wrapper" style={{ padding: "16px 20px" }}>
          <Form style={{ fontFamily: "exlight" }}>
            <fieldset>
              <Form.Group as={Row} style={{ fontSize: "1.5em" }}>
                <Form.Label
                  as="legend"
                  style={{ fontSize: "18px", fontFamily: "regularItalic" }}
                >
                  อุปสรรคของทางร้านมีอะไรบ้าง (สามารถเลือกได้มากกว่า 1 ข้อ)
                </Form.Label>
                <Col>{textOptionArr.map(this.renderForm)}</Col>
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
