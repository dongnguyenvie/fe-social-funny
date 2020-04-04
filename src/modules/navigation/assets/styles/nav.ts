import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const navStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: theme.spacing(8),
      paddingLeft: theme.spacing(4.5),
      color: "#9298a1",
    },
    nav: {
      paddingTop: theme.spacing(2.5),
    },
    rootRenderIcon: {
      cursor: "pointer",
      "&:hover, &:hover $textContent": {
        color: "#fa486b",
      },
    },
    title: {
      fontWeight: "bold",
    },
    textContent: {
      color: "#646466",
      marginLeft: theme.spacing(2.5),
      fontSize: 14,
      fontWeight: 400,
    },
  })
);

export default navStyles;
