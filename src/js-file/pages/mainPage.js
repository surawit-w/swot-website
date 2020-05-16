import React, { Component } from "react";
import Navbar from "../components/navbar";
import HomeInfo from "../components/homeInfo";
import Footer from "../components/footer";
import "../../stylesheets/pages/mainPage.css";

export default class mainPage extends Component {
  constructor(props) {
    super(props);
    // State
    this.state = {
      btnActive: 1,
    };
  }

  // Before render
  componentDidMount = async () => {
    localStorage.clear();
  };

  // Render elements
  render() {
    let { btnActive } = this.state;
    console.log(this.props);

    return (
      <div>
        <Navbar home={btnActive} />

        <HomeInfo />

        <Footer className="footer" />
      </div>
    );
  }
}
