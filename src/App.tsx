import React from "react";
import "./App.css";

import Checkbox from "@material-ui/core/Checkbox";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import { Provider } from "react-redux";
import Router from "./router";
import storeClient from "./store";

const theme = createMuiTheme({});

function App() {
  return (
    <>
      <Provider store={storeClient}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
