import React, { Component } from "react";
import Navbar from "../components/navbar";
import Strength from "../components/strength";
import Weakness from "../components/weakness";
import Opportunity from "../components/opportunity";
import Threat from "../components/threat";
import "../../stylesheets/pages/swotPage.css";
import { ProgressBar } from "react-bootstrap";
import Footer from "../components/footer";
import { withRouter } from "react-router-dom";
import "../../stylesheets/pages/swotForm.css";
import Swal from "sweetalert2";

class swotPage extends Component {
  constructor(props) {
    super(props);
    // State
    this.state = {
      btnActive: 2,
      style: {
        fontFamily: "bold",
      },
      isStrength: false,
      isWeakness: false,
      isOpportunity: false,
      isThreat: false,
      progressValue: 0,
      result_arr: [],
    };
  }

  // Before render
  componentDidMount = async () => {
    await this.setState({
      isStrength: true,
      progressValue: 25,
      progressColor: "success",
    });
  };

  myStrengthCallback = async (dataFromChild) => {
    console.log(dataFromChild);
    await this.setState({
      isStrength: false,
      isWeakness: true,
      progressValue: 50,
      progressColor: "warning",
    });
    await this.state.result_arr.push(dataFromChild);
    console.log(dataFromChild);
  };
  myWeaknessCallback = async (dataFromChild) => {
    console.log(dataFromChild);
    await this.setState({
      isWeakness: false,
      isOpportunity: true,
      progressValue: 75,
      progressColor: "info",
    });
    await this.state.result_arr.push(dataFromChild);
  };
  myOpportunityCallback = async (dataFromChild) => {
    console.log(dataFromChild);
    await this.setState({
      isOpportunity: false,
      isThreat: true,
      progressValue: 100,
      progressColor: "danger",
    });
    await this.state.result_arr.push(dataFromChild);
  };
  myThreatCallback = async (dataFromChild) => {
    console.log(dataFromChild);
    await this.setState({
      isOpportunity: false,
      isThreat: true,
      progressValue: 100,
      progressColor: "danger",
    });
    await this.state.result_arr.push(dataFromChild);
    localStorage.setItem("swot-result", JSON.stringify(this.state.result_arr));
    this.props.history.push("/swot-score");
    window.scrollTo(0, 0);
  };

  // Render elements
  render() {
    let { btnActive } = this.state;
    let {
      isStrength,
      isWeakness,
      isOpportunity,
      isThreat,
      progressValue,
      progressColor,
    } = this.state;
    return (
      <div>
        <Navbar swot={btnActive} />
        <div className="header">
          <h1 style={{ fontFamily: "bold" }}>วิเคราะห์ SWOT ธุรกิจผลิต</h1>
        </div>
        <div className="progressBarDiv">
          <div className="progressBarInfoDiv">
            <div className="progressBarInfo">
              <span style={isStrength ? this.state.style : {}}>Strength</span>
            </div>
            <div className="progressBarInfo">
              <span style={isWeakness ? this.state.style : {}}>Weakness</span>
            </div>
            <div className="progressBarInfo">
              <span style={isOpportunity ? this.state.style : {}}>
                Opportunity
              </span>
            </div>
            <div className="progressBarInfo">
              <span style={isThreat ? this.state.style : {}}>Threat</span>
            </div>
          </div>
          <ProgressBar variant={progressColor} now={progressValue} />
        </div>
        <div className="column-divider">
          {isStrength && (
            <Strength callbackFromParent={this.myStrengthCallback} />
          )}
          {isWeakness && (
            <Weakness callbackFromParent={this.myWeaknessCallback} />
          )}
          {isOpportunity && (
            <Opportunity callbackFromParent={this.myOpportunityCallback} />
          )}
          {isThreat && <Threat callbackFromParent={this.myThreatCallback} />}
        </div>
        <Footer className="footer" />
      </div>
    );
  }
}

export default withRouter(swotPage);
