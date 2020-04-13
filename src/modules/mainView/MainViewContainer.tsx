import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function MainViewContainer() {
  const musicText = useSelector((state) => state);
  const dispatch = useDispatch();
  const onFetchTopTracks = () => {
    dispatch({ type: "FETCH_ARTIST_TOP_TRACKS" });
  };
  return (
    <>
      <button onClick={onFetchTopTracks}>click</button>
      <pre>{JSON.stringify(musicText, null, 2)}</pre>
    </>
  );
}
