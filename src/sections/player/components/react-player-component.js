import React from 'react';
import ReactPlayer from 'react-player';

export default ({
  url,
  videoId,
  muted,
  size,
  playing = false,
  repeat = false,
  style = {},
  volume
}) => {
  const YOUTUBE_BASE = videoid => `https://www.youtube.com/watch?v=${videoid}`;

  return (
    <ReactPlayer
      volume={volume}
      style={style}
      controls={false}
      url={YOUTUBE_BASE(videoId)}
      height={size}
      width={size}
      playing={playing}
      onDuration={da => console.log(da)}
      muted={muted}
      loop={repeat}
    />
  );
};
