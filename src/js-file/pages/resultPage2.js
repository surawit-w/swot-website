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
    let details = JSON.parse(localStorage.getItem("finalScore2"));
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
            "หากธุรกิจหรือกิจการของท่านอยู่ในช่วง SO หรือช่วง Star จะมาสามารถบ่งบอกได้ว่า ธุรกิจหรือกิจการของท่านมีอัตราการเจริญเติบโตของยอดขายสูง ครองส่วนแบ่งของตลาดสูง ควรใช้กลยุทธ์ส่งเสริมการลงทุนใหม่ โดยทำการส่งเสริมการตลาดเพื่อรักษาส่วนแบ่งทางการตลาดของธุรกิจหรือกิจการ และต่อสู้กับคู่แข่งขันที่จะเข้ามาแข่งขัน เช่น มีการทำการตลาดกับการบริการของธุรกิจหรือกิจการที่มีอยู่  เป็นต้น กิจการควรใช้โอกาสนี้ในการขยายฐานลูกค้า โดยทำการตลาดให้ธุรกิจหรือแบรนด์เป็นที่รู้จักมากขึ้น มีการขยายกำลังคนและมีกำลังที่จะก้าวไปข้างหน้าด้วยการขยายฐานลูกค้า มีโปรโมชั่นหรือบริการใหม่ๆออกสู่ตลาด หรือหากต้องการขยายขนาดธุรกิจสามารถทำได้ในช่วงนี้ ยกตัวอย่างเช่น การอบรม ควบคุมพนักงานให้มีประสิทธิภาพในการทำบริการลูกค้าให้เท่าเทียมกันทุกสาขา  การควบคุมประสิทธิภาพของวัสดุ อุปกรณ์ พนักงาน รวมไปถึงความสะอาดให้มีมาตรฐานที่ดีเท่ากันทุกสาขา ซึ่งส่วนนี้จะสามารถสร้างภาพลักษณ์ที่ดี รวมถึงเป็นที่พอใจของลูกค้าให้กับธุรกิจหรือกิจการได้เป็นอย่างมาก",
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
            "หากธุรกิจหรือกิจการของท่านอยู่ในช่วง ST หรือ cash cow จะสามารถบ่งบอกได้ว่า ธุรกิจหรือกิจการของท่านมีอัตราการเจริญเติบโตของยอดขายต่ำ แต่ส่วนครองตลาดสูง โดยที่มีสาเหตุมาจากอัตราการเจริญเติบโตของยอดขายลดลง เพราะธุรกิจนี้เข้าสู่ช่วงเจริญเติบโตเต็มที่หรือจุดอิ่มตัว ดังนั้นควรใช้กลยุทธ์ในการเรียกลูกค้าเพิ่มมากขึ้นโดย ปรับปรุงหรือปรับเปลี่ยนการให้บริการแบบเดิม ให้มีความแปลกใหม่หรือแตกต่างจากเดิม การจัดทำโปรโมชั่นเพื่อเพิ่มยอดขายให้แก่ธุรกิจการให้ความใส่ใจในการบริการลูกค้าเพิ่มมากขึ้น เพื่อสร้างความประทับใจให้แก่ลูกค้าอยู่เรื่อย ๆ ไม่ให้ธุรกิจมียอดขายลดลง",
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
            "หากธุรกิจหรือกิจการของท่านอยู่ในช่วง WO ซึ่งก็คือ Question Mark จะสามารถบ่งบอกได้ว่าธุรกิจหรือกิจการของท่านเป็นธุรกิจที่มีอัตราการเติบโตของตลาดสูง แต่มีส่วนแบ่งของตลาดต่ำ โดยธุรกิจหรือกิจการมักจะยังมีกำไรน้อยอยู่ ไม่ได้สร้างรายได้ที่มากมายให้กับธุรกิจหรือกิจการ แต่ยังคงเห็นการให้บริการอย่างต่อเนื่อง ซึ่งต่อไปอาจจะกลายเป็น Stars (รุ่ง) ก็ได้ หรือจะตกกลายเป็น Dogs (ร่วง) ก็ได้เช่นกัน ดังนั้นธุรกิจหรือกิจการของท่านควรใช้กลยุทธ์คือการทำการตลาดใหม่ การประชาสัมพันธ์ให้กับบริการรูปแบบใหม่หรือโปรโมชั่นในการให้บริการ เอาใจใส่ในความต้องการของผู้ใช้บริการ ว่าในปัจจุบันผู้ใช้บริการต้องการอะไรแบบไหน เช่น มีการเพิ่ม wifi ฟรี ให้กับผู้มาใช้บริการ เนื่องจากในยุคปัจจุบันผู้คนล้วนติดโทรศัพท์มือถือ ติด Socail Media เป็นจำนวนมาก ซึ่งส่วนนี้อาจจะช่วยเพิ่มความพึงพอใจให้กับผู้มาใช้บริการ ลดความเบื่อหน่ายเมื่อนั่งรอรับบริการเป็นเวลานานได้ รวมไปถึงมีการทำการตลาดที่น่าสนใจ สร้าง content ที่ดึงดูดให้ลูกค้ามาใช้บริการ มีการจัดโปรโมชั่นที่หลากหลาย หรือใช้เหตุการณ์ที่เป็นกระแส ณ ตอนนั้นเข้ามาจัดโปรโมชั่น เช่น ร้านบริการทาเล็บสีเจล จัดโปรโมชั่นลดประชดโควิดจากราคา 199 บาท หรือเพียง 150 บาท (หมดเขตสิ้นเดือน ก.ค.) เป็นต้น สิ่งนี้สามารถช่วยดึงดูดให้ลูกค้ามาใช้บริการได้เพิ่มขึ้น มีโอกาสที่ธุรกิจหรือกิจการของท่านจะสามารถเติบโตขึ้นได้ เพิ่มยอดขายและกำไรได้มากขึ้น",
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
            "หากธุรกิจของท่านอยู่ในช่วง WT หรือ ช่วงDogs จะสามารถบ่งบอกได้ว่า ธุรกิจหรือกิจการของท่านมีอัตราการเจริญเติบโตของยอดขายต่ำ และส่วนครองตลาดต่ำ ไม่มีการเจริญเติบโตของยอดขายหรือการบริการ ต้องแก้ไขโดยหาจุดบกพร่องของธุรกิจและหาแนวทางในการแก้ไข เช่น การบริการเป็นอย่างไร หากการบริการนั้นทำให้ธุรกิจมีค่าใช้จ่ายมากกว่ากำไร ควรพิจารณาว่าควรปรับเปลี่ยนการบริการอย่างไรเพื่อลดค่าใช้จ่ายลง หรือหากมีสินค้าในธุรกิจที่มียอดขายต่ำควรพิจารณาว่าควรนำสินค้ามาจำหน่ายต่อหรือตัดออกจากธุรกิจ",
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
            ผลลัพธ์การประเมิน SWOT ธุรกิจบริการ
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
            ผลลัพธ์การประเมิน SWOT ธุรกิจบริการ
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
