import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "router/routes";
import shortid from "shortid";

export default function MainViewContainer(): JSX.Element {
  return (
    <>
      <Suspense fallback>
        <Switch>
          {routes.map((route, idx) => {
            const Component = route.component;
            return Component ? (
              <Route
                key={shortid.generate()}
                path={route.path}
                exact={route.exact}
                render={(props: any) => <Component {...props} />}
              />
            ) : null;
          })}
        </Switch>
      </Suspense>
    </>
  );
}
