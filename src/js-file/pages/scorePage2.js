import React, { Component } from "react";
import Navbar from "../components/navbar";
import "../../stylesheets/pages/swotPage.css";
import Footer from "../components/footer";
export default class scorePage2 extends Component {
  constructor(props) {
    super(props);
    // State
    this.state = {
      swotQuizResult: JSON.parse(localStorage.getItem("swot-result2")),
      strengthResult: JSON.parse(localStorage.getItem("swot-result2"))[0],
      weaknessResult: JSON.parse(localStorage.getItem("swot-result2"))[1],
      opportunityResult: JSON.parse(localStorage.getItem("swot-result2"))[2],
      threatResult: JSON.parse(localStorage.getItem("swot-result2"))[3],
      strengthScore: [],
      weaknessScore: [],
      opportunityScore: [],
      threatScore: [],
      score: [],
      scoreResult: [],
      finalScore: [],
      btnActive: 2,
    };
  }
  componentDidMount = async () => {
    if (localStorage.getItem("isFinished") === "true") {
      await localStorage.setItem("isFinished", false);
      await this.props.history.push("/swot-info");
    } else {
      if (localStorage.getItem("swotolcBoolean") === "true") {
        await this.setState({ btnActive: 4 });
      }
      let {
        strengthResult,
        weaknessResult,
        opportunityResult,
        threatResult,
        strengthScore,
        weaknessScore,
        opportunityScore,
        threatScore,
      } = this.state;
      console.log(strengthResult);
      console.log(JSON.parse(localStorage.getItem("swot-result2")));
      let swotQuizResult = JSON.parse(localStorage.getItem("swot-result2"));
      strengthResult = await swotQuizResult[0];
      weaknessResult = await swotQuizResult[1];
      opportunityResult = swotQuizResult[2];
      threatResult = swotQuizResult[3];
      console.log(
        strengthResult,
        weaknessResult,
        opportunityResult,
        threatResult
      );

      for (let i = 0; i < swotQuizResult.length; i++) {
        switch (i) {
          case 0:
            for (let j = 0; j < strengthResult.length; j++) {
              await strengthScore.push(
                parseFloat(strengthResult[j].optionScore).toFixed(3)
              );
            }
            break;
          case 1:
            for (let j = 0; j < weaknessResult.length; j++) {
              await weaknessScore.push(
                parseFloat(weaknessResult[j].optionScore).toFixed(3)
              );
            }
            break;
          case 2:
            for (let j = 0; j < opportunityResult.length; j++) {
              await opportunityScore.push(
                parseFloat(opportunityResult[j].optionScore).toFixed(3)
              );
            }
            break;
          case 3:
            for (let j = 0; j < threatResult.length; j++) {
              await threatScore.push(
                parseFloat(threatResult[j].optionScore).toFixed(3)
              );
            }
            break;
          default:
        }
      }
      console.log(strengthScore, weaknessScore, opportunityScore, threatScore);
    }
  };

  renderStrengthResult = (e, i) => (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{ flex: "0 0 70%", fontFamily: "light", marginBottom: "20px" }}
      >
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
        <p>{parseFloat(e.optionScore).toFixed(3)}</p>
      </div>
      <div style={{ flex: "0 0 10%" }}>
        <select
          ref={`strength${i + 1}`}
          id={`strength${i + 1}`}
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

  renderWeaknessResult = (e, i) => (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: "0 0 70%", marginBottom: "20px" }}>
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
        <p>{parseFloat(e.optionScore).toFixed(3)}</p>
      </div>
      <div style={{ flex: "0 0 10%" }}>
        <select
          ref={`weakness${i + 1}`}
          id={`weakness${i + 1}`}
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
  renderOpportunityResult = (e, i) => (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: "0 0 70%", marginBottom: "20px" }}>
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
        <p>{parseFloat(e.optionScore).toFixed(3)}</p>
      </div>
      <div style={{ flex: "0 0 10%" }}>
        <select
          ref={`opportunity${i + 1}`}
          id={`opportunity${i + 1}`}
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
  renderThreatResult = (e, i) => (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div style={{ flex: "0 0 70%", marginBottom: "20px" }}>
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
        <p>{parseFloat(e.optionScore).toFixed(3)}</p>
      </div>
      <div style={{ flex: "0 0 10%" }}>
        <select
          ref={`threat${i + 1}`}
          id={`threat${i + 1}`}
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

  handleSubmit = () => {
    let totalScoreStrength,
      totalScoreWeakness,
      totalScoreOpportunity,
      totalScoreThreat;
    totalScoreStrength = totalScoreWeakness = totalScoreOpportunity = totalScoreThreat = 0.0;
    let {
      strengthResult,
      weaknessResult,
      opportunityResult,
      threatResult,
      strengthScore,
      weaknessScore,
      opportunityScore,
      threatScore,
      finalScore,
    } = this.state;
    console.log(Object.keys(this.refs));
    console.log(Object.keys(this.refs).length);
    for (var i = 0; i < 4; i++) {
      switch (i) {
        case 0:
          for (var j = 0; j < strengthResult.length; j++) {
            let optionBarScore = Object.values(this.refs).splice(
              0,
              strengthResult.length
            );
            console.log(optionBarScore[j].value);
            // console.log(this.optionBarScore)
            totalScoreStrength = (
              parseFloat(totalScoreStrength) +
              parseFloat(optionBarScore[j].value) * parseFloat(strengthScore[j])
            ).toFixed(3);
            // console.log(totalScoreStrength)
          }
          finalScore.push(totalScoreStrength);
          break;
        case 1:
          for (var j = 0; j < weaknessResult.length; j++) {
            // console.log(strengthResult.length, weaknessResult.length);
            let optionBarScore = Object.values(this.refs).splice(
              strengthResult.length,
              weaknessResult.length
            );
            // console.log(optionBarScore);
            // console.log(weaknessScore[j],parseFloat(Object.values(this.refs)[j].value))
            totalScoreWeakness = (
              parseFloat(totalScoreWeakness) +
              parseFloat(optionBarScore[j].value) * parseFloat(weaknessScore[j])
            ).toFixed(3);
            // console.log(totalScoreWeakness)
          }
          finalScore.push(totalScoreWeakness);
          break;
        case 2:
          for (var j = 0; j < opportunityResult.length; j++) {
            // console.log(strengthResult.length + weaknessResult.length, opportunityResult.length);
            let optionBarScore = Object.values(this.refs).splice(
              strengthResult.length + weaknessResult.length,
              opportunityResult.length
            );
            // console.log(optionBarScore);
            totalScoreOpportunity = (
              parseFloat(totalScoreOpportunity) +
              parseFloat(optionBarScore[j].value) *
                parseFloat(opportunityScore[j])
            ).toFixed(3);
            // console.log(totalScoreOpportunity)
          }
          finalScore.push(totalScoreOpportunity);
          break;
        case 3:
          for (var j = 0; j < threatResult.length; j++) {
            let optionBarScore = Object.values(this.refs).splice(
              strengthResult.length +
                weaknessResult.length +
                opportunityResult.length,
              threatResult.length
            );
            // console.log(optionBarScore);
            totalScoreThreat = (
              parseFloat(totalScoreThreat) +
              parseFloat(optionBarScore[j].value) * parseFloat(threatScore[j])
            ).toFixed(3);
            // console.log(totalScoreThreat)
          }
          finalScore.push(totalScoreThreat);
          break;
        default:
      }
    }
    console.log(finalScore);
    localStorage.setItem("finalScore2", JSON.stringify(finalScore));
    if (localStorage.getItem("swotolcBoolean") === "true") {
      console.log("1");
      localStorage.setItem("swot-result-page", 2);
      this.props.history.push("/olc-analysis");
      window.scrollTo(0, 0);
    } else if (localStorage.getItem("swotolcBoolean") === "false") {
      console.log("2");
      this.props.history.push("/swot-result2");
      window.scrollTo(0, 0);
    }
  };

  // Render elements
  render() {
    let {
      strengthResult,
      weaknessResult,
      opportunityResult,
      threatResult,
      btnActive,
    } = this.state;
    console.log(strengthResult);
    return (
      <div>
        <Navbar swot={btnActive} />
        <div style={{ justifyContent: "center" }}>
          <div
            style={{
              margin: "10%",
              backgroundColor: "#363c54",
              border: "solid 2px #363c54",
              boxShadow: "0 0 5px rgb(216, 216, 216)",
              borderRadius: "8px",
              fontFamily: "regular",
              color: "#f6f6f6",
            }}
          >
            <div
              style={{
                margin: "5%",
                justifyContent: "center",
              }}
            >
              <p style={{ color: "#e8b278" }}>
                ให้ท่านกำหนดคะแนนปัจจัยต่อไปนี้ โดยค่าคะแนนอยู่ที่ 1-5
                ตามระดับผลกระทบที่เกิดขึ้นภายในธุรกิจของท่าน
              </p>
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
              <p style={{ color: "#e8b278" }}>Strength(จุดแข็ง)</p>
              {strengthResult.map(this.renderStrengthResult)}

              <p style={{ color: "#e8b278", marginTop: "20px" }}>
                Weakness(จุดอ่อน)
              </p>
              {weaknessResult.map(this.renderWeaknessResult)}

              <p style={{ color: "#e8b278", marginTop: "20px" }}>
                Opportunity(โอกาส)
              </p>
              {opportunityResult.map(this.renderOpportunityResult)}

              <p style={{ color: "#e8b278", marginTop: "20px" }}>
                Threat(อุปสรรค)
              </p>
              {threatResult.map(this.renderThreatResult)}
            </div>
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
        <Footer />
      </div>
    );
  }
}
