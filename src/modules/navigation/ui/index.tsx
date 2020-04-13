import React from "react";
import Grid from "@material-ui/core/Grid";
import { INavigationUI, IWrapperNavs } from "modules/navigation/model";
import UIStyles from "../assets/styles/ui";
import Nav from "../components/Nav/Nav";

export default function NavigationUI(props: INavigationUI) {
  const classes = UIStyles();
  const { navigations } = props;

  return (
    <Grid container direction="column" className={classes.root}>
      {navigations.map((n: IWrapperNavs) => (
        <React.Fragment key={n.content}>
          <Nav navMapper={n} />
        </React.Fragment>
      ))}
    </Grid>
  );
}
