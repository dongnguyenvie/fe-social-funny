import React from "react";
import "./App.css";

import Checkbox from "@material-ui/core/Checkbox";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import Router from "./router";

const theme = createMuiTheme({});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
