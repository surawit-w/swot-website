import React, { Component } from "react";
import contactPic from "../../images/contact.png";
import teamPic from "../../images/team.png";
import "../../stylesheets/components/footer.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import "../../stylesheets/components/checkbox.scss";
import Swal from "sweetalert2";

export default class weakness2 extends Component {
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
      ],
      textOptionArr: [
        "1)	กิจการมีระยะเวลาที่จัดตั้งได้ไม่นาน ทำให้ไม่มีฐานลูกค้า",
        "2)	การบริการไม่มีมาตรฐาน ",
        "3)	สินค้าและบริการสามารถลอกเลียนแบบได้ง่าย",
        "4)	ราคาสินค้าและบริการสูงกว่าคู่แข่งในท้องตลาดประเภทเดียวกัน ",
        "5)	ไม่มีการจัดทำส่วนลดราคาสำหรับลูกค้า ",
        "6)	ช่องทางการชำระเงินยังไม่หลากหลา",
        "7)	ทำเลที่ตั้งร้านอยู่ในตำแหน่งที่ไม่เหมาะสม ",
        "8)	พื้นที่ภายในร้านไม่เหมาะสม เพียงพอต่อการให้บริการลูกค้า",
        "9)	ที่จอดรถไม่เพียงพอต่อจำนวนลูกค้า ",
        "10)	ห้องสุขาไม่สะอาด ไม่สะดวกสบาย ",
        "11)	ไม่มีการจัดทำการตลาดด้านการประชาสัมพันธ์อย่างต่อเนื่อง ",
        "12)	ไม่มีการจัดทำโปรโมชั่นเพื่อดึงดูดลูกค้า ",
        "13)	ไม่มีตราสินค้าที่สร้างความทรงจำให้แก่ลูกค้า ",
        "14)	พนักงานมีจำนวนจำกัด ไม่เพียงพอต่อการบริหารลูกค้า ",
        "15)	ขาดการทำวิจัยและพัฒนาจึงไม่ทราบความต้องการของลูกค้า ",
        "16)	ไม่มีการจัดเตรียมสินค้าให้พร้อมต่อการบริการไม่มีการเช็คสินค้าในการบริการอย่างต่อเนื่องทำให้บางครั้งไม่สามารถให้บริการลูกค้าและสูญเสียรายได้ ",
        "17)	เครื่องอำนวยความสะดวกของลูกค้ายังไม่เพียงพอต่อความต้องการ ",
        "18)	ไม่มีเอกลักษณ์เป็นของตนเอง ",
        "19)	บรรยากาศรอบนอกร้านไม่เหมาะสม มองเห็นได้ยาก",
        "20)	ประสบปัญหามลพิษทางกลิ่น",
        "21)	สภาพแวดล้อมโดยรอบไม่เหมาะสมกับทางร้าน",
        "22)	พนักงานไม่มีความจงรักภักดีต่อองค์กร ส่งผลให้มีอัตราลาออกจากงานสูง",
        "23)	พนักงานมีจำนวนจำกัด ไม่เพียงพอต่อการบริหารลูกค้า ",
        "24)	พนักงานไม่มีความรู้เกี่ยวกับสินค้าที่ขาย",
        "25)	พนักงานไม่เอาใจใส่ในการบริการลูกค้า",
        "26)	ผู้ประกอบการขาดความรู้ความเข้าใจในด้านการบริหารธุรกิจ ",
        "27)	มีต้นทุนในการดำเนินงานอย่างจำกัด ",
        "28)	ธุรกิจมีต้นทุนสูง ",
        "29)	รายได้ไม่แน่นอน",
        "30)	ขาดการวางแผนในการประกอบธุรกิจ ทำให้ต้นทุนของการประกอบธุรกิจมีจำนวนมาก",
      ],
      option_arr: [],
      score_arr: [
        0.02, //1
        0.02, //2
        0.02, //3
        0.03, //4
        0.02, //5
        0.02, //6
        0.1, //7
        0.02, //8
        0.02, //9
        0.02, //10
        0.05, //11
        0.05, //12
        0.02, //13
        0.02, //14
        0.02, //15
        0.02, //16
        0.02, //17
        0.02, //18
        0.02, //19
        0.02, //20
        0.02, //21
        0.02, //22
        0.1, //23
        0.02, //24
        0.05, //25
        0.1, //26
        0.05, //27
        0.05, //28
        0.02, //29
        0.02, //30
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
    localStorage.setItem("strength_result2", JSON.stringify(optionInfoArr));
    let details = JSON.parse(localStorage.getItem("strength_result2"));
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
                      (1) กิจการมีระยะเวลาที่จัดตั้งได้ไม่นาน
                      ทำให้ไม่มีฐานลูกค้า
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
                    <p>(2) การบริการไม่มีมาตรฐาน</p>
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
                    <p>(3) สินค้าและบริการสามารถลอกเลียนแบบได้ง่าย</p>
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
                      ราคาสินค้าและบริการสูงกว่าคู่แข่งในท้องตลาดประเภทเดียวกัน{" "}
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
                    <p>(5) ไม่มีการจัดทำส่วนลดราคาสำหรับลูกค้า</p>
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
                    <p>(6) ช่องทางการชำระเงินยังไม่หลากหลา</p>
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
                    <p>(7) ทำเลที่ตั้งร้านอยู่ในตำแหน่งที่ไม่เหมาะสม</p>
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
                      (8) พื้นที่ภายในร้านไม่เหมาะสม
                      เพียงพอต่อการให้บริการลูกค้า
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
                    <p>(9) ที่จอดรถไม่เพียงพอต่อจำนวนลูกค้า</p>
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
                    <p>(10) ห้องสุขาไม่สะอาด ไม่สะดวกสบาย</p>
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
                      (11)
                      ไม่มีการจัดทำการตลาดด้านการประชาสัมพันธ์อย่างต่อเนื่อง
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
                    <p>(12) ไม่มีการจัดทำโปรโมชั่นเพื่อดึงดูดลูกค้า</p>
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
                    <p>(13) ไม่มีตราสินค้าที่สร้างความทรงจำให้แก่ลูกค้า</p>
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
                    <p>(14) พนักงานมีจำนวนจำกัด ไม่เพียงพอต่อการบริหารลูกค้า</p>
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
                    <p>
                      (15) ขาดการทำวิจัยและพัฒนาจึงไม่ทราบความต้องการของลูกค้า
                    </p>
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
                    <p>
                      (16)
                      ไม่มีการจัดเตรียมสินค้าให้พร้อมต่อการบริการไม่มีการเช็คสินค้าในการบริการอย่างต่อเนื่องทำให้บางครั้งไม่สามารถให้บริการลูกค้าและสูญเสียรายได้
                    </p>
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
                    <p>
                      (17)
                      เครื่องอำนวยความสะดวกของลูกค้ายังไม่เพียงพอต่อความต้องการ
                    </p>
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
                    <p>(18) ไม่มีเอกลักษณ์เป็นของตนเอง</p>
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
                    <p>(19) บรรยากาศรอบนอกร้านไม่เหมาะสม มองเห็นได้ยาก</p>
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
                    <p>(20) ประสบปัญหามลพิษทางกลิ่น</p>
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
                    <p>(21) สภาพแวดล้อมโดยรอบไม่เหมาะสมกับทางร้าน</p>
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
                    <p>
                      (22) พนักงานไม่มีความจงรักภักดีต่อองค์กร
                      ส่งผลให้มีอัตราลาออกจากงานสูง
                    </p>
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
                    <p>(23) พนักงานมีจำนวนจำกัด ไม่เพียงพอต่อการบริหารลูกค้า</p>
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
                    <p>(24) พนักงานไม่มีความรู้เกี่ยวกับสินค้าที่ขาย</p>
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
                    <p>(25) พนักงานไม่เอาใจใส่ในการบริการลูกค้า</p>
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
                    <p>
                      (26) ผู้ประกอบการขาดความรู้ความเข้าใจในด้านการบริหารธุรกิจ
                    </p>
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
                    <p>(27) มีต้นทุนในการดำเนินงานอย่างจำกัด</p>
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
                    <p>(28) ธุรกิจมีต้นทุนสูง</p>
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
                    <p>(29) รายได้ไม่แน่นอน</p>
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
                    <p>
                      (30) ขาดการวางแผนในการประกอบธุรกิจ
                      ทำให้ต้นทุนของการประกอบธุรกิจมีจำนวนมาก
                    </p>
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
