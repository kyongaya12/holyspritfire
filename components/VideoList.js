import React from 'react'
import ReactPlayer from 'react-player';

const VideoList = ({videoUrls}) => {
  return (
     <div className="container">
     <div className="row">
 <div className="video-list">
     {videoUrls.map((url, index) => (
        <div key={index} className="col-md-6">
          <div className="video-item">
          <ReactPlayer url={url} controls />
          </div>
        </div>
      ))}
    </div>
</div>
    </div>
  )
}

export default VideoList
