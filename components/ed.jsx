import React from 'react'
// import ReactPlayer from 'react-player'
import ReactPlayer from 'react-player'
import imageCall from './images/ed-pastor-face.jpg';
import imageCall1 from './images/선지자 에드 목사님 어떻게 영적계급올릴까요.jpg';
import imageCall2 from './images/ed-pastor-at-pakistan-mobile-size.jpg';
import imageCall3 from './images/ed-pastor-at-pakistan.jpg';
import BgVideo from './BgVideo';


const ed = () => {    
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  return (
    <div >
  <section >
   
<div class="container-fluid">
        <div class="row">
            <div class="col-md-12 mx-auto p-0">
                <div class="image-with-text">
                    {/* <img src={imageCall3} class="img-fluid cover-image" alt="Image" /> */}

                    {isMobile ? (
        <img src={imageCall2} alt="Mobile Image" class="cover-image" />
      ) : (
        <img src={imageCall3} alt="Desktop Image" class="cover-image" />
      )}
                    <div class="text-overlay">
                        <h1>고린도전서 4:20<br/>
하나님의 나라는 말에 있지 
아니하고 오직 능력에 있음이라</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>


     </section>

        <section className="ed-prophet-about" >     
     <div className="container" >
                <div className="row p4-4  " >
                    <div className="col-md-6 ">
                    <h1>에드 시츠로렐리 </h1>
                    <h2> 예언, 치유, 축사 성령사역자</h2>                       
              
                  <p>&nbsp;</p>
                    <div className="no-delay">
                    <p>좌절, 지연, 방해, 막힘은 어디에서 오는 것인가요? </p>
                    <p>자기 수련이 부족해서 아니면 성격만 고치면 해결될까요? 다른 종교, 불교나, 유교도 자기 수련할수 있습니다. 하지만 성경에선 그배후가 나쁜영의 세력들이 힘들게 한다고 나왔습니다.</p>
                  
                     <blockquote class="blockquote">
    <p>우리의 씨름은 혈과 육에 대한 것이 아니요 정사와 권세와 이 어두움의 세상 주관자들과 하늘에 있는 악의 영들에게 대함이라</p>
    <footer class="blockquote-footer">에베소서 6:12 KRV</footer>
</blockquote>
                     <p>그럼<b className="solution">해결</b>책이있나요?</p>
                    <p>예수님은 악마의 작업을 파괴하기 위해서 기름부운자를 세우시고 보내셨습니다.
                    선지자 에드님의 기름부움으로 사탄의 막힘을 파괴하시고 놀라운 성령의 활동하심에 동참하셔요. </p>
                    </div>
                    </div>
                    <div className="col-md-6 ">                  
                    <img src={imageCall} alt="ed pastor" className="img-fluid" />
              
</div>
​</div></div>    
        

        </section>
        <section className="" >    
        <div class="container-fluid " style={{background:'black',padding:'70px'}}>
          <div class="container" >
          <div class="row text-center text-light" >
      {/* <img src={imageCall2} alt="ed pastor" className="img-fluid" /> */}
    <h1> 오중사역 교회 <br/>
(사도, 선지자, 전도자, 목사,교사 )</h1>  
 </div>
      </div></div>
      </section>
           
       <div className="container py-5">
        <div class="row py-5">
    <div class="col-xs-12 col-md-6">
    <iframe width="100%" height="325" src="https://youtube.com/embed/JBMCuxmAntc?si=25QGmPS5SPTmj8PK" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <ReactPlayer url='https://youtu.be/T58YrE1XWNk?si=H-cN2-kDFlMkxqDa' autoPlay muted className="react__player"  /> */}
    </div>
    <div class="col-xs-12 col-md-6">
    <iframe width="100%" height="325" src="https://youtube.com/embed/2_fnFBbqOmI?si=GmNnV9V0DXCX_8Sy" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <ReactPlayer url='https://www.youtube.com/embed/2XduegbqFTU' autoPlay muted className="react__player"  /> */}
    </div>   
      </div>      
      <div class="row py-5 ">
      <div class="col-xs-12 col-md-6">
    <iframe width="100%" height="325" src="https://youtube.com/embed/P8csr4z1QLc?si=HHNF8cF7cwFeP7Fc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <ReactPlayer url='https://youtu.be/T58YrE1XWNk?si=H-cN2-kDFlMkxqDa' autoPlay muted className="react__player"  /> */}
    </div>
    <div class="col-xs-12 col-md-6">
    <iframe width="100%" height="325" src="https://youtube.com/embed/wUiMchTo0wU?si=S5zt1pkykASnbgiU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <ReactPlayer url='https://www.youtube.com/embed/2XduegbqFTU' autoPlay muted className="react__player"  /> */}
    </div>   
    </div>
    <div class="row py-5 ">
      <div class="col-xs-12 col-md-6">
    <iframe width="100%" height="325" src="https://youtube.com/embed/T58YrE1XWNk?si=473pctniwf4DOsdr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <ReactPlayer url='https://youtu.be/T58YrE1XWNk?si=H-cN2-kDFlMkxqDa' autoPlay muted className="react__player"  /> */}
    </div>
    <div class="col-xs-12 col-md-6">
    <iframe width="100%" height="325" src="https://youtube.com/embed/aZNGrf4k9Ws?si=_0bwONNxQ_m9k6Uq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <ReactPlayer url='https://www.youtube.com/embed/2XduegbqFTU' autoPlay muted className="react__player"  /> */}
    </div>   
    </div>
    <div class="row py-5 ">
      <div class="col-xs-12 col-md-6">
    <iframe width="100%" height="325" src="https://youtube.com/embed/cAsY1L0X-s4?si=w2pbMumHFAOUT_rM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <ReactPlayer url='https://youtu.be/T58YrE1XWNk?si=H-cN2-kDFlMkxqDa' autoPlay muted className="react__player"  /> */}
    </div>
    <div class="col-xs-12 col-md-6">
    <iframe width="100%" height="325" src="https://youtube.com/embed/KA90qZJRrA0?si=2iM-Z9VTo2y6aGH1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <ReactPlayer url='https://www.youtube.com/embed/2XduegbqFTU' autoPlay muted className="react__player"  /> */}
    </div>   
    </div>
      </div> 
     
      </div>

  
  )
}

export default ed