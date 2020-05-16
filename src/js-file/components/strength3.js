import React, { Component } from "react";
import "../../stylesheets/components/footer.css";
import { Form, Row, Col } from "react-bootstrap";
import "../../stylesheets/components/checkbox.scss";
import Swal from "sweetalert2";

export default class strength3 extends Component {
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
      ],
      textOptionArr: [
        "1)	การขายสินค้าโดยทั่วไปมีตราสินค้าเป็นที่ยอมรับของกลุ่มผู้บริโภค",
        "2)	สินค้าที่จำหน่ายมีคุณภาพดี",
        "3)	ต้นทุนของสินค้าต่ำและมีกำไรต่อหน่วยสูง",
        "4)	มีบริการหลังขายเพื่อดูผลตอบรับจากลูกค้า",
        "5)	มีภาพลักษณ์ของร้านที่ดี",
        "6)	ธุรกิจเปิดมาเป็นเวลานานทำให้มีฐานลูกค้าเก่า มีลูกค้าประจำเนื่องจากมีความใกล้ชิดกับลูกค้า",
        "7)	เข้าใจความต้องการและพฤติกรรมของผู้บริโภค นำสินค้ามาจำหน่ายได้ตรงตามความต้องการ",
        "8)	ในการซื้อขาย สามารถชำระเงินได้ 2 รูปแบบคือ เงินสด และเงินเชื่อ",
        "9)	ราคาสินค้าสามารถเข้าถึงลูกค้าได้ทุกระดับ",
        "10) สามารถชำระเงินได้หลายช่องทาง เช่น การโอน บริการจ่ายผ่านบัตร VISA หรือ MasterCard",
        "11) มีส่วนลดสำหรับสินค้าบางรายการ เช่น สินค้าใกล้หมดอายุ หรือสินค้าแนะนำ",
        "12) ทำเลที่ตั้งเหมาะสมอยู่บริเวณที่มีความเจริญ เป็นที่ตั้งของชุมชน การคมนาคมสะดวก และอยู่ใกล้กับกลุ่มเป้าหมาย",
        "13) ทำเลที่ตั้งของกิจการมีที่จอดรถกว้างขวาง สามารถบริการลูกค้าและจอดรถขนถ่ายสินค้าได้สะดวก",
        "14) มีจำนวนสาขามากกว่าและมีทำเลที่ตั้งของร้านค้าที่ได้เปรียบกว่าคู่แข่ง",
        "15) มีช่องทางการจัดจำหน่ายที่หลากหลาย เช่น มีบริการแบบเดลิเวอรี่หรือจัดส่งผ่านรูปแบบขนส่ง",
        "16) มีการจัดทำร้านค้าออนไลน์ในสื่อ Social Media เพื่อการค้าและการโฆษณา",
        "17) มีการจัดทำการตลาด และประชาสัมพันธ์เพื่อให้ลูกค้าทราบและเข้ามาใช้บริการของร้าน",
        "18) มีการจัดทำโปรโมชัน เช่น การลดราคาสำหรับการจับคู่สินค้า",
        "19) บริการเน้นความเป็นมิตรกับลูกค้า เอาใส่ใจในสิ่งที่ลูกค้าต้องการ เช่นเมื่อลูกค้าหาของสิ่งนั้นไม่เจอจะช่วยหา หรือคอยให้ความช่วยเหลือลูกค้าระหว่างการซื้อสินค้า",
        "20) มีการใช้เทคโนโลยีในการบริการจัดการในร้าน เช่น การใช้โปรแกรมในการบริหารคลังสินค้า (สต็อคสินค้า) ใช้ระบบโปรแกรม POS ในการคิดเงินลูกค้า",
        "21) ธุรกิจใช้ระยะเวลาคืนทุนเร็ว",
        "22) ได้รับเครดิตจากบริษัทผู้ผลิต ตัวแทนจำหน่าย และกิจการคู่ค้าที่สามารถสั่งสินค้ามาขายก่อนได้",
        "23) มีคลังสินค้าเป็นของตนเอง ทำให้สามารถเก็บสินค้าไว้ได้พอเพียงที่จะจำหน่ายให้แก่ลูกค้า",
        "24) มีการจัดวางสินค้าเป็นหมวดหมู่ ง่ายต่อการหาสินค้าแก่ลูกค้า",
        "25) บรรยากาศร้านมีแสงสว่างเพียงพอ",
        "26) ช่องทางเดินมีความกว้างได้มาตรฐาน ",
        "27) สินค้าโดยรวมสะอาด ไม่มีฝุ่นเกาะ",
        "28) กิจการเป็นเจ้าของคนเดียว เป็นผลทำให้มีความยืดหยุ่นในการบริหารงานสูง",
        "29) ผู้ประกอบการมีกระบวนการตัดสินใจที่รวดเร็ว กระชับ เป็นอิสระ สามารถปรับตัวตามการแข่งขันได้เสมอ",
        "30) ผู้บริหารมีประสบการณ์จากธุรกิจค้าปลีกค้าส่งมาตั้งแต่สมัยบิดามารดา ทำให้เกิดความชำนาญ มีฐานลูกค้าเก่า",
        "31) บุคลากรมีความชำนาญ ความสามารถ และได้รับการพัฒนาศักยภาพอย่างสม่ำเสมอ",
        "32) มีคู่ค้าที่ดี ให้การช่วยเหลือ เช่น พนักงานขายสินค้าเข้าส่งสินค้าเป็นประจำ ทำให้สินค้าไม่ขาดสต็อค หรือพนักงานขายให้คำแนะนำสินค้าอย่างสม่ำเสมอ",
        "33) มีเงินทุนหมุนเวียนเพียงพอ",
        "34) รายได้หรือยอดขายมีความแน่นอน",
      ],
      option_arr: [],
      score_arr: [
        0.035, // 1
        0.032, // 2
        0.028, // 3
        0.026, // 4
        0.029, // 5
        0.032, // 6
        0.03, // 7
        0.028, // 8
        0.03, // 9
        0.025, // 10
        0.027, // 11
        0.029, // 12
        0.027, // 13
        0.028, // 14
        0.028, // 15
        0.027, // 16
        0.028, // 17
        0.028, // 18
        0.03, // 19
        0.023, // 20
        0.027, // 21
        0.03, // 22
        0.029, // 23
        0.03, // 24
        0.03, // 25
        0.027, // 26
        0.028, // 27
        0.029, // 28
        0.03, // 29
        0.029, // 30
        0.028, // 31
        0.03, // 32
        0.029, // 33
        0.028, // 34
      ],
      left_option_arr: [],
      alreadyCheckText_arr: [],
      optionInfoArr: [],
      type: "strength",
      color: "#f6f6f6",
    };
  }

  componentDidMount = async () => {
    console.log(this.props.swotolc);
    localStorage.setItem("swotolcBoolean", false);
    if (this.props.swotolc) {
      localStorage.setItem("swotolcBoolean", true);
    }
  };
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
