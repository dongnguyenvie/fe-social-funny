import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { onFetchMusicRelease } from "reducers/music/Music.reducer";
import { IRootState } from "reducers/RootReducer";

export default function MainViewContainer() {
  const musicText = useSelector((state: IRootState) => state.musicNewRelease);
  const dispatch = useDispatch();
  const onFetchNewReleasesTracks = () => {
    dispatch(onFetchMusicRelease());
  };

  return (
    <>
      <button type="button" onClick={onFetchNewReleasesTracks}>
        click
      </button>
      {musicText?.albums?.items[0]?.images?.map((item: any, index: number) => {
        return <img src={item.url} key={index} />;
      })}
      <pre>{JSON.stringify(musicText, null, 2)}</pre>
    </>
  );
}
