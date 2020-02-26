import React, { Component } from "react"
import Navbar from "../components/navbar"
import Opportunity from '../components/opportunity'
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
            <Opportunity/>
        </div>
        </div>
    );
  }
}