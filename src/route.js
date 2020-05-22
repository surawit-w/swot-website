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
import preswotolcPage from "./js-file/pages/preswotolcPage";
import swotolcPage from "./js-file/pages/swotolcPage";
import swotolcPage2 from "./js-file/pages/swotolcPage2";
import swotolcPage3 from "./js-file/pages/swotolcPage3";
import scorePage3 from './js-file/pages/scorePage3';
import resultPage3 from './js-file/pages/resultPage3';
import olcResult from './js-file/pages/olcResult'
import swotolcResult from './js-file/pages/swotolcResult';
import swotolcInfo from './js-file/pages/swotolcInfo'
// PUBLIC STATIC MAIN CLASS AS ROUTER
export default class route extends Component {
  render() {
    console.log(process.env.PUBLIC_URL + "/howto");
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={mainPage} />
        <Route path={"/howto"} component={howtoPage} />
        <Route path="/swot-analysis" component={swotPage} />
        <Route path="/swot-analysis2" component={swotPage2} />
        <Route path="/swot-analysis3" component={swotPage3} />
        <Route path="/swot-info" component={swotInfoPage} />
        <Route path="/olc-info" component={olcInfoPage} />
        <Route path="/swot-analysis-weakness" component={Weakness} />
        <Route path="/swot-analysis-opportunity" component={Opportunity} />
        <Route path="/swot-analysis-threat" component={Threat} />
        <Route path="/swot-score" component={scorePage} />
        <Route path="/swot-score2" component={scorePage2} />
        <Route path="/swot-result" component={resultPage} />
        <Route path="/swot-result2" component={resultPage2} />
        <Route path="/pre-swot" component={preswot} />
        <Route path="/olc-analysis" component={olcPage} />
        <Route path="/olc-score" component={olcScore} />
        <Route path="/pre-swotolc" component={preswotolcPage} />
        <Route path="/swotolc-analysis" component={swotolcPage} />
        <Route path="/swotolc-analysis2" component={swotolcPage2} />
        <Route path="/swotolc-analysis3" component={swotolcPage3} />
        <Route path="/swot-result3" component={resultPage3} />
        <Route path="/swot-score3" component={scorePage3} />
        <Route path="/olc-result" component={olcResult} />
        <Route path="/swotolc-result" component={swotolcResult} />
        <Route path="/swotolc-info" component={swotolcInfo} />

      </Router>
    );
  }
}
