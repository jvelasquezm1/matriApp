import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import Home from "./Home";
import Dashboard from "./Dashboard";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
