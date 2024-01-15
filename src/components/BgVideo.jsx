import React from 'react'
// import video from '../assets/ed-video.mp4'
import videoSrc from './images/video.mp4'
import imageCall from './images/ed-pastor-face.jpg';
const BgVideo = () => {
  return (
    <div className="bgContainer">
           
        <div className="overlay">
        {/* <video src={video} type="video/mp4" autoPlay loop muted />    */}
        <video controls autoPlay loop muted >       
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
      {/* <iframe width="100%" height="100%" src="https://youtube.com/embed/dvRdMU-NyJg?autoplay=1&loop=1" title="YouTube video player" frameborder="0" allowfullscreen></iframe> */}
            <div className="container-vk">
                <h1 className="title">에드 시츠로넬리2</h1>
                <h2 className="wlc">강력한 성령사역2</h2>
                <h2 className="wlc">예언, 치유, 축사2</h2>
            </div>   
    </div>
    </div>




  )
}

export default BgVideo
