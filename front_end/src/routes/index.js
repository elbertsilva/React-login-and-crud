import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAutenticated } from "../auth";
import Auth from "../auth";
import View from "../view";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAutenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);
const Routes = () => {
  return (
    <BrowserRouter basename="/React-login-and-crud">
      <Switch>
        <Route exact path="/" render={() => <Auth />} />
        <PrivateRoute exact path="/view" component={() => <View />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
