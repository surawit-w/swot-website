import React, { Component } from "react";
import Navbar from "../components/navbar";
import Threat2 from "../components/threat2";
import "../../stylesheets/pages/swotPage.css";

export default class swotPage extends Component {
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
        <div className="column-divider">
          <Threat2 />
        </div>
      </div>
    );
  }
}
