import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import FastAverageColor from "fast-average-color";
import { IItemsCarousel } from "modules/artists/model";
import useStyles from "./assets/styles";

/** can not get interface result color of fast-average-color */
type IFastAverageColorRgba = [number, number, number, number];

interface IFastAverageColorResult {
  value: IFastAverageColorRgba;
  rgb: string;
  rgba: string;
  hex: string;
  hexa: string;
  isDark: boolean;
  isLight: boolean;
  error?: Error;
}

interface ICards {
  item: IItemsCarousel;
}

const getAverageColor = (
  url: string,
  cb: (c: IFastAverageColorResult) => void
) => {
  const fac = new FastAverageColor();
  const container = new Image();
  container.crossOrigin = "Anonymous";
  container.src = url;

  fac
    .getColorAsync(container)
    .then((color) => {
      cb(color);
    })
    .catch((e) => console.log(e));
};

export default function Cards({ item }: ICards) {
  const [averageColor, setAverageColor] = useState<string>("transparent");
  const { url, kindOfMusic, nameArtist } = item;
  const classes = useStyles({ averageColor });

  useEffect(() => {
    getAverageColor(url, function (c) {
      setAverageColor(c.hex);
    });
  }, [url]);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={url} />
      </CardActionArea>
      <CardActions className={classes.cardFooter}>
        <Typography component="div" className={classes.cardName}>
          {nameArtist}
        </Typography>
        <Typography component="div" className={classes.cardCategory}>
          {kindOfMusic}
        </Typography>
      </CardActions>
    </Card>
  );
}
