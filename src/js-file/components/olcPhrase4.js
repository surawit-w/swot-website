import React, { Component } from "react";
import "../../stylesheets/components/footer.css";
import { Form, Row, Col } from "react-bootstrap";
import "../../stylesheets/components/checkbox.scss";
import Swal from 'sweetalert2';

export default class olcPhrase4 extends Component {
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
        "ประสบปัญหาด้านการบริหาร การบริหารงานภายในต่างๆเริ่มมีปัญหาเช่น การลาออกของผู้บริหาร",
        "มีอัตราการลาออกของพนักงานสูง เพราะพนักงานจะเริ่มมองออกว่าเศรษฐกิจเป็นอย่างไรแล้วธุรกิจที่พนักงานกำลังทำนั้นสามารถดำเนินกิจการต่อไปได้หรือไม่",
        "มีการถอนหุ้น เนื่องจากธุรกิจเริ่มมีกำไรลดน้อยลงผู้ถือหุ้นอาจมองว่าธุรกิจไม่สามารถสร้างผลกำไรขึ้นอีกได้ จึงถอนหุ้นออกเพื่อนำไปลงทุนกับบริษัทอื่นที่สามารถสร้างผลกำไรได้มากกว่า",
        "ลูกค้าหลักสั่งสินค้าลดน้อยลง เนื่องจากขั้นนี้อยู่ในช่วงที่ประสบปัญหาต่างๆลูกค้าหลักอาจมองหาบริษัทใหม่ๆที่มีการจัดการในการบริหารที่ดีกว่า และไม่ประสบปัญหาภายในองค์จึงทำให้ลูกค้าสั่งสินค้าน้อยลงหรือเลือกที่จะสั่งสินค้าจากบริษัทอื่นแทน",
        "มีศักยภาพการดำเนินงานที่ต่ำลง เนื่องจากกิจการอยู่ในสภาวะที่เสื่อมถอยหรือถดถอยทำให้การดำเนินการในการดำเนินงานมีศักยภาพที่ต่ำลง ช้าลง ไม่มีสภาพคล่องในการทำงาน",
        "บุคคลในองค์กรมีพฤติกรรมการปฏิบัติงานแบบตามคำสั่งหรือตามกำหนดการมากกว่าจะมีความคิดริเริ่มสร้างสรรค์",
        "เนื่องจากสภาวะขององค์กรที่เกิดปัญหาและมีการบริหารที่ไม่มีศักยภาพมากพอ ส่งผลให้ผลผลิตหรือผลิตภัณฑ์ของกิจการลดลง",
        "มีบริษัทอื่นหรือตลาดมีสินค้าที่สามารถทดแทนกันได้และมีราคาถูกกว่า เพราะในปัจจุบันมีเทคโนโลยีที่สามารถพัฒนาสิ่งต่างๆให้มีคุณภาพมากขึ้น ซึ่งอาจจะรวมไปถึงการที่ผลิตสินค้าชนิดเดียวกันแต่มีต้นทุนที่ถูกกว่าและอาจจะมีคุณภาพที่ดีกว่าหรือเท่ากันได้",
        "ผู้บริหารไม่มีความคิดที่จะพัฒนาบริษัทต่อไป ซึ่งอาจเกิดจากการที่ผู้บริหารอาจจะไม่มีความสามารถมากพอหรือว่าขาด",
        "นโยบายทางเศรษฐกิจของทางภาครัฐไม่เอื้อต่อเศรษฐกิจและกิจการทำให้ธุรกิจขาดทุน",
      ],
      option_arr: [],
      score_arr: [0.05, 0.05, 0.05, 0.15, 0.1, 0.15, 0.15, 0.1, 0.1, 0.1],
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
    localStorage.setItem("olcPhrase4_score", JSON.stringify(optionInfoArr));
    let details = JSON.parse(localStorage.getItem("olcPhrase4_score"));
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
