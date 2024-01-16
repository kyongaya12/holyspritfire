import React from 'react';
import ReactPlayer from 'react-player';

const YouTubeVideo = ({ videoUrl }) => {
  return (
    <div className="youtube-video">
      <ReactPlayer url={`https://www.youtube.com/watch?v=${videoUrl}`} controls width="100%" />
    </div>
  );
};

export default YouTubeVideo;