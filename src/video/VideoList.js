import React from 'react';
import VideoItem from './VideoItem';

const VideoList = () => {
    const renderedVideos =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
        // console.log(video.id);
    });

  return (
    <div>
      <div className='ui relaxed divided list'>{renderedVideos}</div>;
    </div>
  )
}

export default VideoList
