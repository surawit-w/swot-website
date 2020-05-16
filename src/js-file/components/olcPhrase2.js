import React, { Component } from "react";
import "../../stylesheets/components/footer.css";
import { Form, Row, Col } from "react-bootstrap";
import "../../stylesheets/components/checkbox.scss";
import Swal from 'sweetalert2';

export default class olcPhrase2 extends Component {
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
        "การมีลูกค้าให้การตอบรับธุรกิจหรือบริการอย่างรวดเร็วทำให้มียอดขายและมีกำไรที่เพิ่มสูงขึ้น",
        "จากความต้องการของผู้บริโภคหรือลูกค้า ทำให้ต้องมีการลงทุนเพิ่มมากขึ้นในการเพิ่มผลผลิตสินค้าและบริการให้มากขึ้น รวมถึงขยายช่องทางการจัดจำหน่าย เพื่อให้เพียงพอต่อความต้องการของลูกค้า",
        "กิจการมีเงินทุนหมุนเวียนอย่างเพียงพอ และสามารถลงทุนเพื่อเพิ่มประสิทธิภาพและมาตรฐานต่าง ๆ ของธุรกิจได้",
        "กิจการมีหน้าที่การงานที่ต้องรับผิดชอบมากขึ้น รวมถึงกำลังคนไม่เพียงพอต่อการผลิตและให้บริการ จึงต้องรับพนักงานเพื่อเพิ่มกำลังคนและรับแนวความคิดใหม่ๆ",
        "มีความพยายามในการสร้างความพึงพอใจให้กับลูกค้า จนเกิดการกลับมาใช้บริการของลูกค้าและเกิดลูกค้าขาประจำ",
        "มีการบริหารงานอย่างเป็นทางการมากขึ้น เช่น ใช้ลายลักษณ์อักษรในการติดต่อประสานงาน",
        "กิจการมีการวางแผนในการดำเนินงานอย่างชัดเจนมากขึ้น	เช่น มีการวางแผนในเรื่องของการควบคุมพนักงาน แบ่งตำแหน่งหน้าที่กันอย่างชัดเจน",
        "ผู้บริหารมองถึงอนาคตข้างหน้า เพื่อที่จะขยายกิจการให้เติบโตขึ้นอีกในอนาคต เช่น มองหาทำเลที่ตั้งเพื่อที่จะขยายกิจการ คำนึงถึงกระแสและค่านิยมของผู้บริโภคเพื่อนำมาปรับใช้กับกิจการ เป็นต้น",
        "กิจการมีกฎระเบียบที่เข้มงวด เพื่อให้บุคลากรในกิจการปฏิบัติตามกฎเพื่อการอยู่ร่วมกัน",
        "มีการรับฟังความคิดเห็นจากทุกฝ่าย รวมถึงมีการตัดสินใจร่วมกัน เช่น การรับฟังความคิดเห็นจากพนักงานเพื่อนำมาปรับใช้กับกิจการ เป็นต้น",
      ],
      option_arr: [],
      score_arr: [0.1, 0.15, 0.1, 0.1, 0.1, 0.05, 0.1, 0.2, 0.05, 0.05],
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
              totalScore: this.state.totalScore,
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
    localStorage.setItem("olcPhrase2_score", JSON.stringify(optionInfoArr));
    let details = JSON.parse(localStorage.getItem("olcPhrase2_score"));
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
