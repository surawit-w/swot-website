import React, { Component } from "react";
import Navbar from "../components/navbar";
import HomeInfo from "../components/homeInfo";
import Footer from "../components/footer";
import "../../stylesheets/pages/swotInfoPage.css";

export default class preswotPage extends Component {
  constructor(props) {
    super(props);
    // State
    this.state = {};
  }

  // Before render
  componentDidMount = async () => {};

  // Render elements
  render() {
    return (
      <div>
        <Navbar />
        <div className="linkback">
          <p
            onClick={() => {
              document.location.href = "/swot-info";
            }}
          >
            HOME > SWOT >{" "}
            <span style={{ color: "#f16f20" }}>เลือกประเภทธุรกิจ</span>
          </p>
        </div>
        <div className="whole">
          <div className="swot-infobox">
            <h1>เลือกประเภทของธุรกิจ</h1>

            <button
              className="button"
              onClick={() => (window.location = "/swot-analysis")}
            >
              <span>ธุรกิจผลิต</span>
            </button>

            <button
              className="button"
              onClick={() => (window.location = "/swot-analysis")}
            >
              <span>ธุรกิจบริการ</span>
            </button>

            <button
              className="button"
              onClick={() => (window.location = "/swot-analysis")}
            >
              <span>ธุรกิจการค้า</span>
            </button>
          </div>
        </div>
        <Footer className="footer" />
      </div>
    );
  }
}
