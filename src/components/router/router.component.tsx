import React from "react";
import { PrincipalContainer } from "../principal";
import { switchRoutes } from "./router";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

export const RouterComponent = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact={true}
            path={[switchRoutes.root]}
            component={PrincipalContainer}
          />
        </Switch>
      </Router>
    </>
  );
};
