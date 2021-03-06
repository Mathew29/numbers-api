import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Splash from './components/Splash/index';
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Splash} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
