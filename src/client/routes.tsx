import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wishlist from "./Pages/Wishlist";
import Home from "./Pages/Home";

const Routes = () => {
  return (
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/wishlist" component={Wishlist} />
    </Router>
  );
};

export default Routes;
