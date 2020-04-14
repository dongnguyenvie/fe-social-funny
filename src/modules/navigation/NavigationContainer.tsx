import React from "react";
import { IWrapperNavs } from "modules/navigation/model";
import router from "config/router.json";
import NavigationUI from "./ui";

const navigations: IWrapperNavs[] = [
  {
    content: "LIBRARY",
    navs: [
      {
        icon: "home",
        content: "Homes",
        url: router.home,
      },
      {
        icon: "library_music",
        content: "Playlists",
        url: router.playlists,
      },
      {
        icon: "person",
        content: "Artists",
        url: router.artist,
      },
      {
        icon: "album",
        content: "Albums",
        url: router.album,
      },
      {
        icon: "music_note",
        content: "Songs",
        url: router.songs,
      },
    ],
  },
  {
    content: "DISCOVERY",
    navs: [
      {
        icon: "local_grocery_store",
        content: "Store",
        url: router.store,
      },
      {
        icon: "settings_ethernet",
        content: "Radio",
        url: router.radio,
      },
      {
        icon: "favorite",
        content: "For You",
        url: router.forYou,
      },
      {
        icon: "web",
        content: "Browse",
        url: router.browse,
      },
    ],
  },
];

export default function NavigationContainer() {
  return <NavigationUI navigations={navigations} />;
}
