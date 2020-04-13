import React, { Suspense, lazy } from "react";
import { HashRouter, Switch } from "react-router-dom";
import router from "../config/router.json";
import RouterExtension from "./RouterExtension";

const RootContainer = lazy(() => import("../modules/root"));

function App() {
  return (
    <>
      <HashRouter>
        <Suspense fallback>
          <Switch>
            <RouterExtension
              name="HomePageContainer"
              path={router.home}
              exact
              component={RootContainer}
            />
          </Switch>
        </Suspense>
      </HashRouter>
    </>
  );
}

export default App;
