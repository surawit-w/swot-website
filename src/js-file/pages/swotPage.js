import React, { Component } from "react";
import Navbar from "../components/navbar";
import Strength from '../components/strength'
import "../../stylesheets/pages/swotPage.css"

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
        <Navbar/>
        <div className="column-divider">
            <Strength/>
        </div>
        </div>
    );
  }
}