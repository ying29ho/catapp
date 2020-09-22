import React from "react";
import { Switch, Route } from "react-router";
import DemoPage from "../DemoPage";

const AppRouter = () => (
  <Switch>
    <Route component={DemoPage} />
  </Switch>
);

export default AppRouter;
