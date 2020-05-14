import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import mainPage from "./js-file/pages/mainPage";
import swotPage from "./js-file/pages/swotPage";
import swotPage2 from "./js-file/pages/swotPage2";
import swotPage3 from "./js-file/pages/swotPage3";
import swotInfoPage from "./js-file/pages/swotInfoPage";
import olcInfoPage from "./js-file/pages/olcInfoPage";
import Weakness from "./js-file/components/weakness";
import Opportunity from "./js-file/pages/opporPage";
import Threat from "./js-file/components/threat";
import scorePage from "./js-file/pages/scorePage";
import scorePage2 from "./js-file/pages/scorePage2";
import resultPage from "./js-file/pages/resultPage";
import resultPage2 from "./js-file/pages/resultPage2";
import preswot from "./js-file/pages/preswotPage";
import olcPage from "./js-file/pages/olcPage";
import olcScore from "./js-file/pages/olcScore";
import howtoPage from "./js-file/pages/howtoPage";
import preswotolcPage from './js-file/pages/preswotolcPage'
import swotolcPage from './js-file/pages/swotolcPage'
import swotolcPage2 from './js-file/pages/swotolcPage2'
import swotolcPage3 from './js-file/pages/swotolcPage3'
// PUBLIC STATIC MAIN CLASS AS ROUTER
export default class route extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={mainPage} />
          <Route exact path="/howto" component={howtoPage} />
          <Route exact path="/swot-analysis" component={swotPage} />
          <Route exact path="/swot-analysis2" component={swotPage2} />
          <Route exact path="/swot-analysis3" component={swotPage3} />
          <Route exact path="/swot-info" component={swotInfoPage} />
          <Route exact path="/olc-info" component={olcInfoPage} />
          <Route exact path="/swot-analysis-weakness" component={Weakness} />
          <Route
            exact
            path="/swot-analysis-opportunity"
            component={Opportunity}
          />
          <Route exact path="/swot-analysis-threat" component={Threat} />
          <Route exact path="/swot-score" component={scorePage} />
          <Route exact path="/swot-score2" component={scorePage2} />
          <Route exact path="/swot-result" component={resultPage} />
          <Route exact path="/swot-result2" component={resultPage2} />
          <Route exact path="/pre-swot" component={preswot} />
          <Route exact path="/olc-analysis" component={olcPage} />
          <Route exact path="/olc-score" component={olcScore} />
          <Route exact path="/pre-swotolc" component={preswotolcPage}/>
          <Route exact path="/swotolc-analysis" component={swotolcPage}/>
          <Route exact path="/swotolc-analysis2" component={swotolcPage2}/>
          <Route exact path="/swotolc-analysis3" component={swotolcPage3}/>

        </Switch>
      </Router>
    );
  }
}
