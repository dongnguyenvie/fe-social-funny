import React from "react";
import Grid from "@material-ui/core/Grid";
import ArtistsContainerUI from "modules/artists/ui";
import sectionStyles from "modules/artists/assets/styles/section";
import Carousel from "react-material-ui-carousel";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ICarousel, IListCarousel } from "modules/artists/model";
import { Cards } from "modules/common/components";
import shortid from "shortid";

interface ISection {
  carousel: ICarousel;
}

interface IItems {
  listCarousel: IListCarousel;
}

function Items({ listCarousel }: IItems) {
  const classes = sectionStyles();
  const { items } = listCarousel;
  return (
    <Grid container className={classes.wrapperItems} justify="space-between">
      {items.map((i) => {
        return (
          <React.Fragment key={shortid.generate()}>
            <Cards item={i} />
          </React.Fragment>
        );
      })}
    </Grid>
  );
}

export default function Section({ carousel }: ISection) {
  const classes = sectionStyles();
  const options = {
    autoPlay: false,
    interval: 4000,
    indicators: true,
    animation: "fade",
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography component="p" className={classes.titleCarousel}>
          {carousel.title}
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.wrapperCarousel}>
        <Carousel {...options} className={classes.carousel}>
          {carousel.listCarousel.map((listCarousel) => {
            return (
              <Items listCarousel={listCarousel} key={shortid.generate()} />
            );
          })}
        </Carousel>
      </Grid>
    </Grid>
  );
}
