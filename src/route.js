import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import mainPage from "./js-file/pages/mainPage";
import swotPage from "./js-file/pages/swotPage";
import swotInfoPage from "./js-file/pages/swotInfoPage";
import olcInfoPage from "./js-file/pages/olcInfoPage";

// PUBLIC STATIC MAIN CLASS AS ROUTER
export default class route extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={mainPage} />
          <Route exact path="/swot-analysis" component={swotPage} />
          <Route exact path="/swot-info" component={swotInfoPage} />
          <Route exact path="/olc-info" component={olcInfoPage} />
        </Switch>
      </Router>
    );
  }
}
