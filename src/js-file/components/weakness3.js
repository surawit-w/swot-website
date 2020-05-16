import React, { Component } from "react";
import "../../stylesheets/components/footer.css";
import { Form, Row, Col } from "react-bootstrap";
import "../../stylesheets/components/checkbox.scss";
import Swal from "sweetalert2";

export default class weakness3 extends Component {
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
      ],
      textOptionArr: [
        "1)	สินค้าไม่มีความหลากหลาย",
        "2)	สินค้ามีราคาแพงกว่าคู่แข่งขันในตลาดประเภทเดียวกัน",
        "3)	สินค้าบางชนิดไม่มีคุณภาพ มีลักษณะไม่ทันสมัย",
        "4)	สินค้ามีฝุ่นเกาะและไม่สะอาด",
        "5)	ไม่มีการติดป้ายราคา ทำให้เกิดความผิดพลาดในการกำหนดราคาขาย ซึ่งอาจจะส่งผลให้ราคาสินค้าที่ขายสูงหรือต่ำเกินไป",
        "6)	สินค้ามีราคาแพงกว่าคู่แข่งขันในตลาดประเภทเดียวกัน",
        "7)	ต้นทุนสินค้าสูง กำไรต่อหน่วยต่ำ",
        "8)	ไม่สามารถชำระสินค้าผ่านการโอนได้ รับเฉพาะเงินสด",
        "9)	ไม่มีช่องทางการจัดจำหน่ายอื่น ๆ เช่น ไม่มีบริการส่งแบบเดลิเวอรี่",
        "10) ทำเลที่ตั้งไม่เหมาะสม การคมนาคมไม่สะดวก ",
        "11) ทำเลที่ตั้งของร้านไม่มีที่จอดรถยนต์ ทำให้ไม่สามารถอำนวยความสะดวกแก่ลูกค้าในการจอดรถเพื่อมาซื้อสินค้าของทางร้าน",
        "12) ไม่มีการจัดทำร้านค้าออนไลน์ในสื่อ Social Media เพื่อการค้าและการโฆษณา",
        "13) ขาดการประชาสัมพันธ์ทางการตลาด ทำให้ลูกค้ารับรู้ข่าวสารได้ยาก",
        "14) กิจการไม่เป็นที่รู้จักในวงกว้าง",
        "15) ระบบการบริหารภายในร้านยังไม่เป็นระบบเท่าที่ควร เนื่องจากเป็นธุรกิจขนาดเล็ก การบริหารจัดการจึงยังไม่เป็นระบบ เช่น การบริหารจัดการบุคลากรยังมีความซับซ้อนในหน้าที่",
        "16) ระบบการจัดซื้อสินค้าค่อนข้างช้า ส่งผลทำให้ความต่อเนื่องที่จะนำสินค้าที่หมดมาวางขายหน้าร้านใหม่เป็นไปอย่างล่าช้า",
        "17) ไม่มีการใช้เทคโนโลยีในการขาย หรือมีการใช้แต่มีการเกิดปัญหาบ่อยครั้ง เช่น ระบบโปรแกรมเกิดการขัดข้อง",
        "18) ทำเลที่ตั้งมีอุปสรรคในการมาซื้อสินค้าผู้บริโภค เช่น ที่จอดรถคับแคบ หาที่จอดยาก ",
        "19) สินค้ามีฝุ่นจับ ",
        "20) แสงสว่างไม่เพียงพอ ",
        "21) ช่องระหว่างทางเดินคับแคบทำให้รู้สึกอึดอัดเนื่องจากมีข้อจำกัดด้าน",
        "22) ที่ตั้งของกิจการเป็นอาคารพาณิชย์ที่เก่า แคบ การจัดวางสินค้าไม่เป็นหมวดหมู่ ทำให้สินค้าสูญหายได้ง่าย และการขยายสถานที่ได้ลำบาก",
        "23) ผู้ประกอบยังขาดความรู้ ความเข้าใจทางด้านการเงินและการบัญชีตามมาตรฐานที่ถูกต้อง",
        "24) ลูกหลานไม่ต้องการสืบทอดกิจการ ",
        "25) ไม่มีการจัดอบรมพนักงาน ทำให้ประสิทธิภาพการทำงานของพนักงานไม่มีการพัฒนา ",
        "26) อัตราเข้าออกของพนักงานสูง ",
        "27) มีรูปแบบการบริหารเป็นแบบครอบครัว จึงไม่มีการวางแผนจำหน่ายสินค้าให้เป็นระบบและไม่มีนโยบายที่จะขยายกิจการ",
        "28) ทำงานทุกวันไม่มีวันหยุด ทำให้มีปัญหาในเรื่องบุคลากร ซึ่งมักทำงานได้ไม่นาน ทำให้ต้องรับบุคลากรใหม่และใช้เวลาในสอนงานอยู่เสมอ",
        "29) จำนวนแรงงานไม่เพียงพอ ",
        "30) กิจการขาดเงินทุนหมุนเวียน ซึ่งมีความสำคัญเพราะสินค้าอุปโภค บริโภค ส่วนใหญ่เป็นสินค้าที่มี อัตรากำไรต่อชิ้นต่ำ จำเป็นจะต้องขายให้ได้จำนวนมาก ดังนั้นจึงต้องใช้เงินทุนหมุนเวียนเพื่อซื้อสินค้าสูง",
        "31) มีข้อจํากัดด้านการเงิน ทําให้เป็นอุปสรรคต่อการขยายธุรกิจได้มากขึ้น",
        "32) ค่าเช่าพื้นที่ดำเนินงานสูง",
      ],
      option_arr: [],
      score_arr: [
        0.032, // 1
        0.03, // 2
        0.035, // 3
        0.029, // 4
        0.033, // 5
        0.03, // 6
        0.028, // 7
        0.029, // 8
        0.029, // 9
        0.032, // 10
        0.035, // 11
        0.029, // 12
        0.03, // 13
        0.032, // 14
        0.033, // 15
        0.029, // 16
        0.029, // 17
        0.033, // 18
        0.029, // 19
        0.03, // 20
        0.033, // 21
        0.033, // 22
        0.033, // 23
        0.029, // 24
        0.035, // 25
        0.033, // 26
        0.029, // 27
        0.033, // 28
        0.032, // 29
        0.03, // 30
        0.033, // 31
        0.032, // 32
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
