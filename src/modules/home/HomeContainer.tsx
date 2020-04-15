import React from "react";
import { useDispatch } from "react-redux";
import {
  onFetchMusicRelease,
  actionFetchFeaturedPlaylists,
} from "redux/music/Music.actions";
import { IRootState } from "redux/RootReducer";
import { IFeaturedPlaylists } from "redux/music/Type";
import { ICarousel } from "modules/common/components/CustomizeCarousel/type/index";
import HomeUI from "./ui";
import { IPropsContainer } from "./type";

const carousel: ICarousel = {
  title: "Popular",
  options: {
    autoPlay: false,
    interval: 4000,
    indicators: true,
    animation: "fade",
  },
  listCarousel: [
    {
      items: [
        {
          url:
            "https://images.pexels.com/photos/167605/pexels-photo-167605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          nameArtist: "Rihana",
          kindOfMusic: "Consideration",
        },
        {
          url:
            "https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          nameArtist: "Rihana",
          kindOfMusic: "Consideration",
        },
        {
          url:
            "https://images.pexels.com/photos/555345/pexels-photo-555345.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          nameArtist: "Rihana",
          kindOfMusic: "Consideration",
        },
        {
          url:
            "https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          nameArtist: "Rihana",
          kindOfMusic: "Consideration",
        },
        {
          url:
            "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          nameArtist: "Rihana",
          kindOfMusic: "Consideration",
        },
      ],
    },
    {
      items: [
        {
          url:
            "https://images.pexels.com/photos/4038313/pexels-photo-4038313.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          nameArtist: "Rihana",
          kindOfMusic: "Consideration",
        },
      ],
    },
  ],
};

export default function HomeContainer(): JSX.Element {
  const dispatch = useDispatch();
  const onFetchNewReleasesTracks = () => {
    dispatch(onFetchMusicRelease());
  };

  const onFetchFeaturedPlaylists = ({
    limit,
    offset,
    country,
    locale,
    timestamp,
  }: IFeaturedPlaylists) => {
    dispatch(
      actionFetchFeaturedPlaylists({
        limit,
        offset,
        country,
        locale,
        timestamp,
      })
    );
  };

  const propsContainer: IPropsContainer = {
    onFetchNewReleasesTracks,
    onFetchFeaturedPlaylists,
  };

  console.log("---- first render HomeContainer ----");

  return (
    <>
      <HomeUI carousel={carousel} propsContainer={propsContainer} />
    </>
  );
}
