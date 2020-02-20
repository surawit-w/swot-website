import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import kkbsIcon from "../../images/kkbs-icon.png";
import "../../stylesheets/components/navbar.css";
import "../../stylesheets/components/font.css";
import { FaHome, FaThLarge, FaList } from "react-icons/fa";

export default class navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="navbar-container">
        <Container fluid={true}>
          <Row className="navbar-row">
            <Col className="logo-col" xs={2}>
              <div className="jk-icon-container">
                <img
                  className="jk-icon"
                  src={kkbsIcon}
                  onClick={() => {
                    window.location.href = "/";
                  }}
                ></img>
              </div>
            </Col>
            <Col className="menu-col" xs={8}>
              <div className="menu-list-div">
                <ul className="menu-list-container">
                  <li
                    className="menu-list"
                    onClick={() => (window.location.href = "/")}
                  >
                    HOME
                  </li>
                  <li className="menu-list">HOW TO USE</li>
                  <li className="menu-list">SWOT</li>
                  <li className="menu-list">OLC</li>
                  <li className="menu-list">{"SWOT & OLC"}</li>
                </ul>
              </div>
            </Col>
            <Col className="res-menu-col" xs={2}>
              <li className="res-menu-list">
                <div className="res-menu-list-icon-div">
                  <FaList className="res-menu-list-icon" />
                  <div className="res-menu-list-dropdown">
                    <div id="homeBtn">
                      <FaHome className="FaHome-style" />
                      <a href="category/1" id="homeLink">
                        หน้าหลัก
                      </a>
                    </div>
                    <div id="categoryBtn">
                      <FaThLarge className="FaThLarge-style" />
                      <a href="category/1" id="homeLink">
                        หมวดหมู่สินค้า
                      </a>
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
