import React, { Suspense, lazy } from "react";
import { HashRouter, Switch, BrowserRouter } from "react-router-dom";
import router from "../config/router.json";
import RouterExtension from "./RouterExtension";

const RootContainer = lazy(() => import("../modules/root"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback>
          <Switch>
            <RouterExtension
              name="HomePageContainer"
              path={router.home}
              component={RootContainer}
            />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
