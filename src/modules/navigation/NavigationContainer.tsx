import React from "react";
import { IWrapperNavs } from "modules/navigation/model";
import NavigationUI from "./ui";

const navigations: IWrapperNavs[] = [
  {
    content: "LIBRARY",
    navs: [
      {
        icons: "library_music",
        content: "Playlists",
      },
      {
        icons: "person",
        content: "Artists",
      },
      {
        icons: "album",
        content: "Albums",
      },
      {
        icons: "music_note",
        content: "Songs",
      },
    ],
  },
  {
    content: "DISCOVERY",
    navs: [
      {
        icons: "local_grocery_store",
        content: "Store",
      },
      {
        icons: "settings_ethernet",
        content: "Radio",
      },
      {
        icons: "favorite",
        content: "For You",
      },
      {
        icons: "web",
        content: "Browse",
      },
    ],
  },
];

export default function NavigationContainer() {
  return <NavigationUI navigations={navigations} />;
}
