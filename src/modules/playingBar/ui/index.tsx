import React from "react";
import Grid from "@material-ui/core/Grid";
import UIStyles from "modules/playingBar/assets/styles/ui";
import { Icons } from "modules/common";
import InfoArtist from "modules/playingBar/components/InfoArtist";
import Speaker from "modules/playingBar/components/Speaker";
import PlayerControls from "modules/playingBar/components/PlayerControls";

export default function PlayingBarUI() {
  const classes = UIStyles();

  return (
    <Grid container alignItems="center">
      <Grid item xs={2}>
        <InfoArtist />
      </Grid>
      <Grid item xs={9}>
        <PlayerControls />
      </Grid>
      <Grid item xs={1}>
        <Grid container justify="center" alignItems="center">
          <Speaker />
        </Grid>
      </Grid>
    </Grid>
  );
}
