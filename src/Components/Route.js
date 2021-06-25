import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Blogs from "./Blogs";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}