import React, { lazy } from "react";
import route from "config/router.json";

interface IRoute {
  path: string;
  exact?: boolean;
  name: string;
  component: React.LazyExoticComponent<any>;
}

const HomeContainer = React.lazy(() => import("modules/home"));
const ArtistsContainer = React.lazy(() => import("modules/artists"));
const AlbumsContainer = React.lazy(() => import("modules/albums"));

const routes = [
  {
    path: route.home,
    exact: true,
    name: "Homes",
    component: HomeContainer,
  },
  {
    path: route.artist,
    exact: true,
    name: "Artists",
    component: ArtistsContainer,
  },
  {
    path: route.album,
    exact: true,
    name: "Albums",
    component: AlbumsContainer,
  },
];

export default routes;
