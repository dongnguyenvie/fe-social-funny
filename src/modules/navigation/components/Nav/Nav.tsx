import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {
  IRenderIcons,
  InavMapper,
  INav,
  INavStyles,
} from "modules/navigation/model";
import { Icons } from "modules/common";
import navStyles from "modules/navigation/assets/styles/nav";
import { Link, useLocation } from "react-router-dom";

function RenderIcons(props: IRenderIcons) {
  const { pathname } = useLocation();
  const { icon, content, url } = props;
  const classes = navStyles({ linkActive: pathname === url });

  return (
    <Link to={{ pathname: url }} className={classes.link}>
      <Grid container className={classes.rootRenderIcon}>
        <Icons fontSize="small" icon={icon} />
        <Typography className={classes.textContent}>{content}</Typography>
      </Grid>
    </Link>
  );
}

export default function Nav(props: InavMapper) {
  const {
    navMapper: { content, navs },
  } = props;
  const classes = navStyles({});

  return (
    <>
      <Container className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography className={classes.title}>{content}</Typography>
          </Grid>
          <Grid item xs={12}>
            {navs.map((nav: INav) => (
              <Grid container key={nav.content} className={classes.nav}>
                <RenderIcons {...nav} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
