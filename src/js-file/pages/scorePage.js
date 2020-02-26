import React, { Component } from "react"
import Navbar from "../components/navbar"
import "../../stylesheets/pages/swotPage.css"

export default class scorePage extends Component {
  constructor(props) {
    super(props);
    // State
    this.state = {
      strength_result : [JSON.parse(localStorage.getItem('strength_result'))],
      weakness_result : [JSON.parse(localStorage.getItem('weakness_result'))],
      opportunity_result : [JSON.parse(localStorage.getItem('opportunity_result'))],
      threat_result : [JSON.parse(localStorage.getItem('threat_result'))],
      score: [],
      scoreResult: []
    };
  }

  renderStrengthResult = (e, i) => (
    <div style={{display:'flex', flexDirection:'row'}}>

    <div style={{flex:'0 0 80%'}}>
      <p>{e.option}</p>
    </div>
    
    <div style={{flex: '0 0 10%'}}>
      <p>{parseFloat(e.score).toFixed(2)}</p>
    </div>
    <div style={{flex: '0 0 10%'}}>
      <select ref={`strength${i+1}`} id={`strength${i+1}`}  name="cars" onChange={this.handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
    </div>

)

renderWeaknessResult = (e, i) => (
  <div style={{display:'flex', flexDirection:'row'}}>

  <div style={{flex:'0 0 80%'}}>
    <p>{e.option}</p>
  </div>
  
  <div style={{flex: '0 0 10%'}}>
    <p>{parseFloat(e.score).toFixed(2)}</p>
  </div>
  <div style={{flex: '0 0 10%'}}>
    <select ref={`weakness${i+1}`} id={`weakness${i+1}`} name="cars" onChange={this.handleChange}>{console.log(e)}
      <option value="1" >1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div>
  </div>

)
renderOpportunityResult = (e, i) => (
  <div style={{display:'flex', flexDirection:'row'}}>

  <div style={{flex:'0 0 80%'}}>
    <p>{e.option}</p>
  </div>
  
  <div style={{flex: '0 0 10%'}}>
    <p>{parseFloat(e.score).toFixed(2)}</p>
  </div>
  <div style={{flex: '0 0 10%'}}>
    <select ref={`opportunity${i+1}`} id={`opportunity${i+1}`} name="cars" onChange={this.handleChange}>{console.log(e)}
      <option value="1" >1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div>
  </div>

)
renderThreatResult = (e, i) => (
  <div style={{display:'flex', flexDirection:'row'}}>

  <div style={{flex:'0 0 80%'}}>
    <p>{e.option}</p>
  </div>
  
  <div style={{flex: '0 0 10%'}}>
    <p>{parseFloat(e.score).toFixed(2)}</p>
  </div>
  <div style={{flex: '0 0 10%'}}>
    <select ref={`threat${i+1}`} id={`threat${i+1}`} name="cars" onChange={this.handleChange}>
      <option value="1" >1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div>
  </div>
)

handleSubmit = () => {
  let totalScoreStrength = 0.00
  let totalScoreWeakness = 0.00
  let totalScoreOpportunity = 0.00
  let totalScoreThreat = 0.00
  let strengthScore = this.state.strength_result[0].alreadyCheckText_arr
  let weaknessScore = this.state.weakness_result[0].alreadyCheckText_arr
  let opportunityScore = this.state.opportunity_result[0].alreadyCheckText_arr
  let threatScore = this.state.threat_result[0].alreadyCheckText_arr
  console.log(Object.keys(this.refs).length)
  for (var i = 0; i < 4; i++) {
    switch (i) {
      case 0:
        for (var j = 0; j < strengthScore.length; j++) {
          totalScoreStrength = (parseFloat(totalScoreStrength) + (parseFloat(Object.values(this.refs)[j].value)*parseFloat(this.state.score[j]))).toFixed(2)
        }
        break
      case 1:
        for (var j = 0; j < weaknessScore.length; j++) {
          totalScoreWeakness = (parseFloat(totalScoreWeakness) + (parseFloat(Object.values(this.refs)[j].value)*parseFloat(this.state.score[j]))).toFixed(2)
        }
        break
      case 2:
        for (var j = 0; j < opportunityScore.length; j++) {
          totalScoreOpportunity = (parseFloat(totalScoreOpportunity) + (parseFloat(Object.values(this.refs)[j].value)*parseFloat(this.state.score[j]))).toFixed(2)
        }
        break
      case 3:
        for (var j = 0; j < threatScore.length; j++) {
          totalScoreThreat = (parseFloat(totalScoreThreat) + (parseFloat(Object.values(this.refs)[j].value)*parseFloat(this.state.score[j]))).toFixed(2)
        }
        break

        
    }
  }
  this.state.scoreResult.push({
    strengthScoreTotal: totalScoreStrength,
    weaknessScoreTotal: totalScoreWeakness,
    opportunityScoreTotal: totalScoreOpportunity,
    threatScoreTotal: totalScoreThreat
  })
  localStorage.setItem('totalScore', JSON.stringify(this.state.scoreResult))

  console.log(this.state.scoreResult)
  // document.location.href = "/swot-result"
}

  // Before render
  componentDidMount = async () => {
    let strengthScore = this.state.strength_result[0].alreadyCheckText_arr
    let weaknessScore = this.state.weakness_result[0].alreadyCheckText_arr
    let opportunityScore = this.state.opportunity_result[0].alreadyCheckText_arr
    let threatScore = this.state.threat_result[0].alreadyCheckText_arr
    console.log(strengthScore)
    console.log(weaknessScore)
    console.log(opportunityScore)
    console.log(threatScore)
    for(let i = 0; i < 4; i++ ) {
      switch(i) {
        case 0:
          for(let j = 0;j < strengthScore.length;j++) {
            await this.state.score.push(parseFloat(strengthScore[j].score).toFixed(2))
          }
          break
        case 1:
          for(let j = 0; j < weaknessScore.length; j++) {
            await this.state.score.push(parseFloat(weaknessScore[j].score).toFixed(2))
          }
          break
        case 2:
          for(let j = 0; j < opportunityScore.length; j++) {
            await this.state.score.push(parseFloat(opportunityScore[j].score).toFixed(2))
          }
          break
        case 3:
          for(let j = 0; j < threatScore.length; j++) {
            await this.state.score.push(parseFloat(threatScore[j].score).toFixed(2))
          }
      }
    }
    console.log(this.state.score);
  };
 
  // Render elements
  render() {
    let { strength_result, weakness_result, opportunity_result, threat_result } = this.state
      return (
        <div>
            <Navbar/>
            <div style={{ margin: '60px', backgroundColor: '#0a0a',border: 'solid 2px #000',borderRadius: '8px'}}>
              <div style={{margin: '36px'}}>

              {strength_result[0].alreadyCheckText_arr.map(this.renderStrengthResult)}
              </div>
            </div>
            <button onClick={this.handleSubmit}> ส่ง </button>
            
            <div style={{ margin: '60px', backgroundColor: '#0a0a',border: 'solid 2px #000',borderRadius: '8px'}}>
              <div style={{margin: '36px'}}>

              {weakness_result[0].alreadyCheckText_arr.map(this.renderWeaknessResult)}
              </div>
            </div>
            <div style={{ margin: '60px', backgroundColor: '#0a0a',border: 'solid 2px #000',borderRadius: '8px'}}>
              <div style={{margin: '36px'}}>

              {opportunity_result[0].alreadyCheckText_arr.map(this.renderOpportunityResult)}
              </div>
            </div>

            <div style={{ margin: '60px', backgroundColor: '#0a0a',border: 'solid 2px #000',borderRadius: '8px'}}>
              <div style={{margin: '36px'}}>

              {threat_result[0].alreadyCheckText_arr.map(this.renderThreatResult)}
              </div>
            </div>
        </div>
    );
  }
}