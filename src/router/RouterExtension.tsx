import React, { useRef, useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";

interface InterfaceBeforeRoute {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
  name: string;
  isAuth?: boolean;
  onGetUser?: Function;
  user?: any;
  onSetUser?: Function;
}

const RouteExtension = ({
  component: Component,
  isAuth,
  onGetUser,
  user,
  ...otherProps
}: InterfaceBeforeRoute) => {
  const history = useHistory();

  return (
    <>
      <Route
        render={() => (
          <>
            <Component {...otherProps} user={user} />
          </>
        )}
      />
    </>
  );
};

export default RouteExtension;
