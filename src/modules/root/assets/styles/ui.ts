import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const UIStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: "calc(100vh - 90px)",
    },
    navigation: {
      flexBasis: 260,
      background: "#e2e2eb",
    },
    mainView: {
      flex: 1,
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
