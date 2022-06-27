import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import About from "./components/About";
import Hospitals from "./components/Hospitals";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Doctors from "./components/Doctors";
// import SearchDoctor from "./components/SearchDoctor";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/about" component={About} />
      <Route path="/hospitals" component={Hospitals} />
      <Route path="/doctors" component={Doctors} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
