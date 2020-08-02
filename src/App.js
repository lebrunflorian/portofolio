import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./styles/App.scss";

// pages
import Home from "./pages/Home";
import Work from "./pages/Work";
import Header from "./components/Header";
import Overlay from "./components/Overlay";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Overlay />
      <Route
        render={({ location }) => {
          const { pathname } = location;
          return (
            <TransitionGroup>
              <CSSTransition
                key={pathname}
                timeout={{
                  enter: 1000,
                  exit: 1000,
                }}
              >
                <Route
                  location={location}
                  render={() => (
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/work" component={Work} />
                    </Switch>
                  )}
                />
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      />
    </BrowserRouter>
  );
}

export default App;
