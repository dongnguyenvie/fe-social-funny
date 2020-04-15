import React from "react";
import Grid from "@material-ui/core/Grid";
import uiStyles from "modules/artists/assets/styles/ui";
import Typography from "@material-ui/core/Typography";
import { ICarousel } from "modules/common/components/CustomizeCarousel/type";
import { CustomizeCarousel } from "modules/common/components";

interface IArtistsContainerUI {
  carousel?: ICarousel;
}

export default function ArtistsContainerUI({
  carousel,
}: IArtistsContainerUI): JSX.Element {
  const classes = uiStyles();

  return (
    <Grid container className={classes.root}>
      <Typography className={classes.title}>Artist</Typography>
      <CustomizeCarousel carousel={carousel} />
    </Grid>
  );
}
