import React from 'react';
import AuthContainer from './component/AuthContainer';
import Callback from './component/Callback';
import history from "./history";
import { Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router data-test="app" history={history}>
          <Switch>
            <Route exact path="/" component={AuthContainer} />
            <Route exact path="/callback" component={Callback} />
          </Switch>
    </Router>
  );
}

export default App;
