import React, { Component } from "react";
import Navbar from "../components/navbar";
import "../../stylesheets/pages/swotPage.css"
import { Form, Row, Col, Button } from 'react-bootstrap'

export default class swotPage extends Component {
  constructor(props) {
    super(props);
    // State
    this.state = {};
  }

  // Before render
  componentDidMount = async () => {};

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
 
  // Render elements
  render() {
    return (
      <div>
        <Navbar/>
        <div style={{margin: '60px', border: 'solid 2px', padding: '60px', borderRadius: '20px'}}>
            <h1 style={{fontFamily: 'regular', paddingBottom: '2%'}}>S: Strengths (จุดแข็ง)</h1>
            <div style={{ padding: '16px 20px'}}>
            <Form style={{ fontFamily: 'light'}}>
                <fieldset>
                    <Form.Group as={Row}>
                    <Form.Label as="legend" column sm={2} style={{textAlign: 'center'}}>
                        จุดแข็งของทางร้าน <br/> (เลือกได้มากกว่า 1 ข้อ)
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                        onClick={(event) => this.handleClick(event)}
                        label="คำถามข้อที่ 1"
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

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">ส่งผลลัพธ์</Button>
                    </Col>
                </Form.Group>
                </Form>
            </div>
            
            
        </div>
        <div style={{margin: '60px', border: 'solid 2px', padding: '60px', borderRadius: '20px'}}>
            <h1 style={{fontFamily: 'regular', paddingBottom: '2%'}}>W: Weakness (จุดอ่อน)</h1>
            <div style={{ padding: '16px 20px'}}>
            <Form style={{ fontFamily: 'light'}}>
                <fieldset>
                    <Form.Group as={Row}>
                    <Form.Label as="legend" column sm={2} style={{textAlign: 'center'}}>
                        จุดอ่อนของทางร้าน <br/> (เลือกได้มากกว่า 1 ข้อ)
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                        onClick={(event) => this.handleClick(event)}
                        label="คำถามข้อที่ 1"
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

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">ส่งผลลัพธ์</Button>
                    </Col>
                </Form.Group>
                </Form>
            </div>
            
            
        </div>
        <div style={{margin: '60px', border: 'solid 2px', padding: '60px', borderRadius: '20px'}}>
            <h1 style={{fontFamily: 'regular', paddingBottom: '2%'}}>O: Opportunity (โอกาส)</h1>
            <div style={{ padding: '16px 20px'}}>
            <Form style={{ fontFamily: 'light'}}>
                <fieldset>
                    <Form.Group as={Row}>
                    <Form.Label as="legend" column sm={2} style={{textAlign: 'center'}}>
                        โอกาสของทางร้าน <br/> (เลือกได้มากกว่า 1 ข้อ)
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                        onClick={(event) => this.handleClick(event)}
                        label="คำถามข้อที่ 1"
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

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">ส่งผลลัพธ์</Button>
                    </Col>
                </Form.Group>
                </Form>
            </div>
            
            
            
        </div>
        <div style={{margin: '60px', border: 'solid 2px', padding: '60px', borderRadius: '20px'}}>
            <h1 style={{fontFamily: 'regular', paddingBottom: '2%'}}>T: Threats (อุปสรรค)</h1>
            <div style={{ padding: '16px 20px'}}>
            <Form style={{ fontFamily: 'light'}}>
                <fieldset>
                    <Form.Group as={Row}>
                    <Form.Label as="legend" column sm={2} style={{textAlign: 'center'}}>
                        อุปสรรคของทางร้าน <br/> (เลือกได้มากกว่า 1 ข้อ)
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                        onClick={(event) => this.handleClick(event)}
                        label="คำถามข้อที่ 1"
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

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">ส่งผลลัพธ์</Button>
                    </Col>
                </Form.Group>
                </Form>
            </div>
            
            
        </div>
      </div>
    );
  }
}