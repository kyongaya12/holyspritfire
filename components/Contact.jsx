import React from 'react'
import imageCall from './images/ed-singing.jpg';
import {Link} from 'react-router-dom';

const Contact = () =>
 {
    return (
        <div>
          
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center my-4">
                        <h1>연락처</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src={imageCall} alt="Contact Us" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        {/* <form >
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label">이름</label>
                                <input type="text" class="form-control" id="exampleForm" placeholder="이름"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">이멜</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="이멜 주소"/>
                            </div>
                            <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">이멜 내용</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                             <button type="submit" class="btn btn-outline-primary">보내셔요</button>
                        </form> */}
                        <h1>선지자 에드 목사님 사역에 관심있어신분 </h1>
                     
                        <h2>이멜 신청</h2>
                       <Link to='javascript:void(0)' onClick={() => window.location = 'mailto:holyspritfire7@gmail.com'}>   
                       holyspritfire7@gmail.com
</Link>
  </div>
                    </div>
                </div>
            </div>
            )
}

            export default Contact
