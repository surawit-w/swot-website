import React, { Component } from "react";
import Navbar from "../components/navbar";
import HomeInfo from "../components/homeInfo";
import Footer from "../components/footer";
import "../../stylesheets/pages/mainPage.css";

export default class mainPage extends Component {
  constructor(props) {
    super(props);
    // State
    this.state = {};
  }

  // Before render
  componentDidMount = async () => {};
 
  // Render elements
  render() {
    console.log(this.props);
    
    return (
      <div>
        <Navbar />
        <HomeInfo />
        <Footer />
      </div>
    );
  }
}