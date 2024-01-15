import React from 'react'
// import ReactPlayer from 'react-player'
import ReactPlayer from 'react-player'
import imageCall from './images/ed-pastor-face.jpg';
import imageCall1 from './images/선지자 에드 목사님 어떻게 영적계급올릴까요.jpg';
import imageCall2 from './images/꿈 해몽 copy.jpg';
import BgVideo from './BgVideo';

const ed = () => {    
  return (
    <div >
  <BgVideo />
  

        <section className="ed-prophet-about curved" >     
     <div className="container vk-bg-container" >
                <div className="row p4-4 ">
                    <div className="col-md-6 ">
                        <h1 className="boxstyle text-primary fw-bold mb-4 text-center vk-title1"> 오중사역 교회 </h1>
                        <p class="church-leadership">(사도, 선지자, 전도자, 목사,교사)222</p>
                        <div className="no-delay">
                        <p>좌절, 지연, 방해, 막힘은 어디에서 오는 것인가요? </p>
                       <p>자기 수련이 부족해서 아니면 성격만 고치면 해결될까요? 성경에선 나쁜영의 세력들이 힘들게 한다고 나왔습니다.</p>
                  
                     <p>에베소서 6:12 KRV</p>
                     <p>우리의 씨름은 혈과 육에 대한 것이 아니요 정사와 권세와 이 어두움의 세상 주관자들과 하늘에 있는 악의 영들에게 대함이라</p>
                     <p>그럼<b className="solution"> 해결</b> 책이있나요?</p>
                    <p>예수님은 악마의 작업을 파괴하기 위해서 기름부운자를 세우시고 보내셨습니다</p>
                    <p>에드 목사님의 기름부움으로 사탄의 막힘을 파괴하시고 놀라운 성령의 활동하심에 동참하셔요. </p>
                    </div>
                    </div>
                    <div className="col-md-6 ">
                    <div className="image-ed">
                    <img src={imageCall} alt="ed pastor" className="centered-image img-fluid" />
                 </div>
           
</div>
​</div></div>    
        

        </section>
        <section className="" >    
        <div class="container-fluid military" >
          <div class="container" >
          <div class="row">
      <img src={imageCall2} alt="ed pastor" className="img-fluid" />
      </div>
      </div></div>
      </section>
           
       <div className="container py-5">
        <div class="row py-5">
    <div class="col-xs-12 col-md-6">
    <iframe width="100%" height="325" src="https://youtube.com/embed/JBMCuxmAntc?si=25QGmPS5SPTmj8PK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <ReactPlayer url='https://youtu.be/T58YrE1XWNk?si=H-cN2-kDFlMkxqDa' autoPlay muted className="react__player"  /> */}
    </div>
    <div class="col-xs-12 col-md-6">
    <iframe width="100%" height="325" src="https://youtube.com/embed/2_fnFBbqOmI?si=GmNnV9V0DXCX_8Sy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <ReactPlayer url='https://www.youtube.com/embed/2XduegbqFTU' autoPlay muted className="react__player"  /> */}
    </div>
   
      </div>
      
      <div class="row py-5 ">
   
    </div>
   
      </div> 
      <section className="curved">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6d145b" fill-opacity="1" d="M0,32L34.3,74.7C68.6,117,137,203,206,213.3C274.3,224,343,160,411,117.3C480,75,549,53,617,80C685.7,107,754,181,823,213.3C891.4,245,960,235,1029,218.7C1097.1,203,1166,181,1234,144C1302.9,107,1371,53,1406,26.7L1440,0L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
      </section>
      </div>

  
  )
}

export default ed