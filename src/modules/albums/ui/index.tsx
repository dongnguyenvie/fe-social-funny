import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import uiStyles from "modules/albums/assets/styles/ui";

interface IAlbumsContainerUI {}

export default function AlbumsContainerUI(props: IAlbumsContainerUI) {
  const classes = uiStyles();

  return (
    <Grid container className={classes.root}>
      <Typography className={classes.title}>Albums</Typography>
    </Grid>
  );
}
