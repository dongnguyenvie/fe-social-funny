import React, { Suspense, lazy } from "react";
import { HashRouter, Switch } from "react-router-dom";
import router from "../config/router.json";
import RouterExtension from "./RouterExtension";

const Loading = () => <>Loading...</>;

const HomePageContainer = lazy(() => import("../modules/homepage"));

function App() {
  return (
    <>
      <HashRouter>
        <Suspense fallback={<Loading />}>
          <Switch>
            <RouterExtension
              name="HomePageContainer"
              path={router.home}
              exact
              component={HomePageContainer}
            />
          </Switch>
        </Suspense>
      </HashRouter>
    </>
  );
}

export default App;
