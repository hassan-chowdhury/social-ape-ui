import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import "./App.scss";
import { LoginRegister } from "./components/login";


const App = () => (
  <div className="App">
    <Router>
      <Switch>
        {/* <Route exact path="/" /> */}
        <Route path="/login">
          <LoginRegister showLogin={true} />
        </Route>
        <Route path="/register">
          <LoginRegister showLogin={false} />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;