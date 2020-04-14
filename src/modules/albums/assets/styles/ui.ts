import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const uiStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "90%",
      margin: "auto",
      padding: 0,
    },
    title: {
      color: "#e0023d",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(1),
      fontWeight: "bold",
      fontSize: 16,
    },
  })
);

export default uiStyles;
