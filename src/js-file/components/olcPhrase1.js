import React, { Component } from "react";
import "../../stylesheets/components/footer.css";
import { Form, Row, Col } from "react-bootstrap";
import "../../stylesheets/components/checkbox.scss";
import Swal from 'sweetalert2';

export default class olcPhrase1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalScore: parseFloat(0).toFixed(2),
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
      ],
      textOptionArr: [
        "เป็นกิจการที่เปิดมาในระยะเวลาที่สั้น และยังไม่เป็นที่รู้จัก",
        "กิจการยังไม่ได้เป็นกิจการขนาดใหญ่ คือกลุ่มธุรกิจขนาดเล็กประกอบด้วยผู้ประกอบการรายย่อม และบริษัททุกประเภทที่ดำเนินธุรกิจเชิงพาณิชย์ในพื้นที่เล็กๆ เช่น ธุรกิจอาหาร ธุรกิจตู้เติมน้ำมันอัตโนมัติ ธุรกิจขายของออนไลน์ และธุรกิจสอนพิเศษ เป็นต้น",
        "กิจการอยู่ในระยะอ่อนแอ เนื่องจากไม่มีกลยุทธ์ในการดำเนินงานที่จะไปสู้กับคู่แข่งได้ ระบบการทำงานยังไม่คงที่ ไม่เป็นระบบ เช่น การแบ่งหน้าที่การทำงานไม่ชัดเจน คนคนหนึ่งทำงานหลายหน้าที่ ทำงานทับซ้อนกัน เป็นต้น และการตลาดรวมถึงการโปรโมทของกิจการยังไม่ดีพอ เช่น การประชาสัมพันธ์ไม่ทั่วถึงลูกค้า ไม่มีการจัดโปรโมชั่นเพื่อที่จะดึงดูดลูกค้าให้สนใจกิจการเรา",
        "คู่แข่งขันสามารถโจมตีธุรกิจได้ง่าย เนื่องจากกิจการของเรายังไม่มีกลยุทธ์หรือวิธีป้องกันการโจมตีของคู่แข่งที่ชัดเจน",
        "กิจการต้องการประคับประคองอย่างมาก	 เพราะกิจการยังอ่อนแอยังไม่สามารถไปสู้กับคู่แข่งได้ เนื่องจากเป็นกิจการที่พึ่งเริ่มก่อตั้ง",
        "กิจการยังไม่มุ้งเน้นการทำกำไรให้ได้จำนวนมาก เพราะต้องการให้รายได้มากกว่าค่าใช้จ่าย และสามารถนำเงินไปหมุนเวียนภายในธุรกิจได้ เช่น ธุรกิจการค้า ที่ซื้อสินค้ามาจำหน่ายสามารถจำหน่ายสินค้าที่รับมาได้หมด หรือรายได้มากกว่าต้นทุนและนำกำไรส่วนนั้นไปซื้อสินค้าอื่นๆ มาจำหน่าย",
        "ระบบการทำงานยังไม่เป็นระบบ	 คือระบบการบริหารงานภายในกิจการยังไม่เป็นระบบระเบียบ การจัดการสต๊อกสินค้ายังไม่มีประสิทธิภาพ ทำให้เกิดปัญหาดังนี้ 1) เจอปัญหาสินค้าบางอย่างไม่เพียงพอต่อความต้องการของลูกค้า 2) ประสบปัญหาสินค้าบางอย่างหมดอายุก่อนที่จะขายได้ ทำให้เสียต้นทุนของสินค้าตัวนั้นไปโดยไม่ได้กำไร 3) ปัญหาสินค้าบางชนิดมากเกินความต้องการ ทำให้สินค้าตกค้าง",
        "การแบ่งงานและการจัดแบ่งงานไม่ชัดเจน เช่น ในแต่ละคนทำงานหลายหน้าที่ ทำให้การจัดสรรงานให้กับพนักงานยังไม่ลงตัว ก่อให้เกิดปัญหางานที่มากกว่าจำนวนพนักงาน งานไม่มีประสิทธิหรือจำนวนพนักงานที่มีมากกว่าจำนวนงานทีมี การทำงานซ้ำซ้อนกัน และเสียค่าใช้จ่ายในการจ้างพนักงานเกินความจำเป็น",
        "หากกิจการได้รับผลกระทบจากสภาพแวดล้อมต่างๆ ทั้งทางภายนอกและภายใน อาจจะทำให้ต้องเลิกกิจการไปได้ เพราะยังไม่สามารถปรับตัวหรือหาแนวทางแก้ไขปัญหาที่เกิดขึ้นจากสภาพแวดล้อมภายนอก เช่น ปัญหาเศรษฐกิจตกต่ำ ที่ส่งผลให้ลูกค้าไม่มีกำลังซื้อสินค้าหรือบริการ ทำให้ธุรกิจขาดรายได้หรือขาดสภาพคล่องทางการเงิน นำไปสู่การขาดทุนจนต้องปิดกิจการ",
        "กิจการอยู่ในช่วงบริหารงานให้อยู่รอดและหาแนวทางสร้างความมั่นคงให้กับกิจการ คือกิจการยังไม่มีความมั่นคงภายในกิจการ ต้องมีการหาแนวทางในการจัดการและบริหารงานภายในกิจการให้อยู่รอดไม่ขาดทุน",
      ],
      option_arr: [],
      score_arr: [0.05, 0.05, 0.1, 0.2, 0.1, 0.05, 0.1, 0.05, 0.2, 0.1],
      left_option_arr: [],
      alreadyCheckText_arr: [],
      optionInfoArr: [],
      type: "strength",
    };
  }

  handleClick = async (button) => {
    this.state.left_score_arr = [];
    let checkedArr = this.state.alreadyChecked_arr;
    let totalScore = 0.0;
    this.state.optionInfoArr = [];

    // If checkbox is checked.
    if (button.target.checked) {
      checkedArr.push(`${button.target.id}`); // push already checked button to Checked Array.
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
      await this.setState({ totalScore: parseFloat(totalScore).toFixed(2) });
      console.log(this.state.totalScore);
    }

    // If checkbox is unchecked.
    else if (!button.target.checked) {
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
            await this.state.optionInfoArr.push(
              {
                optionText: this.state.textOptionArr[j],
                optionScore: this.state.score_arr[j],
                totalScore: this.state.totalScore,
              },
              console.log(this.state.totalScore)
            );
            tempCheck = "";
          }
        }
      }
      console.log(this.state.optionInfoArr);
      await this.setState({ totalScore: parseFloat(totalScore).toFixed(2) });
      console.log(this.state.totalScore);
    }
  };

  handleSubmit = () => {
    let { optionInfoArr } = this.state;
    // for (var i = 0; i < optionInfoArr.length; i++) { optionInfoArr[i].optionScore = parseFloat(optionInfoArr[i].optionScore / totalScore).toFixed(2) }
    localStorage.setItem("olcPhrase1_score", JSON.stringify(optionInfoArr));
    let details = JSON.parse(localStorage.getItem("olcPhrase1_score"));
    console.log(details); // ได้ค่ามาละ 5555
    this.props.callbackFromParent(details, this.state.totalScore);
    window.scrollTo(0, 0);
  };
  renderOLCForm = (e, i) => (
    <div className="option-checkbox">
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
    console.log(textOptionArr);
    return (
      <div
        className="wrapper-swot-form strength"
        style={{ padding: "60px", borderRadius: "20px" }}
      >
        <h2 style={{ fontFamily: "regular" }}>แบบทดสอบประเมิน OLC ของธุรกิจ</h2>
        <div className="form-wrapper" style={{ padding: "16px 20px" }}>
          <Form style={{ fontFamily: "light" }}>
            <fieldset>
              <Form.Group as={Row} style={{ fontSize: "1.5em" }}>
                <Form.Label
                  as="legend"
                  style={{ fontSize: "16px", fontFamily: "regularItalic" }}
                >
                  เลือกข้อที่ตรงกับธุรกิจของคุณมากที่สุด (สามารถเลือกได้มากกว่า
                  1 ข้อ)
                </Form.Label>
                <Col>{textOptionArr.map(this.renderOLCForm)}</Col>
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
