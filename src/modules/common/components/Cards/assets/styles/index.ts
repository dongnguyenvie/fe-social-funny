import {
  makeStyles,
  createStyles,
  lighten,
  Theme,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 220,
      cursor: "pointer",
      overflow: "hidden",
      "&:hover $media": {
        transform: "scale(1.1)",
        "&::before": {
          background: "rgba(0, 0, 0, .7)",
        },
        "&::after": {
          width: "100%",
          height: "100%",
          content: "'play_circle_outline'",
        },
      },
    },
    media: {
      width: "100%",
      height: 235,
      objectFit: "cover",
      position: "relative",
      transform: "scale(1)",
      transition: ".2s all",
      "&::before": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "transparent",
        zIndex: 2,
        transition: ".2s all",
      },
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        background: "transparent",
        zIndex: 3,
        fontFamily: "Material Icons",
        content: "''",
        "-webkit-font-feature-settings": "liga",
        color: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        fontSize: theme.spacing(8),
        transform: "scale(1)",
        transition: "none",
      },
    },
    cardFooter: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      zIndex: 2,
      background: ({ averageColor }: { averageColor: string }) => averageColor,
    },
    cardName: {
      fontSize: 14,
      fontWeight: "bold",
      color: ({ averageColor }: { averageColor: string }) =>
        averageColor !== "transparent" ? "#ffffff" : "#000000",
    },
    cardCategory: {
      color: ({ averageColor }: { averageColor: string }) =>
        averageColor !== "transparent"
          ? lighten("#9391ae", 0.6)
          : lighten("#000000", 0.2),
      fontSize: 14,
    },
  })
);
export default useStyles;
