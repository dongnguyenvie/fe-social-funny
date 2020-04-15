import React from "react";
import Grid from "@material-ui/core/Grid";
import UIStyles from "modules/root/assets/styles/ui";
import Navigation from "modules/navigation";
import MainView from "modules/mainView";
import PlayingBar from "modules/playingBar";

export default function RootUI(): JSX.Element {
  const classes = UIStyles();

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.navigation}>
          <Navigation />
        </Grid>
        <Grid item xs={12} className={classes.mainView}>
          <MainView />
        </Grid>
      </Grid>
      <Grid container className={classes.playingBar} alignItems="center">
        <Grid item xs={12}>
          <PlayingBar />
        </Grid>
      </Grid>
    </>
  );
}
