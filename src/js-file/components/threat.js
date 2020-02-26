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
      left_option_arr: [],
      alreadyCheckText_arr: [],
      type: 'threat'
    }
  }

  // เหลือทำฟังก์ชันเชคว่า กดได้อีกกี่ปุ่มที่บวกไม่เกิน 1 ****
  handleClick = async(button) => {
    console.log(button);
    this.state.left_score_arr = []
    let totalScore = 0
    let checkedArr = this.state.alreadyChecked_arr
    // console.log(checkedArr)
    if (button.target.checked) {

        console.log(this.state.totalScore, this.state.totalScore === 1.00)
        if(this.state.totalScore === 1.00) {
            console.log(true)
        }
      checkedArr.push(`${button.target.id}`)
      switch(button.target.id) {
          case "s-option1":
            totalScore = 0.25
            break
          case 's-option2':
            totalScore = 0.15
            break
          case 's-option3':
            totalScore = 0.10
            break
          case 's-option4':
            totalScore = 0.30
            break
          case 's-option5':
            totalScore = 0.15
            break
          case 's-option6':
            totalScore = 0.20
            break
          case 's-option7':
            totalScore = 0.20
            break
          case 's-option8':
            totalScore = 0.25
            break
          case 's-option9':
            totalScore = 0.15
            break
          default:
        }
    } else if (!button.target.checked){
      let tempUnCheckedArr = [`${button.target.id}`]
      this.setState({
        alreadyChecked_arr: checkedArr.filter(n => !tempUnCheckedArr.includes(n))
      })
      console.log(this.state.alreadyChecked_arr)
      switch(button.target.id) {
        case "s-option1":
          totalScore = -0.25
          break
        case 's-option2':
          totalScore = -0.15
          break
        case 's-option3':
          totalScore = -0.10
          break
        case 's-option4':
          totalScore = -0.30
          break
        case 's-option5':
          totalScore = -0.15
          break
        case 's-option6':
          totalScore = -0.20
          break
        case 's-option7':
          totalScore = -0.20
          break
        case 's-option8':
          totalScore = -0.25
          break
        case 's-option9':
          totalScore = -0.15
          break
        default:
      }
    }

    await this.setState({
      totalScore: (parseFloat(this.state.totalScore) + parseFloat(totalScore)).toFixed(2)
    })

    await this.checkLeft()
    
}

  checkLeft = async() => {
    this.setState({
      left_option_arr: this.state.s_option_arr.filter(n => !this.state.alreadyChecked_arr.includes(n))
    })
  // check ว่าตัวไหนบวกกันแล้วเกิน 1
  for(let i=0; i<this.state.left_option_arr.length;i++) {
    let totalCheck = 0.00
    switch(this.state.left_option_arr[i]) {
      case "s-option1":
        totalCheck = 0.25
        break
      case 's-option2':
        totalCheck = 0.15
        break
      case 's-option3':
        totalCheck = 0.10
        break
      case 's-option4':
        totalCheck = 0.30
        break
      case 's-option5':
        totalCheck = 0.15
        break
      case 's-option6':
        totalCheck = 0.20
        break
      case 's-option7':
        totalCheck = 0.20
        break
      case 's-option8':
        totalCheck = 0.25
        break
      case 's-option9':
        totalCheck = 0.15
        break
      default:
    }
    totalCheck = (parseFloat(this.state.totalScore)+parseFloat(totalCheck)).toFixed(2)
    if(totalCheck > 1.00) {
      switch(this.state.left_option_arr[i]) {
        case "s-option1":
          await this.setState({ option1Disable: true })
          break
        case 's-option2':
          await this.setState({ option2Disable: true })
          break
        case 's-option3':
          await this.setState({ option3Disable: true })
          break
        case 's-option4':
          await this.setState({ option4Disable: true })
          break
        case 's-option5':
          await this.setState({ option5Disable: true })
          break
        case 's-option6':
          await this.setState({ option6Disable: true })
          break
        case 's-option7':
          await this.setState({ option7Disable: true })
          break
        case 's-option8':
          await this.setState({ option8Disable: true })
          break
        case 's-option9':
          await this.setState({ option9Disable: true })
          break
        default:
      }
    } else if (totalCheck <= 1.00) {
      switch(this.state.left_option_arr[i]) {
        case "s-option1":
          await this.setState({ option1Disable: false })
          break
        case 's-option2':
          await this.setState({ option2Disable: false })
          break
        case 's-option3':
          await this.setState({ option3Disable: false })
          break
        case 's-option4':
          await this.setState({ option4Disable: false })
          break
        case 's-option5':
          await this.setState({ option5Disable: false })
          break
        case 's-option6':
          await this.setState({ option6Disable: false })
          break
        case 's-option7':
          await this.setState({ option7Disable: false })
          break
        case 's-option8':
          await this.setState({ option8Disable: false })
          break
        case 's-option9':
          await this.setState({ option9Disable: false })
          break
        default:
      }
    }
  }
}
handleSubmit = () => {
    this.state.alreadyCheckText_arr = []
    if(parseFloat(this.state.totalScore) === parseFloat(1.00)) {
        for(let i = 0; i < this.state.alreadyChecked_arr.length;i++) {
            // console.log(this.state.alreadyCheck_arr)
            switch(this.state.alreadyChecked_arr[i]) {
                case "s-option1":
                    this.state.alreadyCheckText_arr.push({
                        option: `คำถามข้อที่ 1`,
                        score: 0.25
                    })
                  break
                case 's-option2':
                    this.state.alreadyCheckText_arr.push({
                        option: `คำถามข้อที่ 2`,
                        score: 0.15
                    })
                  break
                case 's-option3':
                    this.state.alreadyCheckText_arr.push({
                        option: `คำถามข้อที่ 3`,
                        score: 0.10
                    })
                  break
                case 's-option4':
                    this.state.alreadyCheckText_arr.push({
                        option: `คำถามข้อที่ 4`,
                        score: 0.30
                    })
                  break
                case 's-option5':
                    this.state.alreadyCheckText_arr.push({
                        option: `คำถามข้อที่ 5`,
                        score: 0.15
                    })
                  break
                case 's-option6':
                    this.state.alreadyCheckText_arr.push({
                        option: `คำถามข้อที่ 6`,
                        score: 0.20
                    })
                  break
                case 's-option7':
                    this.state.alreadyCheckText_arr.push({
                        option: `คำถามข้อที่ 7`,
                        score: 0.20
                    })
                  break
                case 's-option8':
                    this.state.alreadyCheckText_arr.push({
                        option: `คำถามข้อที่ 8`,
                        score: 0.25
                    })
                  break
                case 's-option9':
                    this.state.alreadyCheckText_arr.push({
                        option: `คำถามข้อที่ 9`,
                        score: 0.15
                    })
                  break
                default:
              }
        }
        // console.log(true)
        localStorage.setItem('threat_result', JSON.stringify(this.state))
        let details = JSON.parse(localStorage.getItem('threat_result'))
        console.log(details.alreadyCheckText_arr) // ได้ค่ามาละ 5555 
        
        
        document.location.href = '/swot-score'
    }
}

  render() {
    return (
          <div className="wrapper-swot-form threat" style={{  padding: '60px', borderRadius: '20px'}}>
            <h2 style={{fontFamily: 'regular'}}>W: Weakness (จุดอ่อน)</h2>
            <div className="form-wrapper" style={{ padding: '16px 20px'}}>
            <Form style={{ fontFamily: 'light'}}>
                <fieldset>
                    <Form.Group as={Row}>
                    <Form.Label as="legend" style={{fontSize: '18px', fontFamily: 'regularItalic'}}>
                        จุดอ่อนของทางร้าน (เลือกข้อที่ถูกต้องที่สุด)
                    </Form.Label>
                    <Col>
                    <div className="option-checkbox">
                      <label class="check">
                          <input type="checkbox" id="s-option1" disabled={this.state.option1Disable} onClick={(event) => this.handleClick(event)}/>
                          <div class="box" style={this.state.option1Disable === true ? {backgroundColor: '#888'} : {}}/>
                        </label>
                        <p style={this.state.option1Disable === true ? {color: '#888'} : {}}>คำถามข้อที่ 1 (0.25)</p>
                    </div>

                    <div className="option-checkbox">
                      <label class="check">
                          <input type="checkbox" id="s-option2" disabled={this.state.option2Disable} onClick={(event) => this.handleClick(event)}/>
                          <div class="box" style={this.state.option2Disable === true ? {backgroundColor: '#888'} : {}}/>
                        </label>
                        <p style={this.state.option2Disable === true ? {color: '#888'} : {}}>คำถามข้อที่ 2 (0.15)</p>
                    </div>

                    <div className="option-checkbox">
                      <label class="check">
                          <input type="checkbox" id="s-option3" disabled={this.state.option3Disable} onClick={(event) => this.handleClick(event)}/>
                          <div class="box" style={this.state.option3Disable === true ? {backgroundColor: '#888'} : {}}/>
                        </label>
                        <p style={this.state.option3Disable === true ? {color: '#888'} : {}}>คำถามข้อที่ 3 (0.10)</p>
                    </div>

                    <div className="option-checkbox">
                      <label class="check">
                          <input type="checkbox" id="s-option4" disabled={this.state.option4Disable} onClick={(event) => this.handleClick(event)}/>
                          <div class="box" style={this.state.option4Disable === true ? {backgroundColor: '#888'} : {}}/>
                        </label>
                        <p style={this.state.option4Disable === true ? {color: '#888'} : {}}>คำถามข้อที่ 4 (0.30)</p>
                    </div>

                    <div className="option-checkbox">
                      <label class="check">
                          <input type="checkbox" id="s-option5" disabled={this.state.option5Disable} onClick={(event) => this.handleClick(event)}/>
                          <div class="box" style={this.state.option5Disable === true ? {backgroundColor: '#888'} : {}}/>
                        </label>
                        <p style={this.state.option5Disable === true ? {color: '#888'} : {}}>คำถามข้อที่ 5 (0.15)</p>
                    </div>
                    
                    <div className="option-checkbox">
                      <label class="check">
                          <input type="checkbox" id="s-option6" disabled={this.state.option6Disable} onClick={(event) => this.handleClick(event)}/>
                          <div class="box" style={this.state.option6Disable === true ? {backgroundColor: '#888'} : {}}/>
                        </label>
                        <p style={this.state.option6Disable === true ? {color: '#888'} : {}}>คำถามข้อที่ 6 (0.20)</p>
                    </div>

                    <div className="option-checkbox">
                      <label class="check">
                          <input type="checkbox" id="s-option7" disabled={this.state.option7Disable} onClick={(event) => this.handleClick(event)}/>
                          <div class="box" style={this.state.option7Disable === true ? {backgroundColor: '#888'} : {}}/>
                        </label>
                        <p style={this.state.option7Disable === true ? {color: '#888'} : {}}>คำถามข้อที่ 7 (0.20)</p>
                    </div>

                    <div className="option-checkbox">
                      <label class="check">
                          <input type="checkbox" id="s-option8" disabled={this.state.option8Disable} onClick={(event) => this.handleClick(event)}/>
                          <div class="box" style={this.state.option8Disable === true ? {backgroundColor: '#888'} : {}}/>
                        </label>
                        <p style={this.state.option8Disable === true ? {color: '#888'} : {}}>คำถามข้อที่ 8 (0.25)</p>
                    </div>

                    <div className="option-checkbox">
                      <label class="check">
                          <input type="checkbox" id="s-option9" disabled={this.state.option9Disable} onClick={(event) => this.handleClick(event)}/>
                          <div class="box" style={this.state.option9Disable === true ? {backgroundColor: '#888'} : {}}/>
                        </label>
                        <p style={this.state.option9Disable === true ? {color: '#888'} : {}}>คำถามข้อที่ 9 (0.15)</p>
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
