import React, { Component } from "react";
import Navbar from "../components/navbar";
import Strength from "../components/strength";
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

export default class resultPage extends Component {
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
    let details = JSON.parse(localStorage.getItem("finalScore"));
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

    // await this.setState({
    //   data: {
    //     datasets: [
    //       {
    //         data: [
    //           { x: 0, y: detailsArr[0].number },
    //           { x: 0, y: detailsArr[1].number },
    //           { x: detailsArr[2].number, y: 0 },
    //           { x: detailsArr[3].number, y: 0 },
    //         ],
    //       },
    //     ],
    //   },
    // });

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
            "หากธุรกิจหรือกิจการของท่านอยู่ในช่วง SO หรือช่วง Star ผลิตภัณฑ์อยู่ในช่วงกำลังเติบโต มีความต้องการในตลาดมาก ควรรักษาตัวเองให้อยู่ในตลาดต่อไปให้นานที่สุด แน่นอนว่าเติบโตก็ดี ส่วนแบ่งก็เยอะ คู่เเข่งก็จะเข้ามาเรื่อยๆ จึงต้องรักษามาตรฐานและครองใจลูกค้าให้ได้มากที่สุดเพราะเป็นช่วงที่มีคู่แข่งมากสามารถแย่งส่วนครองทางการตลาดได้เสมอๆ เช่น การที่สินค้าที่ผลิตออกมานั้นเป็นที่ได้รับความนิยมอย่างมาก ดังนั้นเราจึงควรที่จะรักษาช่วงเวลานี้ให้นานที่สุด ไม่ว่าจะเป็นการสนับสนุนโครงการต่างๆหรือจะโฆษณาเกี่ยวกับสินค้าที่ผลิตออกมาให้เป็นที่ยอมรับมากยิ่งขึ้น เพื่อที่จะทำให้ธุรกิจการผลิตอยู่ได้อย่างยั่งยืน",
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
            "หากธุรกิจหรือกิจการของท่านอยู่ในช่วง ST หรือ cash cow คือช่วงที่เป็นผลิตภัณฑ์ที่มีอัตราการเจริญเติบโตของยอดขายต่ำ ส่วนครองตลาดเปรียบเทียบสูง โดยสาเหตุที่อัตราการเจริญเติบโตของยอดขายลดลงเพราะผลิตภัณฑ์เข้าสู่ขั้นเจริญเติบโตเต็มที่และตลาดเข้าสู่จุดอิ่มตัว ทําอย่างไรถึงจะรักษาส่วนแบ่งการตลาดไว้ให้นานที่สุด เช่น การจัดงานลดราคาสินค้าเพื่อเป็นการดึงดูดความสนใจลูกค้าจากที่ลูกค้าที่สนใจสินค้าที่ผลิตออกมา กับลูกค้ารายใหม่ที่มีความสนใจเกี่ยวกับสินค้า และเพื่อที่จะรักษาฐานลูกค้าหรือเป็นการเพิ่มฐานลูกค้าให้มากขึ้น",
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
            "หากธุรกิจหรือกิจการของท่านอยู่ในช่วง WO ซึ่งก็คือ Question จะสามารถบอกได้ว่า ธุรกิจหรือกิจการของท่านกำลังอยู่ในช่วงกำลังแข่งขัน ธุรกิจของท่านมีจุดอ่อนทำให้คู่แข่งสามารถใช้จุดอ่อนนั้น โจมตีเราได้ แต่ธุรกิจของเรา ยังสามารถเจริญเติบโตต่อไปได้ โดยเราต้องหาโอกาสโดยรอบทั้งทางตรงและทางอ้อม เพื่อช่วยให้ธุรกิจและกิจการของเราสามารถสู้กับคู่แข่งได้ เช่น ปรับปรุงผลิตภัณฑ์ หรือ ผลิตสินค้าตัวใหม่ออกมา เพื่อสร้างจุดเด่นและดึงดูดลูกค้า ทั้งฐานลูกค้าเดิม และ ลูกค้าใหม่ๆให้เข้ามา",
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
            "หากธุรกิจหรือกิจการของท่านอยู่ในช่วงที่ผลิตภัณฑ์มีอัตราการเจริญเติบโตของยอดขายที่น่าเป็นห่วงมากที่สุด และสามารถทำกำไรได้ต่ำ ซึ่งก็คือ Dog  ซึ่งควรแก่การพิจารณาแผนการผลิตโดยเลือกตัดสินใจว่าจะผลิตผลิตภัณฑ์นี้ต่อไปหรือตัดผลิตภัณฑ์นี้ออกจากสายการผลิต พิจารณาปรับปรุงแก้ไขภายในองค์กร พิจารณาเป้าหมายในอนาคต และการแก้ไขปัญหาการเจริญเติบโตของยอดขายให้ดีขึ้น",
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
          <h1 style={{ fontFamily: "bold", color: "#363c54", fontSize: "2em" }}>
            ผลลัพธ์การประเมิน SWOT ธุรกิจผลิต
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
