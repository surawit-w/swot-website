import React, { Component } from "react";
import contactPic from "../../images/contact.png";
import teamPic from "../../images/team.png";
import "../../stylesheets/components/footer.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import "../../stylesheets/components/checkbox.scss";
import Swal from "sweetalert2";

export default class opportunity2 extends Component {
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
      ],
      textOptionArr: [
        "1)	ได้รับการส่งเสริมจากภาครัฐ  ",
        "2)	ธุรกิจที่บริการมีอัตราเจริญเติบโตสูง",
        "3)	พฤติกรรมลูกค้าที่เปลี่ยนไป ทำให้เกิดไอเดียการทำธุรกิจแบบใหม่",
        "4)	ค่านิยมของคนไทย ที่เน้นใช้บริการของร้าน ความสะดวก และ บริการที่ดี ทำให้เกิดความประทับใจ และ กลับมาใช้บริการอีก",
        "5)	การสื่อสารผ่านโลกออนไลน์ที่รวดเร็ว หากกิจการมีเอกลักษณ์ และบริการที่ดี ลูกค้าสามารถมีการบอกต่อกันได้อย่างรวดเร็ว  ",
        "6)	ปัจจุบันมีเทคโนโลยีที่ทันสมัย และ เอื้อต่อการให้บริการลูกค้า",
        "7)	สถานที่ตั้งของธุรกิจมีสถานที่ท่องเที่ยวที่สวยงามทั้งด้านธรรมชาติและด้านวัฒนธรรม",
      ],
      option_arr: [],
      score_arr: [0.1, 0.12, 0.15, 0.14, 0.18, 0.2, 0.11],
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
    localStorage.setItem("strength_result2", JSON.stringify(optionInfoArr));
    let details = JSON.parse(localStorage.getItem("strength_result2"));
    console.log(details); // ได้ค่ามาละ 5555
    this.props.callbackFromParent(details);
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div
        className="wrapper-swot-form opportunity"
        style={{
          padding: "60px",
          borderRadius: "20px",
          color: this.state.color,
        }}
      >
        <h2 style={{ fontFamily: "regular" }}>Opportunity (โอกาส)</h2>
        <div className="form-wrapper" style={{ padding: "16px 20px" }}>
          <Form style={{ fontFamily: "exlight" }}>
            <fieldset>
              <Form.Group as={Row} style={{ fontSize: "1.5em" }}>
                <Form.Label
                  as="legend"
                  style={{ fontSize: "18px", fontFamily: "regularItalic" }}
                >
                  โอกาสของทางร้านมีอะไรบ้าง (สามารถเลือกได้มากกว่า 1 ข้อ)
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
                    <p>(1) ได้รับการส่งเสริมจากภาครัฐ </p>
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
                    <p>(2) ธุรกิจที่บริการมีอัตราเจริญเติบโตสูง</p>
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
                    <p>
                      (3) พฤติกรรมลูกค้าที่เปลี่ยนไป
                      ทำให้เกิดไอเดียการทำธุรกิจแบบใหม่{" "}
                    </p>
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
                      (4) ค่านิยมของคนไทย ที่เน้นใช้บริการของร้าน ความสะดวก และ
                      บริการที่ดี ทำให้เกิดความประทับใจ และ กลับมาใช้บริการอีก{" "}
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
                    <p>
                      (5) การสื่อสารผ่านโลกออนไลน์ที่รวดเร็ว
                      หากกิจการมีเอกลักษณ์ และบริการที่ดี
                      ลูกค้าสามารถมีการบอกต่อกันได้อย่างรวดเร็ว
                    </p>
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
                      (6) ปัจจุบันมีเทคโนโลยีที่ทันสมัย และ
                      เอื้อต่อการให้บริการลูกค้า{" "}
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
                      (7)
                      สถานที่ตั้งของธุรกิจมีสถานที่ท่องเที่ยวที่สวยงามทั้งด้านธรรมชาติและด้านวัฒนธรรม
                    </p>
                  </div>
                </Col>
              </Form.Group>
            </fieldset>
          </Form>
          {/* <p
            style={{ textAlign: "end" }}
          >{`Total = ${this.state.totalScore}`}</p> */}
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
