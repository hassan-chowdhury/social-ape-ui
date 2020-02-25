import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.scss";
import { LoginRegister } from "./components/login";

const App = () => (
  <div className="App">
    <LoginRegister />
  </div>
);

export default App;