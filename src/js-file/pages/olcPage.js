import React, { Component } from "react";
import Navbar from "../components/navbar";
import Phrase1 from "../components/olcPhrase1";
import Phrase2 from "../components/olcPhrase2";
import Phrase3 from "../components/olcPhrase3";
import Phrase4 from "../components/olcPhrase4";
import Phrase5 from "../components/olcPhrase5";
import "../../stylesheets/pages/swotPage.css";
import Footer from "../components/footer";

export default class olcPage extends Component {
  constructor(props) {
    super(props);
    // State
    this.state = {
      style: {
        fontFamily: "bold",
      },
      isPhrase1: false,
      isPhrase2: false,
      isPhrase3: false,
      isPhrase4: false,
      isPhrase5: false,
      progressValue: 0,
      result_arr: [],
      allTotalScore: [],
      totalResult: [],
      optionResult: [],
      btnActive: 3,
    };
  }

  // Before render
  componentDidMount = async () => {
    if (localStorage.getItem('swotolcBoolean') === 'true') {
      await this.setState({ btnActive: 4 })
    }
    if (localStorage.getItem('isFinished') === 'true') {
      await localStorage.setItem('isFinished', false)
      if(localStorage.getItem('swotolcBoolean') === 'false') {
        this.props.history.push('/olc-info')
      } else {
        this.props.history.push('/pre-swotolc')
      }
    }
    await this.setState({
      isPhrase1: true,
      progressValue: 20,
      progressColor: "success",
    });
  };

  OLCPhrase1Callback = async (dataFromChild, totalScore) => {
    console.log(dataFromChild);
    await this.setState({
      isPhrase1: false,
      isPhrase2: true,
      progressValue: 40,
      progressColor: "warning",
    });
    await this.state.result_arr.push(dataFromChild);
    await this.state.allTotalScore.push({
      phraseScore: "OLC1",
      totalScore: parseFloat(totalScore),
    });
  };

  OLCPhrase2Callback = async (dataFromChild, totalScore) => {
    console.log(dataFromChild);
    await this.setState({
      isPhrase2: false,
      isPhrase3: true,
      progressValue: 60,
      progressColor: "info",
    });
    await this.state.result_arr.push(dataFromChild);
    await this.state.allTotalScore.push({
      phraseScore: "OLC2",
      totalScore: parseFloat(totalScore),
    });
  };

  OLCPhrase3Callback = async (dataFromChild, totalScore) => {
    console.log(dataFromChild);
    await this.setState({
      isPhrase3: false,
      isPhrase4: true,
      progressValue: 80,
      progressColor: "danger",
    });
    await this.state.result_arr.push(dataFromChild);
    await this.state.allTotalScore.push({
      phraseScore: "OLC3",
      totalScore: parseFloat(totalScore),
    });
  };

  OLCPhrase4Callback = async (dataFromChild, totalScore) => {
    console.log(dataFromChild);
    await this.setState({
      isPhrase4: false,
      isPhrase5: true,
      progressValue: 100,
      progressColor: "danger",
    });
    await this.state.result_arr.push(dataFromChild);
    await this.state.allTotalScore.push({
      phraseScore: "OLC4",
      totalScore: parseFloat(totalScore),
    });
  };

  OLCPhrase5Callback = async (dataFromChild, totalScore) => {
    await this.state.result_arr.push(dataFromChild);
    console.log(dataFromChild);
    console.log(this.state.allTotalScore);
    localStorage.setItem("allOLCScore", JSON.stringify(this.state.result_arr));
    let olcScoreData = JSON.parse(localStorage.getItem("allOLCScore"));
    console.log(olcScoreData);
    await this.state.allTotalScore.push({
      phraseScore: "OLC5",
      totalScore: parseFloat(totalScore),
    });
    await this.state.allTotalScore.sort(function (a, b) {
      return Math.abs(b.totalScore) - Math.abs(a.totalScore);
    });
    // await this.state.totalResult.push({phraseScore: this.state.allTotalScore[0].phraseScore, totalScore: this.state.allTotalScore[0].totalScore})
    console.log(this.state.totalResult);
    console.log(this.state.allTotalScore);
    for (let i = 0; i < this.state.allTotalScore.length; i++) {
      if (
        this.state.allTotalScore[0].totalScore ===
        this.state.allTotalScore[i].totalScore
      ) {
        console.log(true);
        console.log(
          this.state.allTotalScore[0].phraseScore,
          this.state.allTotalScore[i].phraseScore
        );
        await this.state.totalResult.push({
          phrase: this.state.allTotalScore[i].phraseScore,
          totalScore: this.state.allTotalScore[i].totalScore,
        });
        console.log(this.state.totalResult);
      }
    }
    for (let i = 0; i < olcScoreData.length; i++) {
      // console.log(olcScoreData)
      for (let j = 0; j < 5; j++) {
        console.log(olcScoreData[i]);
        olcScoreData[i].sort(function (a, b) {
          return Math.abs(b.optionScore) - Math.abs(a.optionScore);
        });
      }
    }
    for (let i = 0; i < this.state.totalResult.length; i++) {
      switch (this.state.totalResult[i].phrase) {
        case "OLC1":
          this.state.optionResult.push({
            phraseScore: "OLC1",
            option: olcScoreData[0],
          });
          break;
        case "OLC2":
          this.state.optionResult.push({
            phraseScore: "OLC2",
            option: olcScoreData[1],
          });
          break;
        case "OLC3":
          this.state.optionResult.push({
            phraseScore: "OLC3",
            option: olcScoreData[2],
          });
          break;
        case "OLC4":
          this.state.optionResult.push({
            phraseScore: "OLC4",
            option: olcScoreData[3],
          });
          break;
        case "OLC5":
          this.state.optionResult.push({
            phraseScore: "OLC5",
            option: olcScoreData[4],
          });
          break;
        default:
          break;
      }
    }
    console.log(this.state.optionResult);
    console.log(this.state.totalResult);
    console.log(localStorage.getItem('swotolcBoolean'))
    if(localStorage.getItem('olcPhrase1_score').length === 0) {
      console.log("KUY")
    }
    if(localStorage.getItem('swotolcBoolean') === 'true') {
      if (this.state.totalResult.length > 1) {
        localStorage.setItem("totalResult",JSON.stringify(this.state.totalResult));
        localStorage.setItem( "optionResult",JSON.stringify(this.state.optionResult));
        this.props.history.push('/olc-score')
        window.scrollTo(0, 0)
      } else if (this.state.totalResult.length === 1) {
        localStorage.setItem("finalScoreOLC", JSON.stringify(this.state.totalResult));
        this.props.history.push('/swotolc-result')
        window.scrollTo(0, 0)
      }
    } else if(localStorage.getItem('swotolcBoolean') === 'false') {
      if (this.state.totalResult.length > 1) {
        localStorage.setItem("totalResult",JSON.stringify(this.state.totalResult));
        localStorage.setItem( "optionResult",JSON.stringify(this.state.optionResult));
        this.props.history.push('/olc-score')
        window.scrollTo(0, 0)
      } else if (this.state.totalResult.length === 1) {
        localStorage.setItem("finalScoreOLC", JSON.stringify(this.state.totalResult));
        this.props.history.push('/olc-result')
        window.scrollTo(0, 0)
      }
    }
  };

  // Render elements
  render() {
    let {
      isPhrase1,
      isPhrase2,
      isPhrase3,
      isPhrase4,
      isPhrase5,
      btnActive,
    } = this.state;
    return (
      <div>
        <Navbar swot={btnActive} />
        {/* <div className="progressBarDiv">
				<div className="progressBarInfoDiv">
					<div className="progressBarInfo"><span style={isPhrase1 ? this.state.style : {}}>Phrase 1</span></div>
					<div className="progressBarInfo"><span style={isPhrase2 ? this.state.style : {}}>Phrase 2</span></div>
					<div className="progressBarInfo"><span style={isPhrase3 ? this.state.style : {}}>Phrase 3</span></div>
					<div className="progressBarInfo"><span style={isPhrase4 ? this.state.style : {}}>Phrase 4</span></div>
					<div className="progressBarInfo"><span style={isPhrase5 ? this.state.style : {}}>Phrase 5</span></div>
        		</div>
            	<ProgressBar variant={progressColor} now={progressValue}/>
        	</div> */}
        <div className="column-divider">
          {isPhrase1 && (
            <Phrase1 callbackFromParent={this.OLCPhrase1Callback} />
          )}
          {isPhrase2 && (
            <Phrase2 callbackFromParent={this.OLCPhrase2Callback} />
          )}
          {isPhrase3 && (
            <Phrase3 callbackFromParent={this.OLCPhrase3Callback} />
          )}
          {isPhrase4 && (
            <Phrase4 callbackFromParent={this.OLCPhrase4Callback} />
          )}
          {isPhrase5 && (
            <Phrase5 callbackFromParent={this.OLCPhrase5Callback} />
          )}
        </div>

        <Footer className="footer" />
      </div>
    );
  }
}
