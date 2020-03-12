import React, { Component } from "react"
import Navbar from "../components/navbar"
import "../../stylesheets/pages/swotPage.css"

export default class scorePage extends Component {
  constructor(props) {
    super(props);
    // State
    this.state = {
      swotQuizResult: JSON.parse(localStorage.getItem('swot-result')),
      strengthResult: JSON.parse(localStorage.getItem('swot-result'))[0],
      weaknessResult: JSON.parse(localStorage.getItem('swot-result'))[1],
      opportunityResult: JSON.parse(localStorage.getItem('swot-result'))[2],
      threatResult: JSON.parse(localStorage.getItem('swot-result'))[3],
      strengthScore: [],
      weaknessScore: [],
      opportunityScore: [],
      threatScore: [],
      score: [],
      scoreResult: [],
      finalScore: []
    };
  }
  componentDidMount = async() => {
    let { strengthResult, weaknessResult, opportunityResult, threatResult, strengthScore, weaknessScore, opportunityScore, threatScore } = this.state
    console.log(strengthResult)
    console.log(JSON.parse(localStorage.getItem('swot-result')))
    let swotQuizResult = JSON.parse(localStorage.getItem('swot-result'))
    strengthResult = await swotQuizResult[0]
    weaknessResult = await swotQuizResult[1]
    opportunityResult = swotQuizResult[2]
    threatResult = swotQuizResult[3]
    console.log(strengthResult, weaknessResult, opportunityResult, threatResult)

    for(let i = 0; i < swotQuizResult.length; i++ ) {
      switch(i) {
        case 0:
          for(let j = 0;j < strengthResult.length;j++) {
            await strengthScore.push(parseFloat(strengthResult[j].optionScore).toFixed(2))
          }
          break
        case 1:
          for(let j = 0; j < weaknessResult.length; j++) {
            await weaknessScore.push(parseFloat(weaknessResult[j].optionScore).toFixed(2))
          }
          break
        case 2:
          for(let j = 0; j < opportunityResult.length; j++) {
            await opportunityScore.push(parseFloat(opportunityResult[j].optionScore).toFixed(2))
          }
          break
        case 3:
          for(let j = 0; j < threatResult.length; j++) {
            await threatScore.push(parseFloat(threatResult[j].optionScore).toFixed(2))
          }
      }
    }
    console.log(strengthScore, weaknessScore, opportunityScore, threatScore);
  }

  renderStrengthResult = (e, i) => (
    <div style={{display:'flex', flexDirection:'row'}}>

    <div style={{flex:'0 0 80%'}}>
      <p>{e.optionText}</p>
    </div>
    
    <div style={{flex: '0 0 10%'}}>
      <p>{parseFloat(e.optionScore).toFixed(2)}</p>
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
    <p>{e.optionText}</p>
  </div>
  
  <div style={{flex: '0 0 10%'}}>
    <p>{parseFloat(e.optionScore).toFixed(2)}</p>
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
    <p>{e.optionText}</p>
  </div>
  
  <div style={{flex: '0 0 10%'}}>
    <p>{parseFloat(e.optionScore).toFixed(2)}</p>
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
    <p>{e.optionText}</p>
  </div>
  
  <div style={{flex: '0 0 10%'}}>
    <p>{parseFloat(e.optionScore).toFixed(2)}</p>
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
  let totalScoreStrength, totalScoreWeakness, totalScoreOpportunity, totalScoreThreat
  totalScoreStrength = totalScoreWeakness = totalScoreOpportunity = totalScoreThreat = 0.00
  let { strengthResult, weaknessResult, opportunityResult, threatResult, strengthScore, weaknessScore, opportunityScore, threatScore, finalScore} = this.state
  console.log(Object.keys(this.refs))
  console.log(Object.keys(this.refs).length)
  for (var i = 0; i < 4; i++) {
    switch (i) {
      case 0:
        for (var j = 0; j < strengthResult.length; j++) {
          let optionBarScore = (Object.values(this.refs)).splice(0, strengthResult.length)
          console.log(optionBarScore[j].value);
          // console.log(this.optionBarScore)
          totalScoreStrength = (parseFloat(totalScoreStrength) + (parseFloat(optionBarScore[j].value)*parseFloat(strengthScore[j]))).toFixed(2)
          // console.log(totalScoreStrength)
        }
        finalScore.push(totalScoreStrength)
        break
      case 1:
        for (var j = 0; j < weaknessResult.length; j++) {
          // console.log(strengthResult.length, weaknessResult.length);
          let optionBarScore = (Object.values(this.refs)).splice(strengthResult.length, weaknessResult.length)
          // console.log(optionBarScore);
          // console.log(weaknessScore[j],parseFloat(Object.values(this.refs)[j].value))
          totalScoreWeakness = (parseFloat(totalScoreWeakness) + (parseFloat(optionBarScore[j].value)*parseFloat(weaknessScore[j]))).toFixed(2)
          // console.log(totalScoreWeakness)
        }
        finalScore.push(totalScoreWeakness)
        break
      case 2:
        for (var j = 0; j < opportunityResult.length; j++) {
          // console.log(strengthResult.length + weaknessResult.length, opportunityResult.length);
          let optionBarScore = (Object.values(this.refs)).splice(strengthResult.length + weaknessResult.length, opportunityResult.length)
          // console.log(optionBarScore);
          totalScoreOpportunity = (parseFloat(totalScoreOpportunity) + (parseFloat(optionBarScore[j].value)*parseFloat(opportunityScore[j]))).toFixed(2)
          // console.log(totalScoreOpportunity)
        }
        finalScore.push(totalScoreOpportunity)
        break
      case 3:
        for (var j = 0; j < threatResult.length; j++) {
          let optionBarScore = (Object.values(this.refs)).splice(strengthResult.length + weaknessResult.length + opportunityResult.length, threatResult.length)
          // console.log(optionBarScore);
          totalScoreThreat = (parseFloat(totalScoreThreat) + (parseFloat(optionBarScore[j].value)*parseFloat(threatScore[j]))).toFixed(2)
          // console.log(totalScoreThreat)
        }
        finalScore.push(totalScoreThreat)
        break
    }
  }
  console.log(finalScore)
  localStorage.setItem('finalScore', JSON.stringify(finalScore))
  document.location.href = '/swot-result'
}

 
  // Render elements
  render() {
    let { strengthResult, weaknessResult, opportunityResult, threatResult } = this.state
    console.log(strengthResult)
      return (
        <div>
            <Navbar/>
            <div style={{ margin: '60px', backgroundColor: '#0a0a',border: 'solid 2px #000',borderRadius: '8px'}}>
              <div style={{margin: '36px'}}>

              {strengthResult.map(this.renderStrengthResult)}
              </div>
            </div>
            <button onClick={this.handleSubmit}> ส่ง </button>
            
            <div style={{ margin: '60px', backgroundColor: '#0a0a',border: 'solid 2px #000',borderRadius: '8px'}}>
              <div style={{margin: '36px'}}>

              {weaknessResult.map(this.renderWeaknessResult)}
              </div>
            </div>
            <div style={{ margin: '60px', backgroundColor: '#0a0a',border: 'solid 2px #000',borderRadius: '8px'}}>
              <div style={{margin: '36px'}}>

              {opportunityResult.map(this.renderOpportunityResult)}
              </div>
            </div>

            <div style={{ margin: '60px', backgroundColor: '#0a0a',border: 'solid 2px #000',borderRadius: '8px'}}>
              <div style={{margin: '36px'}}>

              {threatResult.map(this.renderThreatResult)}
              </div>
            </div>
        </div>
    );
  }
}