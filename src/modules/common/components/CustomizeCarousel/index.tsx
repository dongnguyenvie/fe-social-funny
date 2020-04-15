import React from "react";
import Carousel from "react-material-ui-carousel";
import shortid from "shortid";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Cards } from "modules/common/components";
import useStyles from "./assets/styles";
import { ICarousel, IListCarousel } from "./type";

interface IItems {
  listCarousel: IListCarousel;
}

function Items({ listCarousel }: IItems): JSX.Element {
  const classes = useStyles();
  const { items } = listCarousel;
  return (
    <Grid container className={classes.wrapperItems} justify="space-between">
      {items.map((i: any) => {
        return (
          <React.Fragment key={shortid.generate()}>
            <Cards item={i} />
          </React.Fragment>
        );
      })}
    </Grid>
  );
}

export default function CustomizeCarousel({ carousel }: any): JSX.Element {
  const classes = useStyles();
  if (!carousel) return <></>;

  const { title, options, listCarousel } = carousel;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography component="p" className={classes.titleCarousel}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.wrapperCarousel}>
        <Carousel {...options} className={classes.carousel}>
          {listCarousel.map((list: IListCarousel) => {
            return <Items listCarousel={list} key={shortid.generate()} />;
          })}
        </Carousel>
      </Grid>
    </Grid>
  );
}
