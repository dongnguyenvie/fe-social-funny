import React from "react";
import Grid from "@material-ui/core/Grid";
import Section from "modules/artists/components/Section";
import uiStyles from "modules/artists/assets/styles/ui";
import Typography from "@material-ui/core/Typography";
import { ICarousel } from "modules/artists/model";

interface IArtistsContainerUI {
  carousel: ICarousel;
}

export default function ArtistsContainerUI({ carousel }: IArtistsContainerUI) {
  const classes = uiStyles();

  return (
    <Grid container className={classes.root}>
      <Typography className={classes.title}>Artist</Typography>
      <Section carousel={carousel} />
      <Section carousel={carousel} />
      <Section carousel={carousel} />
    </Grid>
  );
}
