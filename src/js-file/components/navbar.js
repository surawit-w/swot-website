import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import logoIcon from "../../images/iconMGT.ico";
import "../../stylesheets/components/navbar.css";
import "../../stylesheets/components/font.css";
import { withRouter } from 'react-router-dom';
import { FaList } from "react-icons/fa";

class navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            btnActive: 0
        }
    }
    
    render() {
        let { btnActive } = this.state
        let { home, swot } = this.props
        return (
            <div className="navbar-container">
                <Container fluid={true}>
                    <Row className="navbar-row">
                        <Col className="logo-col" xs={2}>
                            <div className="jk-icon-container">
                                <img className="jk-icon" src={logoIcon} alt="" onClick={() => { this.props.history.push('/') }}/>
                                <p style={{ fontFamily: "medium", color: "#f6f6f6", marginLeft: "5px", fontSize: "15px", letterSpacing: "2px"}}>
                                    MANAGEMENT<br/>
                                    <p style={{ fontFamily: "exlight", fontSize: "10px", letterSpacing: "0px" }}>Faculty of business administration and accountancy</p>
                                </p>
                            </div>
                        </Col>
                        <Col className="menu-col" xs={8}>
                            <div className="menu-list-div">
                                <ul className="menu-list-container">
                                    <li className="menu-list" onClick={() => document.location.href='https://surawit-w.github.io/swot-website/'} style={ home === 1 && btnActive === 0 ? { color: "#f16f20" } : { color: "#F3B06E" } }> HOME </li>
                                    <li className="menu-list" onClick={() => this.props.history.push('/howto')} style={ home === 2 && btnActive === 0 ? { color: "#f16f20" } : { color: "#F3B06E" } }>HOW TO USE</li>
                                    <li className="menu-list" onClick={() => this.props.history.push('/swot-info')} style={ swot === 2 && btnActive === 0 ? { color: "#f16f20" } : { color: "#F3B06E" } }>SWOT</li>
                                    <li className="menu-list" onClick={() => this.props.history.push('/olc-info')} style={ swot === 3 && btnActive === 0 ? { color: "#f16f20" } : { color: "#F3B06E" } }>OLC</li>
                                    <li className="menu-list" onClick={() => this.props.history.push('/swotolc-info')} style={ swot === 4 && btnActive === 0 ? { color: "#f16f20" } : { color: "#F3B06E" } }>{"SWOT & OLC"}</li>
                                </ul>
                            </div>
                        </Col>
                        <Col className="res-menu-col" xs={2}>
                            <li className="res-menu-list">
                                <div className="dropdown-div">
                                    <div className="res-menu-list-icon-div">
                                        <FaList className="res-menu-list-icon" />
                                        <div className="res-menu-list-dropdown">
                                            <div class="res-menu-list-btn first" id="homeBtn"><a onClick={() => document.location.href='https://surawit-w.github.io/swot-website/'} id="homeLink">หน้าหลัก</a></div>
                                            <div class="res-menu-list-btn" id="categoryBtn"><a onClick={() => this.props.history.push('/howto')} id="homeLink">วิธีการใช้งาน</a></div>
                                            <div class="res-menu-list-btn" id="categoryBtn"><a onClick={() => this.props.history.push('/swot-info')} id="homeLink">SWOT</a></div>
                                            <div class="res-menu-list-btn" id="categoryBtn"><a onClick={() => this.props.history.push('/olc-info')} id="homeLink">OLC</a></div>
                                            <div class="res-menu-list-btn last" id="categoryBtn"><a onClick={() => this.props.history.push('/swotolc-info')} id="homeLink">{"SWOT & OLC"}</a></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default withRouter(navbar)