import React from "react";
import Grid from "@material-ui/core/Grid";
import UIStyles from "modules/playingBar/assets/styles/ui";
import { Icons } from "modules/common";
import { darken, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles({
  root: {
    height: 5,
    backgroundColor: darken("#9391ae", 0.35),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#ffffff",
  },
})(LinearProgress);

function ProgressBar() {
  return (
    <BorderLinearProgress variant="determinate" color="secondary" value={70} />
  );
}

function ControlButtons() {
  const classes = UIStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item className={classes.buttonControl}>
        <Icons icon="skip_previous" />
      </Grid>
      <Grid item className={`${classes.pause} ${classes.buttonControl}`}>
        <Icons icon="pause_circle_outline" fontSize="large" />
      </Grid>
      <Grid item className={classes.buttonControl}>
        <Icons icon="skip_next" />
      </Grid>
    </Grid>
  );
}

export default function PlayerControls() {
  const classes = UIStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={3}>
        <ControlButtons />
      </Grid>
      <Grid item xs={9}>
        <ProgressBar />
      </Grid>
    </Grid>
  );
}
