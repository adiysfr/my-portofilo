import React from "react";
import Home from "../views/Home";
import { Route, Switch } from "react-router-dom";
// import About from "../views/About";
import Contact from "../views/Contact";
import Project from "../views/Project";
import NotFound from "../views/NotFound/NotFound";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/about" exact component={About} /> */}
        <Route path="/contact" exact component={Contact} />
        <Route path="/project" exact component={Project} />
        {/* <Route path="/detail/:id" exact component={Detail} /> */}
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
