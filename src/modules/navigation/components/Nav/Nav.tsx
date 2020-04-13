import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { IRenderIcons, InavMapper, INav } from "modules/navigation/model";
import { Icons } from "modules/common";
import navStyles from "modules/navigation/assets/styles/nav";

function RenderIcons(props: IRenderIcons) {
  const classes = navStyles();
  const { icon, content } = props;
  return (
    <Grid container className={classes.rootRenderIcon}>
      <Icons fontSize="small" icon={icon} />
      <Typography className={classes.textContent}>{content}</Typography>
    </Grid>
  );
}

export default function Nav(props: InavMapper) {
  const {
    navMapper: { content, navs },
  } = props;
  const classes = navStyles();

  return (
    <>
      <Container className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography className={classes.title}>{content}</Typography>
          </Grid>
          <Grid item xs={12}>
            {navs.map((n: INav) => (
              <Grid container key={n.content} className={classes.nav}>
                <RenderIcons icon={n.icons} content={n.content} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
