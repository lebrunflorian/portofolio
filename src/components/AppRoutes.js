import React from "react";
import { TransitionGroup, Transition } from "react-transition-group";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Work from "../pages/Work";

const AppRoutes = (props) => (
  <TransitionGroup className="col-12">
    <Transition
      key={props.location.pathname}
      timeout={5000}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      <Switch location={props.location}>
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Work} />
      </Switch>
    </Transition>
  </TransitionGroup>
);

export default AppRoutes;
