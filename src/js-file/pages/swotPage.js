import React, { Component } from "react";
import Navbar from "../components/navbar";
import "../../stylesheets/pages/swotPage.css"
import Strength from '../components/strength'
import Weakness from '../components/weakness'
import Opportunity from '../components/opportunity'
import Threat from '../components/threat'

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
                <Weakness/>
            </div>
            <div className="column-divider">
                <Opportunity/>
                <Threat/>
            </div>
        </div>
    );
  }
}