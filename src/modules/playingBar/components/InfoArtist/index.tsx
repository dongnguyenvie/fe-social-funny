import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import UIStyles from "modules/playingBar/assets/styles/ui";

export default function InfoArtist() {
  const classes = UIStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar
        alt="avatar"
        src="https://cdn.pixabay.com/photo/2015/02/01/06/11/solo-violinist-619154_960_720.jpg"
        className={classes.large}
      />
      <Grid item className={classes.infoArtist}>
        <Typography className={classes.infoNameSong}> Grunt 15 </Typography>
        <Typography className={classes.infoNameArtist}> Nekfeu </Typography>
      </Grid>
    </Grid>
  );
}
