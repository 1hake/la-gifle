import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout } from "./Layout";
import { Panel } from "../components/containers/Panel";

export const MyRouter = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/">
            <Panel />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};
