import React, { Component } from "react";
import contactPic from "../../images/contact.png";
import teamPic from "../../images/team.png";
import "../../stylesheets/components/footer.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import "../../stylesheets/components/checkbox.scss";
import Swal from "sweetalert2";

export default class strength extends Component {
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
        "s-option35",
        "s-option36",
        "s-option37",
        "s-option38",
        "s-option39",
        "s-option40",
        "s-option41",
        "s-option42",
        "s-option43",
        "s-option44",
        "s-option45",
        "s-option46",
        "s-option47",
        "s-option48",
      ],
      textOptionArr: [
        "1) ให้ความสำคัญในการคัดเลือกวัตถุดิบที่มีคุณภาพจากแหล่งที่น่าเชื่อถือ ",
        "2) ใช้ระบบ JUST IN TIME ในการจัดการสินค้าคงคลัง เพื่อลดต้นทุนการจัดเก็บสินค้า",
        "3) กิจการตั้งอยู่ใกล้แหล่งวัตถุดิบที่จำเป็นในการผลิต ทำให้มีต้นทุนในการขนส่งด้านวัตถุดิบที่ต่ำ รวมทั้งไม่จำเป็นต้องสำรองวัตถุดิบไว้มาก",
        "4) การผลิตทันสมัยและมีคุณภาพได้มาตรฐาน",
        "5) สามารถขยายการผลิตเพื่อตอบความต้องการที่มากขึ้น",
        "6) ใช้เทคโนโลยี และเครื่องจักรในการผลิตที่เป็นมาตรฐาน",
        "7) วัตถุดิบหลักที่มีสามารถใช้ผลิตสินค้าได้หลายชนิด",
        "8) ผลิตภัณฑ์มีรูปแบบที่ทันสมัย แปลกตา",
        "9) มีห้องปลอดเชื้อสำหรับการบรรจุหีบห่อ",
        "10)  มีการบำรุงรักษาเครื่องมือ เครื่องจักร อุปกรณ์ อย่างสม่ำเสมอ",
        "11)  ขั้นตอนการผลิตไม่ซับซ้อน ไม่ต้องใช้บุคลากรที่มีประสบการณ์สูง ทำให้มีต้นทุนต่ำ",
        "12)  มีสถานที่ในการจัดเก็บสินค้าที่มีมาตรฐาน",
        "13)  ใช้พื้นที่ในการจัดเก็บอย่างมีประสิทธิภาพ",
        "14)  การเคลื่อนย้ายผลิตภัณฑ์มีความรวดเร็ว ทำการเชื่อมโยงกับลูกค้าให้ได้รับสินค้าที่สะดวกรวดเร็ว",
        "15)  มีการนำผลิตภัณฑ์ที่มีลักษณะใกล้เคียงกันมาจัดเก็บไว้ที่เดียวกัน เพื่อความสะดวกในการนำออกมาจัดส่ง",
        "16)  ที่ตั้งของกิจการอยู่ใกล้แหล่งชุมชน จึงสามารถกระจายสินค้าไปยังแหล่งต่าง ๆ ได้สะดวก",
        "17)  มีช่องทางการจัดจำหน่ายที่แน่นอน",
        "18)  มีชื่อเสียงเป็นที่รู้จัก",
        "19)  มีช่องทางการจัดจำหน่ายที่หลากหลาย",
        "20)  มีการจัดทำโปรโมชั่นอย่างต่อเนื่อง",
        "21)  มีการกำหนดเกณฑ์การสั่งซื้อสินค้าหากซื้อสินค้าตามที่กำหนดจะได้รับของสัมมนาคุณจากทางบริษัท",
        "22)  มีการใช้สื่อเพื่อสื่อสารกับลูกค้าได้ทุกกลุ่ม เช่น กลุ่มลูกค้ารายใหญ่ กลุ่มลูกค้ารายเล็ก",
        "23)  มีการประกันสินค้าจนถึงมือผู้รับสินค้า",
        "24)  มีฐานลูกค้าที่มั่นคง",
        "25)  อำนาจต่อรองของลูกค้าต่ำ",
        "26)  มีบริการรับเปลี่ยนสินค้า กรณีสินค้ามีการชำรุด",
        "27)  มีบริการซ่อมสินค้าที่ชำรุดหลังการขาย ในระยะเวลาที่กำหนด",
        "28)  มีการติดตั้งสินค้าให้แก่ลูกค้า",
        "29)  มีต้นทุนการผลิตที่ต่ำ",
        "30)  มีความแข็งแกร่งด้านเงินทุน",
        "31)  ผู้บริหารมีความรู้และความเชี่ยวชาญด้านการผลิต",
        "32)  ผู้บริหารมีความรู้ความสามารถในการบริหารจัดการองค์กร",
        "33)  ได้รับเครื่องหมายรับรองคุณภาพของสินค้า",
        "34)  มีการจดสิทธิบัตรเพื่อป้องกันการลอกเลียนแบบ",
        "35)  เงินลงทุนเริ่มแรก เป็นเงินของผู้ก่อตั้ง ทำให้กิจการไม่มีปัญหาภาระหนี้สิน",
        "36)  ผู้ผลิตมีความสามารถในการปรับกระบวนการผลิตเพื่อให้สามารถผลิตชนิดสินค้าที่มีความหลากหลาย สามารถตอบสนองความต้องการที่แตกต่าง ",
        "37)  บุคลากรมีศักยภาพในการทำงาน ",
        "38)  พนักงานมีความรู้และความชำนาญในการผลิตสินค้า",
        "39)  มีการจัดอบรมและพัฒนาทักษะของพนักงานอยู่เสมอ ",
        "40)  มีการกำหนดสวัสดิการและผลตอบแทนรายปีให้กับพนักงาน เพื่อสร้างขวัญและกำลังใจให้แก่พนักงาน ",
        "41)  พนักงานมีความจงรักภักดีแก่องค์กร ",
        "42)  มีการสำรวจความต้องการของลูกค้าในตลาด ",
        "43)  มีการออกแบบบรรจุภัณฑ์ที่เป็นมิตรกับสิ่งแวดล้อม ",
        "44)  มีการออกแบบบรรจุภัณฑ์ที่ทันสมัยเป็นสนใจและสะดวกต่อการใช้งาน ",
        "45)  มีอำนาจต่อรองกับบริษัทที่ทำการขนส่งสินค้าให้กับบริษัทค่อนข้างสูง ",
        "46)  มีบริหารขนส่งโดยไม่มีขั้นต่ำในการสั่งซื้อสินค้า ",
        "47)  มีความพร้อมด้านวัตถุดิบในการผลิต ",
        "48)  กิจการตั้งอยู่ใกล้กับแหล่งวัตถุดิบ",
      ],
      option_arr: [],
      score_arr: [
        0.025,
        0.005,
        0.002,
        0.025,
        0.002,
        0.025,
        0.01,
        0.005,
        0.005,
        0.008,
        0.005,
        0.002,
        0.008,
        0.005,
        0.002,
        0.005,
        0.025,
        0.01,
        0.005,
        0.002,
        0.008,
        0.008,
        0.008,
        0.01,
        0.01,
        0.01,
        0.025,
        0.01,
        0.025,
        0.05,
        0.05,
        0.05,
        0.025,
        0.2,
        0.02,
        0.02,
        0.025,
        0.025,
        0.025,
        0.01,
        0.05,
        0.05,
        0.008,
        0.008,
        0.002,
        0.04,
        0.05,
        0.01,
      ],
      totalScore: (0.0).toFixed(3),
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
    localStorage.setItem("strength_result", JSON.stringify(optionInfoArr));
    let details = JSON.parse(localStorage.getItem("strength_result"));
    console.log(details); // ได้ค่ามาละ 5555
    this.props.callbackFromParent(details);
    window.scrollTo(0, 0);
  };

  render() {
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
                <Col>
                  <div
                    className="option-checkbox"
                    style={{ color: this.state.color }}
                  >
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option1"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>
                      (1)
                      ให้ความสำคัญในการคัดเลือกวัตถุดิบที่มีคุณภาพจากแหล่งที่น่าเชื่อถือ
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
                    <p>
                      (2) ใช้ระบบ JUST IN TIME ในการจัดการสินค้าคงคลัง
                      เพื่อลดต้นทุนการจัดเก็บสินค้า
                    </p>
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
                      (3) กิจการตั้งอยู่ใกล้แหล่งวัตถุดิบที่จำเป็นในการผลิต
                      ทำให้มีต้นทุนในการขนส่งด้านวัตถุดิบที่ต่ำ
                      รวมทั้งไม่จำเป็นต้องสำรองวัตถุดิบไว้มาก
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
                    <p>(4) การผลิตทันสมัยและมีคุณภาพได้มาตรฐาน</p>
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
                    <p>(5) สามารถขยายการผลิตเพื่อตอบความต้องการที่มากขึ้น</p>
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
                      (6) ใช้เทคโนโลยี และเครื่องจักรในการผลิตที่เป็นมาตรฐาน
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
                    <p>(7) วัตถุดิบหลักที่มีสามารถใช้ผลิตสินค้าได้หลายชนิด</p>
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
                    <p>(8) ผลิตภัณฑ์มีรูปแบบที่ทันสมัย แปลกตา</p>
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
                    <p>(9) มีห้องปลอดเชื้อสำหรับการบรรจุหีบห่อ</p>
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
                    <p>
                      (10) มีการบำรุงรักษาเครื่องมือ เครื่องจักร อุปกรณ์
                      อย่างสม่ำเสมอ
                    </p>
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
                      (11) ขั้นตอนการผลิตไม่ซับซ้อน
                      ไม่ต้องใช้บุคลากรที่มีประสบการณ์สูง ทำให้มีต้นทุนต่ำ
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
                    <p>(12) มีสถานที่ในการจัดเก็บสินค้าที่มีมาตรฐาน</p>
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
                    <p>(13) ใช้พื้นที่ในการจัดเก็บอย่างมีประสิทธิภาพ</p>
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
                      (14) การเคลื่อนย้ายผลิตภัณฑ์มีความรวดเร็ว
                      ทำการเชื่อมโยงกับลูกค้าให้ได้รับสินค้าที่สะดวกรวดเร็ว
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
                    <p>
                      (15)
                      มีการนำผลิตภัณฑ์ที่มีลักษณะใกล้เคียงกันมาจัดเก็บไว้ที่เดียวกัน
                      เพื่อความสะดวกในการนำออกมาจัดส่ง
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
                      (16) ที่ตั้งของกิจการอยู่ใกล้แหล่งชุมชน
                      จึงสามารถกระจายสินค้าไปยังแหล่งต่าง ๆ ได้สะดวก
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
                    <p>(17) มีช่องทางการจัดจำหน่ายที่แน่นอน</p>
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
                    <p>(18) มีชื่อเสียงเป็นที่รู้จัก</p>
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
                    <p>(19) มีช่องทางการจัดจำหน่ายที่หลากหลาย</p>
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
                    <p>(20) มีการจัดทำโปรโมชั่นอย่างต่อเนื่อง</p>
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
                    <p>
                      (21)
                      มีการกำหนดเกณฑ์การสั่งซื้อสินค้าหากซื้อสินค้าตามที่กำหนดจะได้รับของสัมมนาคุณจากทางบริษัท
                    </p>
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
                      (22) มีการใช้สื่อเพื่อสื่อสารกับลูกค้าได้ทุกกลุ่ม เช่น
                      กลุ่มลูกค้ารายใหญ่ กลุ่มลูกค้ารายเล็ก
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
                    <p>(23) มีการประกันสินค้าจนถึงมือผู้รับสินค้า</p>
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
                    <p>(24) มีฐานลูกค้าที่มั่นคง</p>
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
                    <p>(25) อำนาจต่อรองของลูกค้าต่ำ</p>
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
                    <p>(26) มีบริการรับเปลี่ยนสินค้า กรณีสินค้ามีการชำรุด </p>
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
                    <p>(27) มีบริการรับเปลี่ยนสินค้า กรณีสินค้ามีการชำรุด </p>
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
                    <p>(28) มีการติดตั้งสินค้าให้แก่ลูกค้า </p>
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
                    <p>(29) มีต้นทุนการผลิตที่ต่ำ </p>
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
                    <p>(30) มีความแข็งแกร่งด้านเงินทุน </p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option31"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(31) ผู้บริหารมีความรู้และความเชี่ยวชาญด้านการผลิต </p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option32"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>
                      (32) ผู้บริหารมีความรู้ความสามารถในการบริหารจัดการองค์กร{" "}
                    </p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option33"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(33) ได้รับเครื่องหมายรับรองคุณภาพของสินค้า </p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option34"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(34) มีการจดสิทธิบัตรเพื่อป้องกันการลอกเลียนแบบ </p>
                  </div>

                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option35"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(35) มีต้นทุนการผลิตที่ต่ำ </p>
                  </div>
                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option36"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>
                      (36)
                      ผู้ผลิตมีความสามารถในการปรับกระบวนการผลิตเพื่อให้สามารถผลิตชนิดสินค้าที่มีความหลากหลาย
                      สามารถตอบสนองความต้องการที่แตกต่าง{" "}
                    </p>
                  </div>
                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option37"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(37) บุคลากรมีศักยภาพในการทำงาน</p>
                  </div>
                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option38"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(38) พนักงานมีความรู้และชำนาญในการผลิตสินค้า </p>
                  </div>
                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option39"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(39) มีการจัดอบรมและพัฒนาทักษะของพนักงานอยู่เสมอ </p>
                  </div>
                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option40"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>
                      (40) มีการกำหนดสวัสดิการและผลตอบแทนรายปีให้กับพนักงาน
                      เพื่อสร้างขวัญและกำลังใจให้แก่พนักงาน{" "}
                    </p>
                  </div>
                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option41"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(41) พนักงานมีความจงรักภักดีแก่องค์กร </p>
                  </div>
                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option42"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(42) มีการสำรวจความต้องการของลูกค้าในตลาด </p>
                  </div>
                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option43"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(43) มีการออกแบบบรรจุภัณฑ์ที่เป็นมิตรกับสิ่งแวดล้อม </p>
                  </div>
                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option44"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>
                      (44)
                      มีการออกแบบบรรจุภัณฑ์ที่ทันสมัยเป็นที่สนใจและสะดวกต่อการใช้งาน{" "}
                    </p>
                  </div>
                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option45"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(45) มีต้นทุนการผลิตที่ต่ำ </p>
                  </div>
                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option46"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(46) มีบริการขนส่งโดยไม่มีขั้นต่ำในการสั่งซื้อสินค้า </p>
                  </div>
                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option47"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(47) มีความพร้อมด้านวัตถุดิบในการผลิต </p>
                  </div>
                  <div className="option-checkbox">
                    <label class="check">
                      <input
                        type="checkbox"
                        id="s-option48"
                        onClick={(event) => this.handleClick(event)}
                      />
                      <div class="box" />
                    </label>
                    <p>(48) กิจการตั้งอยู่ใกล้กับแหล่งวัตถุดิบ </p>
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
