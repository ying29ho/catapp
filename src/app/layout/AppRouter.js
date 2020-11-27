import React from "react";
import { Switch, Route } from "react-router";
// import DemoPage from "../DemoPage";
import MainPage from "../layout/MainPage";

const AppRouter = () => (
  <Switch>
    <Route component={MainPage} />
  </Switch>
);

export default AppRouter;
