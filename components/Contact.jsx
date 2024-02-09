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
                        <h1  >연락처</h1>
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
                           <p>   어려움, 지연, 방해, 막힘, 그리고 좌절. 이 모든 것은 어디서 오는 걸까요? 신성한 해결책이 있을까요? 예수님은 마귀의 일을 파괴하기 위해 오셨습니다.
                에드 목사님은 예언의 기름이 탕월하시고, 그 문제가 왜 어디로 오는지도 성령님을 통해서 알려 주십니다. 이 모든 사단의 역사를 목사님의 기름부움으로 파괴하셔요. </p>
                   <br/>
                        <h3>선지자 에드 목사님 사역에 관심있어신분 </h3>
                     
                        <p>한국어 이멜:<Link to='javascript:void(0)' onClick={() => window.location = 'mailto:holyspritfire7@gmail.com'}>   
                       holyspritfire7@gmail.com</Link></p>
                       
                       <p>한국어 카카오:에드 목사님</p>
                     <p></p>
                        
                        <hr />
                        <p>오피셜 휍사이트:<a href="https://edcitronnelliministries.com/">오피셜 휍사이트</a></p>
                       <p>집회 여정:<a href="https://www.edcitronnelliministries.co/events">집회 여정</a></p>
                      <p>유튜브:<a href="https://www.youtube.com/@EdCitronnelliMinistries/videos">유튜브 채널</a></p>
                        
  </div>
                    </div>
                </div>
            </div>
            )
}

            export default Contact
