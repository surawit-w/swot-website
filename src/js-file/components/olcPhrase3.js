import React, { Component } from "react";
import "../../stylesheets/components/footer.css";
import { Form, Row, Col } from "react-bootstrap";
import "../../stylesheets/components/checkbox.scss";
import Swal from 'sweetalert2';

export default class olcPhrase3 extends Component {
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
        "กิจการเติบโตอย่างเต็มที่ มีฐานลูกค้าค่อนข้างมาก ทำให้สินค้า หรือวัตถุดิบที่ใช้จำหน่ายไม่เพียงพอต่อลูกค้าในบางครั้ง เช่น ร้านขายอาหารมีการหุงข้าวไม่เพียงพอต่อจำนวนลูกค้าที่เข้าใช้บริการ หรือร้านสะดวกซื้อ สินค้าบางรายการอาจจะไม่พอต่อความต้องการลูกค้า เนื่องจากจำนวนสินค้าที่สต็อกไม่เพียงพอ",
        "เมื่อกิจการเติบโตอย่างเต็มที่ พร้อมทั้งมีฐานลูกค้าเดิมค่อนข้างมาก ทำให้การตั้งราคาของสินค้าที่สูงไม่ส่งผลต่อกิจการมากนัก เนื่องจากลูกค้ามีความจงรักภักดีต่อแบรนด์หรือร้านค้า เช่น ร้านอาหารแม้จะตั้งราคาต่อจานราคาสูง แต่หากรสชาติอร่อยถูกปากลูกค้า ทำให้เกิดการบอกต่อจนมีลูกค้ารายใหม่มาใช้บริการเพิ่ม ทำให้กิจการมีรายได้เพิ่มขึ้น ดังนั้นการตั้งราคาสูงจึงไม่มีผลต่อกิจการมากนัก",
        "จำนวนออเดอร์ที่ลูกค้าสั่งมีจำนวนเพิ่มมากขึ้นอย่างเห็นได้ชัดเจน สังเกตจากรายได้ หรือกำไรที่เพิ่มขึ้น",
        "ทางร้านมีบริการเดลิเวอรี่ การบริการส่งมีการออกส่งหลายรอบต่อวัน เช่น ปกติส่งเพียงวันละ 2 รอบ แต่ปัจจุบันมีการออกส่งเพิ่มขึ้นมากกว่า 2 รอบเป็นประจำ",
        "มีการขยายธุรกิจให้มีขนาดใหญ่ขึ้นหรือเพิ่มสาขา โดยมีการขยายร้านให้มีขนาดใหญ่ขึ้น เช่น ร้านขายอาหารมีการขยายร้านโดยการเพิ่มที่นั่งสำหรับลูกค้าที่มาใช้บริหารให้มากขึ้นเพื่อให้เพียงพอต่อลูกค้าที่มาใช้บริการ ร้านสะดวกซื้อมีการขยายคลังสินค้าให้มีขนาดใหญ่ขึ้นเพื่อเพียงพอต่อการสต็อกสินค้าไว้จำหน่ายให้กับลูกค้า หรือมีการขยายสาขาเพิ่มขึ้น เช่น เดิมกิจการมีการขายเพียงทีเดียว ปัจจุบันกิจการมีหลายสาขาทั้งในจังหวัดเดียวกัน หรือข้ามจังหวัด เพื่อเป็นช่องทางการเพิ่มรายได้ให้กับกิจการ",
        "มีการรับสมัครพนักงานในแต่ละตำแหน่งเพิ่มมากขึ้น เมื่อกิจการอยู่ในระยะเติบโตเต็มที่จึงจำเป็นที่จะต้องรับสมัครพนักงานในแต่ละตำแหน่งเพิ่มมากขึ้น เพื่อให้การทำงานในแต่ละแผนก แต่ละฝ่ายมีประสิทธิภาพ สามารถรักษาเสถียรภาพของธุรกิจไว้ได้",
        "มีเงินทุนหมุนเวียนในธุรกิจเพิ่มสูงขึ้น โดยมีส่วนแบ่งทางการตลาดมาก ทำให้มีกำไรมหาศาลจึงส่งผลให้มีเงินทุนหมุนเวียนในธุรกิจเพิ่มสูงขึ้น",
        "ผู้บริหารมีการแบ่งอำนาจ หน้าที่กันอย่างชัดเจนไปตามความสามารถและความชำนาญ เมื่อธุรกิจอยู่ในระยะเติบโตเต็มที่จะส่งผลให้ธุรกิจมีการเจริญเติบโตที่ช้าลง จึงจำเป็นที่จะต้องมีทีมผู้บริหารที่มีความสามารถและความชำนาญในการบริหารงาน สร้างกลยุทธ์มาต่อสู้กับคู่แข่งขัน และจำเป็นต้องมีแผนกหรือฝ่ายต่างๆ ที่มีความสามารถและความชำนาญในด้านนั้นๆ เพื่อทำให้การทำงานออกมามีประสิทธิภาพมากที่สุด เช่น ฝ่ายการตลาด ฝ่ายบัญชี เป็นต้น",
        "ธุรกิจอยู่ในช่วงเติบโตเต็มที่ ทำให้มีกำไรมหาศาลแสดงถึงว่าธุรกิจมีฐานลูกค้าที่มั่นคง ดังนั้นธุรกิจจึงมุ่งรักษาเสถียรภาพโดยการปรับเปลี่ยนกลยุทธ์ในการขาย ทำยังไงให้ลูกค้าซื้อกับเราโดยมุ่งเน้นไปที่ลูกค้ากลุ่มเดิมที่มีความจงรักภักดีต่อแบรนด์หรือธุรกิจ",
        "ธุรกิจเข้าสู่ระยะการเติบโตเต็มที่จะทำให้ธุรกิจเริ่มเจริญเติบโตช้าลง ผู้ประกอบการจึงต้องมีแนวคิดในการพัฒนาสินค้าหรือบริการเพื่อดึงดูดให้ผู้บริโภคสนใจในธุรกิจ ส่งผลให้ธุรกิจสามารถดำเนินต่อไปได้ หากไม่ได้มีการพัฒนาในระยะนี้ อาจส่งผลให้ธุรกิจเข้าสู่ช่วงระยะเสื่อมถอยและต้องปิดกิจการไปในที่สุด",
      ],
      option_arr: [],
      score_arr: [0.19, 0.16, 0.14, 0.09, 0.08, 0.07, 0.05, 0.05, 0.07, 0.1],
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
            await this.state.optionInfoArr.push({
              optionText: this.state.textOptionArr[j],
              optionScore: this.state.score_arr[j],
            });
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
    localStorage.setItem("olcPhrase3_score", JSON.stringify(optionInfoArr));
    let details = JSON.parse(localStorage.getItem("olcPhrase3_score"));
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
