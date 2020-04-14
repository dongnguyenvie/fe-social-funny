import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const sectionStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapperCarousel: {
      overflow: "hidden",
      margin: "auto",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    carousel: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "&>.CarouselItem": {
        width: "100%",
      },
    },
    wrapperItems: {},
    titleCarousel: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#36363a",
    },
  })
);

export default sectionStyles;
