import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Posts from "../pages/Posts";
import Users from "../pages/Users";
import UserDetail from "../pages/UserDetail";

function AppRouter() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact={true} path="/">
          <Posts endpoint={"/posts/"} />
        </Route>
        <Route path="/user/:id">
          <UserDetail />
        </Route>
        <Route path="/general-posts/">
          <Posts endpoint={"/posts/general"} />
        </Route>
        <Route path="/users/">
          <Users />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
