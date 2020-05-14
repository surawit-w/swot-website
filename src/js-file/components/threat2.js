import React, { Component } from "react";
import contactPic from "../../images/contact.png";
import teamPic from "../../images/team.png";
import "../../stylesheets/components/footer.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import "../../stylesheets/components/checkbox.scss";

export default class threat2 extends Component {
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
      ],
      textOptionArr: [
        "1)	สถานการณ์ทางการเมืองที่ไม่แน่นอนในปัจจุบัน ทำให้ความเชื่อมั่นของผู้บริโภคลดลง เนื่องจากต้องเตรียมตัวตอบรับสถานการณ์ต่าง ๆ ",
        "2) มีการแข่งขันค่อนข้างสูง เพราะเป็นธุรกิจที่มีความนิยมสูง ",
        "3)	ในปัจจุบันประสบปัญหาเศรษฐกิจตกต่ำ ทำให้การลงทุนชะลอตัว ",
        "4)	อำนาจการต่อรองของลูกค้าสูง  ",
        "5)	ปัญหาภัยพิบัติในพื้นที่ ที่ส่งผลกระทบโดยตรงต่อธุรกิจ ",
        "6)	สถานการณ์โรคระบาด เชื้อไวรัส COVID-19 ทำให้ผู้บริโภคไม่กล้าออกนอกบ้านไปในพื้นที่คนพลุกพล่าน ",
        "7)	สถานการณ์ความรุนแรงที่เกิดขึ้นในห้างสรรพสินค้าชื่อดัง ทำให้ผู้บริโภคตื่นกลัวในการออกไปในพื้นที่คนพลุกพล่าน ",
      ],
      option_arr: [],
      score_arr: [0.12, 0.15, 0.14, 0.11, 0.08, 0.2, 0.09],
      totalScore: (0.0).toFixed(2),
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
      await this.setState({ totalScore: parseFloat(totalScore).toFixed(2) });
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
      await this.setState({ totalScore: parseFloat(totalScore).toFixed(2) });
      console.log(this.state.totalScore);
    }
  };

  handleSubmit = () => {
    let { totalScore, alreadyChecked_arr, optionInfoArr } = this.state;
    for (var i = 0; i < optionInfoArr.length; i++) {
      optionInfoArr[i].optionScore = parseFloat(
        optionInfoArr[i].optionScore / totalScore
      ).toFixed(2);
    }
    localStorage.setItem("strength_result2", JSON.stringify(optionInfoArr));
    let details = JSON.parse(localStorage.getItem("strength_result2"));
    console.log(details); // ได้ค่ามาละ 5555
    this.props.callbackFromParent(details);
    window.scrollTo(0, 0);
    // document.location.href = '/swot-analysis-weakness'
  };

  render() {
    return (
      <div
        className="wrapper-swot-form threat"
        style={{
          padding: "60px",
          borderRadius: "20px",
          color: this.state.color,
        }}
      >
        <h2 style={{ fontFamily: "regular" }}>Threat (อุปสรรค)</h2>
        <div className="form-wrapper" style={{ padding: "16px 20px" }}>
          <Form style={{ fontFamily: "light" }}>
            <fieldset>
              <Form.Group as={Row} style={{ fontSize: "1.5em" }}>
                <Form.Label
                  as="legend"
                  style={{ fontSize: "18px", fontFamily: "regularItalic" }}
                >
                  อุปสรรคของทางร้านมีอะไรบ้าง (สามารถเลือกได้มากกว่า 1 ข้อ)
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
                    <p>(1) ไม่ได้รับการสนับสนุนจากภาครัฐ </p>
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
                    <p>(2) สถานการณ์ทางการเมืองที่ไม่แน่นอน </p>
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
                    <p>(3) คู่แข่งขันหลายรายในตลาดประเภทเดียวกัน</p>
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
                    <p>(4) มีภัยคุกคามจากคู่แข่งขันรายใหม่เข้ามาในตลาดสูง </p>
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
                    <p>(5) สินค้าที่ผลิตสามารถเลียนแบบได้ง่าย</p>
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
                      (6)
                      สภาพเศรษฐกิจในปัจจุบันทำให้การดำเนินธุรกิจเป็นไปอย่างยากลำบาก
                      เนื่องจากเศรษฐกิจส่งผลต่อการจับจ่ายใช้สอยของผู้บริโภค{" "}
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
                    <p>(7) ความผันผวนของราคาวัตถุดิบ </p>
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
                    <p>(8) วัตถุดิบขาดตลาด </p>
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
                    <p>(9) คู่แข่งมีการจัดลดราคาสินค้า </p>
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
                    <p>(10) แข่งขันมีประสิทธิภาพอย่างมาก </p>
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
                    <p>
                      (11) พฤติกรรมผู้บริโภคเปลี่ยนไป และมีทัศนคติที่เปลี่ยนไป{" "}
                    </p>
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
                      (12)
                      ปริมาณความต้องการของผู้บริโภคยังมีสูงกว่าความสามารถในการผลิต{" "}
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
                    <p>(13) เทคโนโลยีมีข้อจำกัดในการใช้งาน </p>
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
                      (14) เกิดภัยพิบัติทางธรรมชาติบ่อยครั้ง
                      และส่งผลกระทบต่อธุรกิจโดยตรง เช่น
                      สถานการณ์อุทกภัยทำให้ต้องหยุดการผลิตชั่วคราว{" "}
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
                    <p>(15) การเพิ่มอัตราการเก็บภาษี </p>
                  </div>
                </Col>
              </Form.Group>
            </fieldset>
          </Form>
          <p
            style={{ textAlign: "end" }}
          >{`Total = ${this.state.totalScore}`}</p>
        </div>
        <div id="buttonNextCenter">
          <button onClick={this.handleSubmit} id="buttonNext">
            ถัดไป
          </button>
        </div>
      </div>
    );
  }
}
