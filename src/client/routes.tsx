import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import SearchPage from "./Pages/Search";

const Routes = () => {
  return (
    <Router>
      <Route path="/" component={HomePage} exact />
      <Route path="/search" component={SearchPage} />
    </Router>
  );
};

export default Routes;
