import React, { Component } from "react"
import Navbar from "../components/navbar"
import Strength from "../components/strength2"
import Weakness from "../components/weakness2"
import Opportunity from "../components/opportunity2"
import Threat from "../components/threat2"
import "../../stylesheets/pages/swotPage.css"
import { ProgressBar } from "react-bootstrap"

export default class swotolcPage2 extends Component {
    constructor(props) {
        super(props)
        // State
        this.state = {
            btnActive: 4,
            style: { fontFamily: 'bold' },
            isStrength: false,
            isWeakness: false,
            isOpportunity: false,
            isThreat: false,
            progressValue: 0,
            result_arr: [],
        }
    }
    
    // Before render.
    componentDidMount = async () => {
        await this.setState({
            isStrength: true,
            progressValue: 25,
            progressColor: 'success'
        })
    }

    // Callback function for retrieve data in childs
    myStrengthCallback = async (dataFromChild) => {
        console.log(dataFromChild)
        await this.setState({
            isStrength: false,
            isWeakness: true,
            progressValue: 50,
            progressColor: 'warning'
        })
        await this.state.result_arr.push(dataFromChild);
    }
    
    myWeaknessCallback = async (dataFromChild) => {
        console.log(dataFromChild)
        await this.setState({
            isWeakness: false,
            isOpportunity: true,
            progressValue: 75,
            progressColor: 'info'
        })
        await this.state.result_arr.push(dataFromChild);
    }

    myOpportunityCallback = async (dataFromChild) => {
        console.log(dataFromChild)
        await this.setState({
            isOpportunity: false,
            isThreat: true,
            progressValue: 100,
            progressColor: 'danger'
        })
        await this.state.result_arr.push(dataFromChild);
    }
    
    myThreatCallback = async (dataFromChild) => {
        console.log(dataFromChild)
        await this.state.result_arr.push(dataFromChild)
        localStorage.setItem('swot-result2', JSON.stringify(this.state.result_arr))
        this.props.history.push('/swot-score2');
        window.scrollTo(0, 0);
    }
    
    // Render all component in this page.
    render() {
        let { btnActive, isStrength, isWeakness, isOpportunity, isThreat, progressValue, progressColor, } = this.state
        return (
            <div>
                <Navbar swot={btnActive} />
                <div className="header"><h1 style={{ fontFamily: "bold" }}>วิเคราะห์ SWOT ธุรกิจบริการ</h1></div>
                <div className="progressBarDiv">
                    <div className="progressBarInfoDiv">
                        <div className="progressBarInfo"><span style={isStrength ? this.state.style : {}}>Strength</span></div>
                        <div className="progressBarInfo"><span style={isWeakness ? this.state.style : {}}>Weakness</span></div>
                        <div className="progressBarInfo"><span style={isOpportunity ? this.state.style : {}}>Opportunity</span></div>
                        <div className="progressBarInfo"><span style={isThreat ? this.state.style : {}}>Threat</span></div>
                    </div>
                    <ProgressBar variant={progressColor} now={progressValue} />
                </div>
                <div className="column-divider">
                    {isStrength && <Strength callbackFromParent={this.myStrengthCallback} swotolc={true}/>}
                    {isWeakness && <Weakness callbackFromParent={this.myWeaknessCallback}/>}
                    {isOpportunity && <Opportunity callbackFromParent={this.myOpportunityCallback}/>}
                    {isThreat && <Threat callbackFromParent={this.myThreatCallback}/>}
                </div>
            </div>
        );
    }
}
