import React, { Component } from "react";
import contactPic from "../../images/contact.png";
import teamPic from "../../images/team.png";
import "../../stylesheets/components/footer.css";
import { Form, Row, Col, Button } from 'react-bootstrap'
import '../../stylesheets/components/checkbox.scss'

export default class strength extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalScore: parseFloat(0).toFixed(2),
      alreadyChecked_arr: [],
      s_option_arr: ["s-option1","s-option2","s-option3","s-option4","s-option5","s-option6","s-option7","s-option8","s-option9"],
      textOptionArr: ['คำถามข้อที่ 1', 'คำถามข้อที่ 2', 'คำถามข้อที่ 3', 'คำถามข้อที่ 4', 'คำถามข้อที่ 5', 'คำถามข้อที่ 6', 'คำถามข้อที่ 7', 'คำถามข้อที่ 8', 'คำถามข้อที่ 9'],
      option_arr: [],
      score_arr: [0.25, 0.15, 0.10, 0.30, 0.15, 0.20, 0.20, 0.25, 0.15],
      totalScore: 0.00.toFixed(2),
      left_option_arr: [],
      alreadyCheckText_arr: [],
      optionInfoArr: [],
      type: 'strength'
    }
  }

  handleClick = async(button) => {
    this.state.left_score_arr = []
    let checkedArr = this.state.alreadyChecked_arr
    let totalScore = 0.00
    this.state.optionInfoArr = []

    // If checkbox is checked.
    if (button.target.checked) {
      checkedArr.push(`${button.target.id}`) // push already checked button to Array.
      for(var i = 0; i < checkedArr.length; i++) {
        for(var j = 0; j < this.state.s_option_arr.length; j++) {
          let tempCheck = checkedArr[i]
          if(tempCheck === `s-option${j+1}`) {
            await this.state.optionInfoArr.push({
              optionText: this.state.textOptionArr[j],
              optionScore: this.state.score_arr[j]
            })
            totalScore = totalScore + this.state.score_arr[j]
            tempCheck = ''
          }
        }
      }
      console.log(this.state.optionInfoArr)
      await this.setState({totalScore : parseFloat(totalScore).toFixed(2)})
      console.log(this.state.totalScore)

      // If checkbox is unchecked.
    } else if (!button.target.checked) {
      this.state.optionInfoArr = []
      let tempUnCheckedArr = [`${button.target.id}`]
      await this.setState({
        alreadyChecked_arr: checkedArr.filter(n => !tempUnCheckedArr.includes(n))
      })
      // await console.log(this.state.alreadyChecked_arr)
      for(var i = 0; i < this.state.alreadyChecked_arr.length; i++) {
        for(var j = 0; j < this.state.s_option_arr.length; j++) {
          let tempCheck = this.state.alreadyChecked_arr[i]
          // console.log(tempUnCheckedArr[0], `s-option${j+1}`)
          // console.log(this.state.totalScore, this.state.score_arr[j])
          if(tempUnCheckedArr[0] === `s-option${j+1}`) {
            totalScore = this.state.totalScore - this.state.score_arr[j]
          }
          if(tempCheck === `s-option${j+1}`) {
            await this.state.optionInfoArr.push({
              optionText: this.state.textOptionArr[j],
              optionScore: this.state.score_arr[j]
            })
            tempCheck = ''
          }
        }
      }
      console.log(this.state.optionInfoArr)
      await this.setState({totalScore : parseFloat(totalScore).toFixed(2)})
      console.log(this.state.totalScore)
    }
  }

handleSubmit = () => {
  let { totalScore, alreadyChecked_arr, optionInfoArr } = this.state
  for (var i = 0; i < optionInfoArr.length; i++) {
    optionInfoArr[i].optionScore = parseFloat(optionInfoArr[i].optionScore / totalScore).toFixed(2)
  }
        localStorage.setItem('strength_result', JSON.stringify(optionInfoArr))
        let details = JSON.parse(localStorage.getItem('strength_result'))
        console.log(details) // ได้ค่ามาละ 5555 
        
        
        // document.location.href = '/swot-analysis-weakness'
}


  render() {
    return (
          <div className="wrapper-swot-form strength" style={{  padding: '60px', borderRadius: '20px'}}>
            <h2 style={{fontFamily: 'regular'}}>S: Strength (จุดแข็ง)</h2>
            <div className="form-wrapper" style={{ padding: '16px 20px'}}>
            <Form style={{ fontFamily: 'light'}}>
                <fieldset>
                    <Form.Group as={Row}>
                    <Form.Label as="legend" style={{fontSize: '18px', fontFamily: 'regularItalic'}}>
                        จุดแข็งของทางร้าน (เลือกข้อที่ถูกต้องที่สุด)
                    </Form.Label>
                    <Col>
                    <div className="option-checkbox">
                      <label class="check">
                          <input type="checkbox" id="s-option1" onClick={(event) => this.handleClick(event)}/>
                          <div class="box"/>
                        </label>
                        <p>คำถามที่ 1 (0.25)</p>
                    </div>

                    <div className="option-checkbox">
                      <label class="check">
                          <input type="checkbox" id="s-option2" onClick={(event) => this.handleClick(event)}/>
                          <div class="box"/>
                        </label>
                        <p>คำถามข้อที่ 2 (0.15)</p>
                    </div>

                    <div className="option-checkbox">
                      <label class="check">
                          <input type="checkbox" id="s-option3" onClick={(event) => this.handleClick(event)}/>
                          <div class="box"/>
                        </label>
                        <p>คำถามข้อที่ 3 (0.10)</p>
                    </div>

                    <div className="option-checkbox">
                      <label class="check">
                          <input type="checkbox" id="s-option4" onClick={(event) => this.handleClick(event)}/>
                          <div class="box"/>
                        </label>
                        <p>คำถามข้อที่ 4 (0.30)</p>
                    </div>

                    <div className="option-checkbox">
                      <label class="check">
                          <input type="checkbox" id="s-option5" onClick={(event) => this.handleClick(event)}/>
                          <div class="box"/>
                        </label>
                        <p>คำถามข้อที่ 5 (0.15)</p>
                    </div>
                    
                    <div className="option-checkbox">
                      <label class="check">
                          <input type="checkbox" id="s-option6" onClick={(event) => this.handleClick(event)}/>
                          <div class="box"/>
                        </label>
                        <p>คำถามข้อที่ 6 (0.20)</p>
                    </div>

                    <div className="option-checkbox">
                      <label class="check">
                          <input type="checkbox" id="s-option7" onClick={(event) => this.handleClick(event)}/>
                          <div class="box"/>
                        </label>
                        <p>คำถามข้อที่ 7 (0.20)</p>
                    </div>

                    <div className="option-checkbox">
                      <label class="check">
                          <input type="checkbox" id="s-option8" onClick={(event) => this.handleClick(event)}/>
                          <div class="box"/>
                        </label>
                        <p>คำถามข้อที่ 8 (0.25)</p>
                    </div>

                    <div className="option-checkbox">
                      <label class="check">
                          <input type="checkbox" id="s-option9" onClick={(event) => this.handleClick(event)}/>
                          <div class="box"/>
                        </label>
                        <p>คำถามข้อที่ 9 (0.15)</p>
                    </div>

                    </Col>
                    </Form.Group>
                </fieldset>
                </Form>
                <p style={{textAlign:'end'}}>{`Total = ${this.state.totalScore}`}</p>
            </div>
            <button onClick={this.handleSubmit}>
                ถัดไป
            </button>
            
            
            
        </div>
    );
  }
}
