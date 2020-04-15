import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { CustomizeCarousel } from "modules/common/components";
import { ICarousel } from "modules/common/components/CustomizeCarousel/type";
import uiStyles from "modules/home/assets/styles/ui";
import { IPropsContainer } from "../type";
import { FuturedPlaylists } from "../components";

interface IHomeUI {
  carousel?: ICarousel;
  propsContainer?: IPropsContainer;
}

export default function HomeUI({
  carousel,
  propsContainer,
}: IHomeUI): JSX.Element {
  const classes = uiStyles();

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Typography className={classes.title}>Home</Typography>
        </Grid>
        <Grid item xs={12}>
          <FuturedPlaylists propsContainer={propsContainer} />
        </Grid>
      </Grid>
    </>
  );
}
