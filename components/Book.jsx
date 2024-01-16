import React from 'react'
import imageCall from './images/prayers-of-wars.jpg';
const Book = () => {
  return (
    <div className="container custom-margins" >
      <div className="row">
        {/* Image Column */}
        <div className="col-md-6">
          {/* <img
            src="your-image-url.jpg"
            alt="Image"
            className="img-fluid"
          /> */}
            <img src={imageCall} alt="Contact Us" className="img-fluid" />
        </div>
  
        {/* Text Column */}
        <div className="col-md-6">
          <h2>Text Column</h2>
          <p>
            Your text goes here. You can add multiple paragraphs, formatting,
            and other content as needed.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Book