import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoList from './VideoList'; // Adjust the path
// import Video1 from '../video/FrontVideo'
const videos = [
  'https://www.youtube.com/embed/WM8pTpAnkSA',
  'https://www.youtube.com/embed/WM8pTpAnkSA',
  // Add more video URLs as needed
];

const Video = () => {
  return (
    <div>
        <h1>Video</h1>
        <div className="video-container">
        {videos.map((video, index) => (
          <div key={index} className="video-wrapper">
            <iframe
              title={`YouTube Video ${index + 1}`}
              width="100%"
              height="315"
              src={video}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        ))}
      </div>


    <VideoList videoUrl={videos} />
    
   

</div>
    
 
  )
}

export default Video
