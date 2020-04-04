import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const UIStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    infoArtist: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      marginLeft: theme.spacing(3),
    },
    infoNameSong: {
      fontSize: 16,
      fontWeight: 600,
    },
    infoNameArtist: {
      fontSize: 14,
      color: "#9391ae",
    },
    pause: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      transform: "scale(1)",
      "&:hover": {
        transform: "scale(1.1)",
        transition: "all .2s",
      },
    },
    buttonControl: {
      cursor: "pointer",
      color: "#9391ae",
      "&:hover": {
        color: "#fff",
      },
    },
  })
);

export default UIStyles;
