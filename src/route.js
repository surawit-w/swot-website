import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import mainPage from './js-file/pages/mainPage'

// PUBLIC STATIC MAIN CLASS AS ROUTER
export default class route extends Component {
    render() {
        return (
            <Router>
        <Switch>
          <Route exact path="/" component={mainPage}/>
        </Switch>
      </Router>
        )
    }
}
