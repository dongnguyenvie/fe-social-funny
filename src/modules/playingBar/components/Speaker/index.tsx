import React from "react";
import Grid from "@material-ui/core/Grid";
import UIStyles from "modules/playingBar/assets/styles/ui";
import { Icons } from "modules/common";

export default function PlayingBarUI() {
  const classes = UIStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Icons icon="volume_up" />
    </Grid>
  );
}
