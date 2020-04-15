import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { IPropsContainer } from "../type";

interface IFuturedPlaylists {
  propsContainer?: IPropsContainer;
}

export default function FuturedPlaylists({
  propsContainer,
}: IFuturedPlaylists) {
  const music = useSelector(({ music: musicStore }: any) => musicStore);
  const {
    onFetchFeaturedPlaylists,
    onFetchNewReleasesTracks,
  } = propsContainer as IPropsContainer;

  const _initComponentFuturedPlaylists = () => {
    onFetchFeaturedPlaylists({ limit: 10, offset: 0 });
    onFetchNewReleasesTracks();
  };

  useEffect(() => {
    _initComponentFuturedPlaylists();
  }, []);

  console.log("music: ", music);

  return <>FuturedPlaylists</>;
}
