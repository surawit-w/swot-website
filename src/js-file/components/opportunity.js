import React, { Component } from "react";
import contactPic from "../../images/contact.png";
import teamPic from "../../images/team.png";
import "../../stylesheets/components/footer.css";
import { Form, Row, Col, Button } from 'react-bootstrap'

export default class opportunity extends Component {

  handleClick = (button) => {

    if (!button.target.checked) {
      switch(button.target.id) {
          case "s-option1":
              console.log("MAIDJA1");
              
            break;
          case 's-option2':
              console.log("MAIDJA2");
            break;
          default:
            // code block
        }
    } else {

      switch(button.target.id) {
          case "s-option1":
              console.log("DJA1");
              
          break;
          case 's-option2':
              console.log("DJA2");
          break;
          default:
          // code block
      }
    }
    
    console.log(button.target.id);
    
}

  render() {
    return (
          <div className="wrapper-swot-form opportunity" style={{ border: 'solid 2px', padding: '60px', borderRadius: '20px'}}>
            <h2 style={{fontFamily: 'regular'}}>O: Opportunity (โอกาส)</h2>
            <div className="form-wrapper" style={{ padding: '16px 20px'}}>
            <Form style={{ fontFamily: 'light'}}>
                <fieldset>
                    <Form.Group as={Row}>
                    <Form.Label as="legend" style={{fontSize: '18px', fontFamily: 'regularItalic'}}>
                        โอกาสของทางร้าน (เลือกข้อที่ถูกต้องที่สุด)
                    </Form.Label>
                    <Col>
                        <Form.Check
                        onClick={(event) => this.handleClick(event)}
                        label="สวัสดีนะยังสบายดีรึเปล่า ยังได้ยินข่าวคราวตอนที่เพื่อนเธอบอกกล่าว"
                        name="formHorizontalRadios"
                        id="s-option1"
                        class="option-style"
                        />
                        <Form.Check
                        onClick={(event) => this.handleClick(event)}
                        label="คำถามข้อที่ 2"
                        name="formHorizontalRadios"
                        id="s-option2"
                        class="option-style"
                        />
                        <Form.Check
                        onClick={(event) => this.handleClick(event)}
                        label="คำถามข้อที่ 3"
                        name="formHorizontalRadios"
                        id="s-option3"
                        class="option-style"
                        />
                        <Form.Check
                        onClick={(event) => this.handleClick(event)}
                        label="คำถามข้อที่ 4"
                        name="formHorizontalRadios"
                        id="s-option4"
                        class="option-style"
                        />
                        <Form.Check
                        onClick={(event) => this.handleClick(event)}
                        label="คำถามข้อที่ 5"
                        name="formHorizontalRadios"
                        id="s-option5"
                        class="option-style"
                        />
                        <Form.Check
                        onClick={(event) => this.handleClick(event)}
                        label="คำถามข้อที่ 6"
                        name="formHorizontalRadios"
                        id="s-option6"
                        class="option-style"
                        />
                        <Form.Check
                        onClick={(event) => this.handleClick(event)}
                        label="คำถามข้อที่ 7"
                        name="formHorizontalRadios"
                        id="s-option7"
                        class="option-style"
                        />
                        <Form.Check
                        onClick={(event) => this.handleClick(event)}
                        label="คำถามข้อที่ 8"
                        name="formHorizontalRadios"
                        id="s-option8"
                        class="option-style"
                        />
                        <Form.Check
                        onClick={(event) => this.handleClick(event)}
                        label="คำถามข้อที่ 9"
                        name="formHorizontalRadios"
                        id="s-option9"
                        class="option-style"
                        />
                    </Col>
                    </Form.Group>
                </fieldset>
                </Form>
            </div>
            
            
        </div>
    );
  }
}
