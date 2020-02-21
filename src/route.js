import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import mainPage from './js-file/pages/mainPage'
import swotPage from './js-file/pages/swotPage'

// PUBLIC STATIC MAIN CLASS AS ROUTER
export default class route extends Component {
    render() {
        return (
            <Router>
        <Switch>
          <Route exact path="/" component={mainPage}/>
          <Route exact path="/swot-analysis" component={swotPage}/>
        </Switch>
      </Router>
        )
    }
}
