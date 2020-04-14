import {
  makeStyles,
  createStyles,
  Theme,
  lighten,
} from "@material-ui/core/styles";

const UIStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: "calc(100vh - 90px)",
    },
    navigation: {
      flexBasis: 260,
      background: lighten("#F8F8FF", 0.3),
    },
    mainView: {
      flex: 1,
      height: "calc(100vh - 90px)",
      overflowY: "scroll",
      overflowX: "hidden",

      "&::-webkit-scrollbar-track": {
        borderRadius: 10,
        backgroundColor: "transparent",
      },

      "&::-webkit-scrollbar": {
        width: 12,
        backgroundColor: "transparent",
      },

      "&::-webkit-scrollbar-thumb": {
        borderRadius: 10,
        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,.3)",
      },
    },
    playingBar: {
      flexGrow: 1,
      background: "#2a2955",
      height: "90px",
      color: "#ffffff",
    },
  })
);

export default UIStyles;
