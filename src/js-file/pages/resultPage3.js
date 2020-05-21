import React, { Component } from "react";
import Navbar from "../components/navbar";
import Strength from "../components/strength2";
import "../../stylesheets/pages/swotPage.css";
import { Bubble, Line } from "react-chartjs-2";
import Footer from "../components/footer";
const options = {
  tooltips: {
    enabled: false,
  },
  ticks: {
    display: false,
    fontColor: "#fff",
  },
  layout: {
    padding: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10,
    },
  },
  legend: {
    display: false,
  },
  title: {
    display: false,
    text: "SWOT Result",
    fontFamily: "light",
    fontSize: 28,
    padding: 26,
    fontColor: "#363C54",
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          max: 10,
          min: -10,
          fontColor: "#363C54",
          fontSize: 16,
        },
        gridLines: {
          color: "rgba(0, 0, 0, 0.1)",
          zeroLineColor: "rgba(0, 0, 0, 1.0)",
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
          max: 10,
          min: -10,
          fontColor: "#363C54",
          padding: 10,
          fontSize: 16,
        },
        gridLines: {
          color: "rgba(0, 0, 0, 0.1)",
          zeroLineColor: "rgba(0, 0, 0, 1.0)",
        },
      },
    ],
  },
};

export default class resultPage3 extends Component {
  constructor(props) {
    super(props);
    // State
    this.state = {
      btnActive: 2,
      data: {
        datasets: [
          {
            backgroundColor: "rgb(241, 111, 32,0.6)",
            borderColor: "rgb(241, 111, 32,1)",
            pointStyle: "circle",
            rotation: 45,
            borderWidth: 10,
            hoverRadius: 10,
            data: [],
          },
        ],
      },
      mode: "",
    };
  }

  // Before render
  componentDidMount = async () => {
    let details = JSON.parse(localStorage.getItem("finalScore3"));
    await localStorage.setItem("isFinished", true);
    let detailsArr = [];
    detailsArr.push(
      {
        name: "strength",
        number: parseFloat(details[0]),
      },
      {
        name: "weakness",
        number: parseFloat(-details[1]),
      },
      {
        name: "opportunity",
        number: parseFloat(details[2]),
      },
      {
        name: "threat",
        number: parseFloat(-details[3]),
      }
    );
    console.log(detailsArr);

    switch (true) {
      case detailsArr[0].number >= -detailsArr[1].number &&
        detailsArr[2].number >= -detailsArr[3].number:
        await this.setState({
          data: {
            datasets: [
              {
                data: [{ x: detailsArr[2].number, y: detailsArr[0].number }],
              },
            ],
          },
          mode:
            "หากธุรกิจหรือกิจการของท่านอยู่ในช่วง SO หรือช่วง Star จะสามารถบ่งบอกได้ว่า ธุรกิจหรือกิจการของท่านมีอัตราการเจริญเติบโตของยอดขายสูง ส่วนครองตลาดสูง ควรใช้กลยุทธ์ส่งเสริมการลงทุนใหม่ โดยทำการส่งเสริมการตลาดเพื่อรักษาส่วนแบ่งทางการตลาดของธุรกิจหรือกิจการ และต่อสู้กับคู่แข่งขันที่จะเข้ามาแข่งขัน เช่น มีการทำการตลาดให้กับสินค้า ผลิตภัณฑ์ หรือบริการที่มีอยู่ เป็นต้น กิจการควรใช้โอกาสนี้ในการขยายฐานลูกค้า โดยทำการตลาดให้ธุรกิจหรือแบรนด์เป็นที่รู้จักมากขึ้น มีการขยายกำลังคนและมีกำลังที่จะก้าวไปข้างหน้าด้วยการขยายฐานลูกค้า มีผลิตภัณฑ์หรือบริการใหม่ๆออกสู่ตลาด หรือหากต้องการขยายขนาดธุรกิจสามารถทำได้ในช่วงนี้ ยกตัวอย่างเช่น การทำธุรกิจโดยคำนึงถึงสิ่งแวดล้อม โดยการนำผลิตภัณฑ์ที่เป็นมิตรกับสิ่งแวดล้อมมาจำหน่าย สิ่งนี้จะช่วยยกระดับภาพลักษณ์ของกิจการหรือแบรนด์ให้ดียิ่งขึ้น ",
        });

        break;

      case detailsArr[0].number >= -detailsArr[1].number &&
        detailsArr[2].number < -detailsArr[3].number:
        await this.setState({
          data: {
            datasets: [
              {
                data: [{ x: detailsArr[3].number, y: detailsArr[0].number }],
              },
            ],
          },
          mode:
            "หากธุรกิจหรือกิจการของท่านอยู่ในช่วง ST หรือ cash cow จะสามารถบ่งบอกได้ว่า จะสามารถบ่งบอกได้ว่าธุรกิจหรือกิจการของท่าน เป็นธุรกิจที่มีอัตราการเจริญเติบโตของยอดขายต่ำ ส่วนครองตลาดหรือส่วนแบ่งตลาดสูง โดยสาเหตุที่อัตราการเจริญเติบโตของยอดขายลดลงเพราะกิจการเข้าสู่ขั้นเจริญเติบโตเต็มที่ และตลาดเข้าสู่จุดอิ่มตัว แต่ธุรกิจหรือกิจการที่อยู่ในช่วงนี้ยังสามารถสร้างรายได้ให้กับเจ้าของกิจการอยู่เรื่อยๆ ได้อย่างต่อเนื่อง  ดังนั้นธุรกิจหรือกิจการของท่าน ต้องหาวิธีว่าทำอย่างไรจะรักษาส่วนแบ่งตลาดไว้ให้นานที่สุด ซึ่งสามารถทำได้โดย หาสินค้าที่เป็นที่นิยมของตลาดมาจำหน่าย ขยายประเภทสินค้าภายในร้านให้เพิ่มมากขึ้น เพื่อขยายฐานลูกค้าเพิ่มขึ้นและที่สำคัญที่สุดคือการรักษาคุณภาพของสินค้า บริการไว้ และหาวิธีลดค่าใช้จ่ายหรือทำให้เกิดกำไรเพิ่มขึ้น",
        });
        break;
      case detailsArr[0].number < -detailsArr[1].number &&
        detailsArr[2].number >= -detailsArr[3].number:
        await this.setState({
          data: {
            datasets: [
              {
                data: [{ x: detailsArr[2].number, y: detailsArr[1].number }],
              },
            ],
          },
          mode:
            "หากธุรกิจหรือกิจการของท่านอยู่ในช่วง WO ซึ่งก็คือ Question Mark  จะสามารถบ่งบอกได้ว่าธุรกิจหรือกิจการของท่านเป็นธุรกิจที่มีอัตราการเติบโตของตลาดสูง แต่มีส่วนแบ่งของตลาดต่ำ โดยธุรกิจหรือกิจการพวกนี้มักจะยังมีกำไรน้อย ไม่ได้สร้างรายได้ที่เยอะให้กับธุรกิจหรือกิจการ แต่ก็ยังเห็นการขายอย่างต่อเนื่อง ซึ่งต่อไปอาจจะกลายเป็น Stars (รุ่ง) ก็ได้ หรือจะตกกลายเป็น Dogs (ร่วง) ก็ได้เช่นกัน ดังนั้นธุรกิจหรือกิจการของท่านควรใช้กลยุทธ์คือการทำการตลาดใหม่ การประชาสัมพันธ์ให้กับสินค้าหรือผลิตภัณฑ์ใหม่ เอาใจใส่ในความต้องการของผู้บริโภค ว่าในปัจจุบันผู้บริโภคต้องการอะไรแบบไหน หรือ อาจจะเพิ่มการบริการแบบ Drive-thru เพื่ออำนวยความสะดวกให้กับลูกค้ามากขึ้น หากเป็นร้านขายของชำหรือมินิมาร์ท ควรจัดสินค้าให้อยู่ในชั้นวางที่เท่ากับระดับสายตา เพื่อให้สะดุดตาและง่ายต่อการหยิบจับ และ ควรจะมีการโปรโมทผ่านโซเชี่ยลมีเดีย เพราะในปัจจุบันนี้ ผู้คนใช้สื่อโซเชี่ยลมีเดียและรับรู้ข่าวสารผ่านทางด้านนี้มากที่สุด",
        });
        break;

      case detailsArr[0].number < -detailsArr[1].number &&
        detailsArr[2].number < -detailsArr[3].number:
        await this.setState({
          data: {
            datasets: [
              {
                data: [{ x: detailsArr[3].number, y: detailsArr[1].number }],
              },
            ],
          },
          mode:
            "ธุรกิจหรือกิจการของท่านอยู่ในช่วง WT หรือช่วง Dogs ซึ่งคือช่วงส่วนแบ่งทางการตลาดต่ำหรืออัตราการเติบโตต่ำ เป็นช่วงที่สามารถบ่งบอกได้ว่า ธุรกิจหรือกิจการทำกำไรได้น้อยที่สุดในกราฟ BCG Matrix ขายแต่ไม่ได้กำไร ขายยาก มีขีดความสามารถต่ำ เป็นสินค้าที่ไม่ควรเอามาขายต่อ สำหรับผู้ประกอบการเองสิ่งที่ยากคือการพยายามทำความเข้าใจและเปิดใจยอมรับว่าสินค้าอยู่ในจุดที่ไม่ได้ทำกำไรและตลาดไม่ได้เติบโต จึงควรจะตัดทิ้ง  หรือจำเป็นต้องใช้กลยุทธ์ที่ช่วยปรับปรุง ฟื้นฟูกิจการให้อยู่รอดต่อไปได้ เช่น ลดระดับสต๊อคสินค้า หรือหาวิธีทำโปรโมชั่น เปลี่ยนตำแหน่งผลิตภัณฑ์นั้นใหม่ ขยับสินค้าให้ไปสู่จุด Question Marks หรือ Cash Cows ให้ได้ การลดต้นทุนโดยการตัดช่องทางการขายที่ไม่มีประสิทธิภาพและไม่จำเป็นออกไป",
        });
        break;
      default:
    }
  };

  // Render elements
  render() {
    let { btnActive } = this.state;
    return (
      <div style={{ fontFamily: "bold" }}>
        <Navbar swot={btnActive} />
        <div style={{ width: "100%", textAlign: "center", marginTop: "5%" }}>
          {/* <h1 style={{ fontFamily: "bold", color: "#363c54", fontSize: "2em" }}>
            ผลลัพธ์การประเมิน SWOT ธุรกิจการค้า
          </h1>
          <p
            style={{
              marginLeft: "10%",
              marginRight: "10%",
              marginTop: "50px",
              fontFamily: "light",
              color: "#f16f20",
            }}
          >
            {this.state.mode}
          </p>
        </div>
        <div
          style={{
            padding: "24px",
            display: "flex",
            justifyContent: "center",
            marginTop: "2%",
          }}
        >
          <div
            className="graph-swot"
            style={{
              padding: "24px",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(94, 92, 92, 0.336)",
            }}
          >
            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flex: "0 0 50%",
                }}
              >
                <p>ST</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flex: "0 0 50%",
                }}
              >
                <p>SO</p>
              </div>
            </div>
            <Bubble data={this.state.data} options={options} />

            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flex: "0 0 50%",
                }}
              >
                <p>WT</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flex: "0 0 50%",
                }}
              >
                <p>WO</p>
              </div>
            </div>
          </div>
        </div> */}
          <h1 style={{ fontFamily: "bold", color: "#363c54", fontSize: "2em" }}>
            ผลลัพธ์การประเมิน SWOT ธุรกิจการค้า
          </h1>

          <div
            style={{
              padding: "24px",
              display: "flex",
              justifyContent: "center",
              marginTop: "2%",
            }}
          >
            <div
              className="graph-swot"
              style={{
                padding: "24px",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(94, 92, 92, 0.336)",
              }}
            >
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    flex: "0 0 50%",
                  }}
                >
                  <p>ST</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    flex: "0 0 50%",
                  }}
                >
                  <p>SO</p>
                </div>
              </div>
              <Bubble data={this.state.data} options={options} />

              <div style={{ display: "flex" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    flex: "0 0 50%",
                  }}
                >
                  <p>WT</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    flex: "0 0 50%",
                  }}
                >
                  <p>WO</p>
                </div>
              </div>
            </div>
          </div>
          <p
            className="resultpage"
            style={{
              marginLeft: "10%",
              marginRight: "10%",
              marginTop: "50px",
              fontFamily: "light",
              color: "#f16f20",
            }}
          >
            {this.state.mode}
          </p>
        </div>

        <div className="home-button" style={{ padding: "5%" }}>
          <div className="buttons">
            <button
              className="button-swot "
              id="button-swot"
              onClick={() => {
                this.props.history.push("/swot-info");
                window.scrollTo(0, 0);
              }}
            >
              แบบประเมิน SWOT
            </button>
            <button
              className="button-olc"
              id="button-olc"
              onClick={() => {
                this.props.history.push("/olc-info");
                window.scrollTo(0, 0);
              }}
            >
              แบบประเมิน OLC
            </button>
            <button
              className="button-both"
              id="button-both"
              onClick={() => {
                this.props.history.push("/pre-swotolc");
                window.scrollTo(0, 0);
              }}
            >
              แบบประเมิน SWOT และ OLC
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
