import React, { Component } from "react";
import Navbar from "../components/navbar";
import Strength2 from "../components/strength2";
import Weakness2 from "../components/weakness2";
import Opportunity2 from "../components/opportunity2";
import Threat2 from "../components/threat2";
import "../../stylesheets/pages/swotPage.css";
import { ProgressBar } from "react-bootstrap";
import { withRouter } from 'react-router-dom';

class swotPage2 extends Component {
  constructor(props) {
    super(props);
    // State
    this.state = {
      btnActive: 2,
      style: {
        fontFamily: "bold",
      },
      isStrength2: false,
      isWeakness2: false,
      isOpportunity2: false,
      isThreat2: false,
      progressValue: 0,
      result_arr: [],
    };
  }

  // Before render
  componentDidMount = async () => {
    await this.setState({
      isStrength2: true,
      progressValue: 25,
      progressColor: "success",
    });
  };

  myStrengthCallback2 = async (dataFromChild) => {
    console.log(dataFromChild);
    await this.setState({
      isStrength2: false,
      isWeakness2: true,
      progressValue: 50,
      progressColor: "warning",
    });
    await this.state.result_arr.push(dataFromChild);
  };
  myWeaknessCallback2 = async (dataFromChild) => {
    console.log(dataFromChild);
    await this.setState({
      isWeakness2: false,
      isOpportunity2: true,
      progressValue: 75,
      progressColor: "info",
    });
    await this.state.result_arr.push(dataFromChild);
  };
  myOpportunityCallback2 = async (dataFromChild) => {
    console.log(dataFromChild);
    await this.setState({
      isOpportunity2: false,
      isThreat2: true,
      progressValue: 100,
      progressColor: "danger",
    });
    await this.state.result_arr.push(dataFromChild);
  };
  myThreatCallback2 = async (dataFromChild) => {
    console.log(dataFromChild);
    await this.setState({
      isOpportunity2: false,
      isThreat2: true,
      progressValue: 100,
      progressColor: "danger",
    });
    await this.state.result_arr.push(dataFromChild);
    localStorage.setItem("swot-result2", JSON.stringify(this.state.result_arr));
        this.props.history.push('/swot-score2');
        window.scrollTo(0, 0);
  };

  // Render elements
  render() {
    let { btnActive } = this.state;
    let {
      isStrength2,
      isWeakness2,
      isOpportunity2,
      isThreat2,
      progressValue,
      progressColor,
    } = this.state;
    return (
      <div>
        <Navbar swot={btnActive} />
        <div className="header">
          <h1 style={{ fontFamily: "bold" }}>วิเคราะห์ SWOT ธุรกิจบริการ</h1>
        </div>
        <div className="progressBarDiv">
          <div className="progressBarInfoDiv">
            <div className="progressBarInfo">
              <span style={isStrength2 ? this.state.style : {}}>Strength</span>
            </div>
            <div className="progressBarInfo">
              <span style={isWeakness2 ? this.state.style : {}}>Weakness</span>
            </div>
            <div className="progressBarInfo">
              <span style={isOpportunity2 ? this.state.style : {}}>
                Opportunity
              </span>
            </div>
            <div className="progressBarInfo">
              <span style={isThreat2 ? this.state.style : {}}>Threat</span>
            </div>
          </div>
          <ProgressBar variant={progressColor} now={progressValue} />
        </div>
        <div className="column-divider">
          {isStrength2 && (
            <Strength2 callbackFromParent={this.myStrengthCallback2} />
          )}
          {isWeakness2 && (
            <Weakness2 callbackFromParent={this.myWeaknessCallback2} />
          )}
          {isOpportunity2 && (
            <Opportunity2 callbackFromParent={this.myOpportunityCallback2} />
          )}
          {isThreat2 && <Threat2 callbackFromParent={this.myThreatCallback2} />}
        </div>
      </div>
    );
  }
}

export default withRouter(swotPage2)