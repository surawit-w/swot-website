import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import mainPage from "./js-file/pages/mainPage";
import swotPage from "./js-file/pages/swotPage";
import swotInfoPage from "./js-file/pages/swotInfoPage"
import olcInfoPage from "./js-file/pages/olcInfoPage"
import Weakness from './js-file/components/weakness'
import Opportunity from './js-file/pages/opporPage'
import Threat from './js-file/components/threat'
import scorePage from './js-file/pages/scorePage'
import resultPage from './js-file/pages/resultPage'

// PUBLIC STATIC MAIN CLASS AS ROUTER
export default class route extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={mainPage}/>
          <Route exact path="/swot-analysis" component={swotPage}/>
          <Route exact path="/swot-info" component={swotInfoPage}/>
          <Route exact path="/olc-info" component={olcInfoPage}/>
          <Route exact path="/swot-analysis-weakness" component={Weakness}/>
          <Route exact path="/swot-analysis-opportunity" component={Opportunity}/>
          <Route exact path="/swot-analysis-threat" component={Threat}/>
          <Route exact path="/swot-score" component={scorePage}/>
          <Route exact path="/swot-result" component={resultPage}/>
        </Switch>
      </Router>
    );
  }
}
