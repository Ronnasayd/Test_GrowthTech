import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import UserDetail from "../pages/UserDetail";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route path="/user/:id">
          <UserDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
