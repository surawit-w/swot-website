import React, { Component } from "react";
import Navbar from "../components/navbar";
import "../../stylesheets/pages/swotPage.css";
import { withRouter } from "react-router-dom";
import Footer from "../components/footer";

class olcScore extends Component {
  constructor(props) {
    super(props);
    // State
    this.state = {
      scoreResult: [],
      finalScore: [],
      OLC1Result: [],
      OLC2Result: [],
      OLC3Result: [],
      OLC4Result: [],
      OLC5Result: [],
      OLC1Score: [],
      OLC2Score: [],
      OLC3Score: [],
      OLC4Score: [],
      OLC5Score: [],
      checkFinal: [],
    };
  }

  // When Render This Page.
  componentDidMount = async () => {
    await this.setState({
      OLC1isTrue: false,
      OLC2isTrue: false,
      OLC3isTrue: false,
      OLC4isTrue: false,
      OLC5isTrue: false,
    });

    let totalResult = JSON.parse(localStorage.getItem("totalResult"));
    let optionResult = JSON.parse(localStorage.getItem("optionResult"));
    console.log(totalResult);
    console.log(optionResult[0].option);
    await this.setState({
      optionResult: optionResult,
    });
    console.log(this.state.optionResult);
    for (let i = 0; i < optionResult.length; i++) {
      for (let j = 0; j < optionResult[i].option.length; j++) {
        console.log(optionResult[i].option[j].optionScore);
      }
    }
    for (let i = 0; i < optionResult.length; i++) {
      switch (optionResult[i].phraseScore) {
        case "OLC1":
          for (let j = 0; j < optionResult[i].option.length; j++) {
            console.log(optionResult[i].option[j].optionScore);
            await this.state.OLC1Score.push(
              parseFloat(optionResult[i].option[j].optionScore).toFixed(2)
            );
          }
          await this.setState({
            OLC1Result: optionResult[i].option,
            OLC1isTrue: true,
          });
          break;
        case "OLC2":
          for (let j = 0; j < optionResult[i].option.length; j++) {
            console.log(optionResult[i].option[j].optionScore);
            await this.state.OLC2Score.push(
              parseFloat(optionResult[i].option[j].optionScore).toFixed(2)
            );
          }
          await this.setState({
            OLC2Result: optionResult[i].option,
            OLC2isTrue: true,
          });
          break;
        case "OLC3":
          for (let j = 0; j < optionResult[i].option.length; j++) {
            console.log(optionResult[i].option[j].optionScore);
            await this.state.OLC3Score.push(
              parseFloat(optionResult[i].option[j].optionScore).toFixed(2)
            );
          }
          await this.setState({
            OLC3Result: optionResult[i].option,
            OLC3isTrue: true,
          });
          break;
        case "OLC4":
          for (let j = 0; j < optionResult[i].option.length; j++) {
            console.log(optionResult[i].option[j].optionScore);
            await this.state.OLC4Score.push(
              parseFloat(optionResult[i].option[j].optionScore).toFixed(2)
            );
          }
          await this.setState({
            OLC4Result: optionResult[i].option,
            OLC4isTrue: true,
          });
          break;
        case "OLC5":
          for (let j = 0; j < optionResult[i].option.length; j++) {
            console.log(optionResult[i].option[j].optionScore);
            await this.state.OLC5Score.push(
              parseFloat(optionResult[i].option[j].optionScore).toFixed(2)
            );
          }
          await this.setState({
            OLC5Result: optionResult[i].option,
            OLC5isTrue: true,
          });
          break;
        default:
          break;
      }
    }
    // console.log(this.state.OLC2Result)
    // console.log(this.state.OLC1isTrue)
    // console.log(this.state.OLC2isTrue)
    // console.log(this.state.OLC3isTrue)
    // console.log(this.state.OLC4isTrue)
    // console.log(this.state.OLC5isTrue)
    // console.log(this.state.OLC1Score)
    // console.log(this.state.OLC2Score)
    // console.log(this.state.OLC3Score)
    // console.log(this.state.OLC4Score)
    // console.log(this.state.OLC5Score)
  };

  renderPhrase1Result = (e, i) => (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: "0 0 80%" }}>
        <p>{e.optionText}</p>
      </div>
      <div
        style={{
          flex: "0 0 10%",
          color: "#e8b278",
          opacity: "0.5",
          marginRight: "5%",
        }}
      >
        <p>{parseFloat(e.optionScore).toFixed(2)}</p>
      </div>
      <div style={{ flex: "0 0 10%" }}>
        <select
          ref={`olc1${i + 1}`}
          id={`olc1${i + 1}`}
          name="cars"
          onChange={this.handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
  );

  renderPhrase2Result = (e, i) => (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: "0 0 80%" }}>
        <p>{e.optionText}</p>
      </div>
      <div
        style={{
          flex: "0 0 10%",
          color: "#e8b278",
          opacity: "0.5",
          marginRight: "5%",
        }}
      >
        <p>{parseFloat(e.optionScore).toFixed(2)}</p>
      </div>
      <div style={{ flex: "0 0 10%" }}>
        <select
          ref={`olc2${i + 1}`}
          id={`olc2${i + 1}`}
          name="cars"
          onChange={this.handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
  );

  renderPhrase3Result = (e, i) => (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: "0 0 80%" }}>
        <p>{e.optionText}</p>
        <br />
      </div>
      <div
        style={{
          flex: "0 0 10%",
          color: "#e8b278",
          opacity: "0.5",
          marginRight: "5%",
        }}
      >
        <p>{parseFloat(e.optionScore).toFixed(2)}</p>
      </div>
      <div style={{ flex: "0 0 10%" }}>
        <select
          ref={`olc3${i + 1}`}
          id={`olc3${i + 1}`}
          name="cars"
          onChange={this.handleChange}
        >
          {console.log(e)}
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
  );

  renderPhrase4Result = (e, i) => (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: "0 0 80%" }}>
        <p>{e.optionText}</p>
      </div>
      <div
        style={{
          flex: "0 0 10%",
          color: "#e8b278",
          opacity: "0.5",
          marginRight: "5%",
        }}
      >
        <p>{parseFloat(e.optionScore).toFixed(2)}</p>
      </div>
      <div style={{ flex: "0 0 10%" }}>
        <select
          ref={`olc4${i + 1}`}
          id={`olc4${i + 1}`}
          name="cars"
          onChange={this.handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
  );

  renderPhrase5Result = (e, i) => (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: "0 0 80%" }}>
        <p>{e.optionText}</p>
      </div>
      <div
        style={{
          flex: "0 0 10%",
          color: "#e8b278",
          opacity: "0.5",
          marginRight: "5%",
        }}
      >
        <p>{parseFloat(e.optionScore).toFixed(2)}</p>
      </div>
      <div style={{ flex: "0 0 10%" }}>
        <select
          ref={`olc5${i + 1}`}
          id={`olc5${i + 1}`}
          name="cars"
          onChange={this.handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
  );

  handleSubmit = async () => {
    let totalScorePhrase1,
      totalScorePhrase2,
      totalScorePhrase3,
      totalScorePhrase4,
      totalScorePhrase5;
    totalScorePhrase1 = totalScorePhrase2 = totalScorePhrase3 = totalScorePhrase4 = totalScorePhrase5 = 0.0;
    let {
      OLC1Result,
      OLC2Result,
      OLC3Result,
      OLC4Result,
      OLC5Result,
      OLC1Score,
      OLC2Score,
      OLC3Score,
      OLC4Score,
      OLC5Score,
      finalScore,
      firstSubmit,
    } = this.state;
    let OLC1isTrue2, OLC2isTrue2, OLC3isTrue2, OLC4isTrue2, OLC5isTrue2;
    OLC1isTrue2 = OLC2isTrue2 = OLC3isTrue2 = OLC4isTrue2 = OLC5isTrue2 = false;
    let OLC1Result2, OLC2Result2, OLC3Result2, OLC4Result2, OLC5Result2;
    OLC1Result2 = OLC2Result2 = OLC3Result2 = OLC4Result2 = OLC5Result2 = [];

    await this.setState({ checkFinal: [] });
    console.log(Object.keys(this.refs));
    console.log(Object.keys(this.refs).length);
    let optionResult = JSON.parse(localStorage.getItem("optionResult"));
    console.log(optionResult);
    for (var i = 0; i < 5; i++) {
      var j;
      switch (i) {
        case 0:
          for (j = 0; j < OLC1Result.length; j++) {
            let optionBarScore = Object.values(this.refs).splice(
              0,
              OLC1Result.length
            );
            console.log(optionBarScore);
            console.log(optionBarScore[j].value);
            // console.log(this.optionBarScore)
            totalScorePhrase1 = (
              parseFloat(totalScorePhrase1) +
              parseFloat(optionBarScore[j].value) * parseFloat(OLC1Score[j])
            ).toFixed(2);
            console.log(totalScorePhrase1);
          }
          finalScore.push({ phrase: "OLC1", totalScore: totalScorePhrase1 });
          break;
        case 1:
          for (j = 0; j < OLC2Result.length; j++) {
            // console.log(strengthResult.length, weaknessResult.length);
            let optionBarScore = Object.values(this.refs).splice(
              OLC1Result.length,
              OLC2Result.length
            );
            console.log(optionBarScore[j]);
            // console.log(weaknessScore[j],parseFloat(Object.values(this.refs)[j].value))
            totalScorePhrase2 = (
              parseFloat(totalScorePhrase2) +
              parseFloat(optionBarScore[j].value) * parseFloat(OLC2Score[j])
            ).toFixed(2);
            console.log(totalScorePhrase2);
          }
          finalScore.push({ phrase: "OLC2", totalScore: totalScorePhrase2 });
          break;
        case 2:
          for (j = 0; j < OLC3Result.length; j++) {
            // console.log(strengthResult.length + weaknessResult.length, opportunityResult.length);
            let optionBarScore = Object.values(this.refs).splice(
              OLC1Result.length + OLC2Result.length,
              OLC3Result.length
            );
            console.log(optionBarScore);
            totalScorePhrase3 = (
              parseFloat(totalScorePhrase3) +
              parseFloat(optionBarScore[j].value) * parseFloat(OLC3Score[j])
            ).toFixed(2);
            // console.log(totalScoreOpportunity)
          }
          finalScore.push({ phrase: "OLC3", totalScore: totalScorePhrase3 });
          break;
        case 3:
          for (j = 0; j < OLC4Result.length; j++) {
            let optionBarScore = Object.values(this.refs).splice(
              OLC1Result.length + OLC2Result.length + OLC3Result.length,
              OLC4Result.length
            );
            console.log(optionBarScore);
            totalScorePhrase4 = (
              parseFloat(totalScorePhrase4) +
              parseFloat(optionBarScore[j].value) * parseFloat(OLC4Score[j])
            ).toFixed(2);
            // console.log(totalScoreThreat)
          }
          finalScore.push({ phrase: "OLC4", totalScore: totalScorePhrase4 });
          break;
        case 4:
          for (j = 0; j < OLC5Result.length; j++) {
            console.log(Object.values(this.refs));
            let optionBarScore = Object.values(this.refs).splice(
              OLC1Result.length +
                OLC2Result.length +
                OLC3Result.length +
                OLC4Result.length,
              OLC5Result.length
            );
            console.log(optionBarScore);
            totalScorePhrase5 = (
              parseFloat(totalScorePhrase5) +
              parseFloat(optionBarScore[j].value) * parseFloat(OLC5Score[j])
            ).toFixed(2);
            console.log(totalScorePhrase5);
          }
          finalScore.push({ phrase: "OLC5", totalScore: totalScorePhrase5 });
          break;
        default:
      }
    }
    finalScore.sort(function (a, b) {
      return Math.abs(b.totalScore) - Math.abs(a.totalScore);
    });
    for (let i = 0; i < finalScore.length; i++) {
      if (finalScore[0].totalScore === finalScore[i].totalScore) {
        // console.log(finalScore[i].phrase, true)
        // console.log(finalScore[i].phrase === "OLC1")
        switch (finalScore[i].phrase) {
          case "OLC1":
            console.log("OLC1");
            OLC1isTrue2 = true;
            OLC1Result2 = OLC1Result;
            await this.state.checkFinal.push(true);
            await this.setState({
              OLC1Result,
            });
            console.log(OLC1isTrue2);
            break;
          case "OLC2":
            console.log("OLC2");
            OLC2isTrue2 = true;
            OLC2Result2 = OLC2Result;
            await this.state.checkFinal.push(true);
            console.log(OLC2isTrue2);
            break;
          case "OLC3":
            console.log("OLC3");
            OLC3isTrue2 = true;
            OLC3Result2 = OLC3Result;
            await this.state.checkFinal.push(true);
            console.log(OLC3isTrue2);
            break;
          case "OLC4":
            console.log("OLC4");
            OLC4isTrue2 = true;
            OLC4Result2 = OLC4Result;
            await this.state.checkFinal.push(true);
            console.log(OLC4isTrue2);
            break;
          case "OLC5":
            console.log("OLC5");
            OLC5isTrue2 = true;
            OLC5Result2 = OLC5Result;
            await this.state.checkFinal.push(true);
            console.log(OLC5isTrue2);
            break;
          default:
            break;
        }
      }
    }
    if (this.state.checkFinal.length === 1) {
      console.log(finalScore);
      localStorage.setItem("finalScoreOLC", JSON.stringify(finalScore));
      if (localStorage.getItem("swotolcBoolean") === "true") {
        console.log("1");
        await localStorage.setItem("swotolcBoolean", false);
        this.props.history.push("/swotolc-result");
        window.scrollTo(0, 0);
      } else if (localStorage.getItem("swotolcBoolean") === "false") {
        console.log("2");
        this.props.history.push("/olc-result");
        window.scroll(0, 0);
      }
    } else if (this.state.checkFinal.length > 1) {
      await this.setState({
        OLC1isTrue: OLC1isTrue2,
        OLC1Result: OLC1Result2,
        OLC2isTrue: OLC2isTrue2,
        OLC2Result: OLC2Result2,
        OLC3isTrue: OLC3isTrue2,
        OLC3Result: OLC3Result2,
        OLC4isTrue: OLC4isTrue2,
        OLC4Result: OLC4Result2,
        OLC5isTrue: OLC5isTrue2,
        OLC5Result: OLC5Result2,
      });
    }
    console.log(this.state);

    console.log(
      OLC1isTrue2,
      OLC2isTrue2,
      OLC3isTrue2,
      OLC4isTrue2,
      OLC5isTrue2
    );
    console.log(OLC1Result2);
    console.log(OLC2Result2);
    console.log(OLC3Result2);
    console.log(OLC4Result2);
    console.log(OLC5Result2);
    console.log(this.state.checkFinal);
    console.log(finalScore);
    localStorage.setItem("finalScoreOLC", JSON.stringify(finalScore));
    await this.setState({
      finalScore: [],
    });
  };

  // Render elements
  render() {
    console.log(Object.values(this.refs));
    return (
      <div>
        <Navbar />
        <div
          className="wrapper-swot-form weakness"
          style={{
            padding: "60px",
            borderRadius: "20px",
            color: "#f6f6f6",
            fontFamily: "light",
            fontSize: "1em",
          }}
        >
          <p style={{ color: "#e8b278" }}>
            ให้ท่านกำหนดคะแนนปัจจัยต่อไปนี้ โดยค่าคะแนนอยู่ที่ 1-5
            ตามระดับผลกระทบที่เกิดขึ้นภายในธุรกิจของท่าน
            <p style={{ color: "#e8b278" }}>
              การกำหนดค่าคะแนนให้ 1 – 5 โดย
              <br />
              &emsp;1 หมายถึง &emsp;น้อยมาก
              <br />
              &emsp;2 หมายถึง &emsp;น้อย
              <br />
              &emsp;3 หมายถึง &emsp;ปานกลาง
              <br />
              &emsp;4 หมายถึง &emsp;มาก
              <br />
              &emsp;5 หมายถึง &emsp;มากที่สุด
            </p>
            <br />
          </p>
          {this.state.OLC1isTrue && (
            <div>
              <div style={{ margin: "36px" }}>
                {this.state.OLC1Result.map(this.renderPhrase1Result)}
                <br />
              </div>
            </div>
          )}{" "}
          {this.state.OLC2isTrue && (
            <div>
              <div style={{ margin: "36px" }}>
                {this.state.OLC2Result.map(this.renderPhrase2Result)}
                <br />
              </div>
            </div>
          )}{" "}
          {this.state.OLC3isTrue && (
            <div>
              <div style={{ margin: "36px" }}>
                {this.state.OLC3Result.map(this.renderPhrase3Result)}
                <br />
              </div>
            </div>
          )}{" "}
          {this.state.OLC4isTrue && (
            <div>
              <div style={{ margin: "36px" }}>
                {this.state.OLC4Result.map(this.renderPhrase4Result)}
                <br />
              </div>
            </div>
          )}{" "}
          {this.state.OLC5isTrue && (
            <div>
              <div style={{ margin: "36px" }}>
                {this.state.OLC5Result.map(this.renderPhrase5Result)}
                <br />
              </div>
            </div>
          )}
          <div id="buttonNextCenter">
            <button
              onClick={this.handleSubmit}
              id="buttonNext"
              style={{ marginBottom: "5%" }}
            >
              ส่งแบบประเมิน
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(olcScore);
