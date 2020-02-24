import React, { Component } from "react";
import contactPic from "../../images/contact.png";
import teamPic from "../../images/team.png";
import "../../stylesheets/components/footer.css";
import { Form, Row, Col, Button } from 'react-bootstrap'

export default class strength extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalScore: parseFloat(0).toFixed(2),
      alreadyChecked_arr: [],
      quiz_arr: [],
      point_arr: [],
      s_option_arr: ["s-option1","s-option2","s-option3","s-option4","s-option5","s-option6","s-option7","s-option8","s-option9"],
      left_option_arr: [],
      left_score_arr: []
    }
  }

  // เหลือทำฟังก์ชันเชคว่า กดได้อีกกี่ปุ่มที่บวกไม่เกิน 1 ****
  handleClick = async(button) => {
    this.state.left_score_arr = []
    let totalScore = 0
    let checkedArr = this.state.alreadyChecked_arr
    // console.log(checkedArr)
    if (button.target.checked) {
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
      // checkedArr.pop(`${button.target.id}`)
      let tempUnCheckedArr = [`${button.target.id}`]
      this.setState({
        alreadyChecked_arr: checkedArr.filter(n => !tempUnCheckedArr.includes(n))
      })
      console.log(this.state.alreadyChecked_arr)
      // await console.log(this.state.alreadyChecked_arr)
      // await this.setState({
      //   alreadyChecked_arr: checkedArr.filter(n => !tempUnCheckArr.includes(n))
      // }, console.log(this.state.alreadyChecked_arr))
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

    
  // console.log(this.state.s_option_arr.filter(n => !this.state.alreadyChecked_arr.includes(n)))
  
  // console.log(this.state.left_option_arr) // Array ที่เก็บตัวที่ยังไม่ติ้ก
  

    await this.setState({
      totalScore: (parseFloat(this.state.totalScore) + parseFloat(totalScore)).toFixed(2)
    })
    // console.log(this.state.totalScore, this.state.alreadyChecked_arr)

    await this.checkLeft()
    // console.log(this.state.left_option_arr)
    
}

  checkLeft = async() => {
    this.setState({
      left_option_arr: this.state.s_option_arr.filter(n => !this.state.alreadyChecked_arr.includes(n))
    })
    console.log(this.state.alreadyChecked_arr)
    console.log(this.state.left_option_arr)
    var i
  // check ว่าตัวไหนบวกกันแล้วเกิน 1
  for(i=0; i<this.state.left_option_arr.length;i++) {
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
    // console.log(`${this.state.left_option_arr[i]} = ${totalCheck}`)
    await this.state.left_score_arr.push({idOption: this.state.left_option_arr[i], scoreLeft: parseFloat(totalCheck)})
    // console.log(this.state.left_score_arr)
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
    
    // option1 > 1.00 { disable ตัวนั้น }
    // ตัวไหนเกินก็ disable ตัวไหนพอดีก้ไม่ต้องเสร็จซะทีอีเวรรร
  }
}

  render() {
    return (
          <div className="wrapper-swot-form strength" style={{ border: 'solid 2px', padding: '60px', borderRadius: '20px'}}>
            <h2 style={{fontFamily: 'regular'}}>S: Strength (จุดแข็ง)</h2>
            <div className="form-wrapper" style={{ padding: '16px 20px'}}>
            <Form style={{ fontFamily: 'light'}}>
                <fieldset>
                    <Form.Group as={Row}>
                    <Form.Label as="legend" style={{fontSize: '18px', fontFamily: 'regularItalic'}}>
                        จุดแข็งของทางร้าน (เลือกข้อที่ถูกต้องที่สุด)
                    </Form.Label>
                    <Col>
                        <Form.Check
                        onClick={(event) => this.handleClick(event)}
                        label="สวัสดีนะยังสบายดีรึเปล่า ยังได้ยินข่าวคราวตอนที่เพื่อนเธอบอกกล่าว (0.25)"
                        id="s-option1"
                        disabled={this.state.option1Disable}
                        />
                        <Form.Check
                        onClick={(event) => this.handleClick(event)}
                        label="คำถามข้อที่ 2 (0.15)"
                        id="s-option2"
                        disabled={this.state.option2Disable}
                        />
                        <Form.Check
                        onClick={(event) => this.handleClick(event)}
                        label="คำถามข้อที่ 3 (0.10)"
                        id="s-option3"
                        disabled={this.state.option3Disable}
                        />
                        <Form.Check
                        onClick={(event) => this.handleClick(event)}
                        label="คำถามข้อที่ 4 (0.30)"
                        id="s-option4"
                        disabled={this.state.option4Disable}
                        />
                        <Form.Check
                        onClick={(event) => this.handleClick(event)}
                        label="คำถามข้อที่ 5 (0.15)"
                        id="s-option5"
                        disabled={this.state.option5Disable}
                        />
                        <Form.Check
                        onClick={(event) => this.handleClick(event)}
                        label="คำถามข้อที่ 6 (0.20)"
                        id="s-option6"
                        disabled={this.state.option6Disable}
                        />
                        <Form.Check
                        onClick={(event) => this.handleClick(event)}
                        label="คำถามข้อที่ 7 (0.20)"
                        id="s-option7"
                        disabled={this.state.option7Disable}
                        />
                        <Form.Check
                        onClick={(event) => this.handleClick(event)}
                        label="คำถามข้อที่ 8 (0.25)"
                        id="s-option8"
                        disabled={this.state.option8Disable}
                        />
                        <Form.Check
                        onClick={(event) => this.handleClick(event)}
                        label="คำถามข้อที่ 9 (0.15)"
                        id="s-option9"
                        disabled={this.state.option9Disable}
                        />
                    </Col>
                    </Form.Group>
                </fieldset>
                </Form>
                <p style={{textAlign:'end'}}>{`Total = ${this.state.totalScore}`}</p>
            </div>
            
            
        </div>
    );
  }
}
