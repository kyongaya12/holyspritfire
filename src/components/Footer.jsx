import React from 'react'

var bgColors = { "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
                    "black":"#000000"
};

const Footer = () => {
    return (
        <>
        <div className="container-fluid" style={{backgroundColor: bgColors.black}}>           
        
        <div className="container bg-footer text center" >
                   <div className="row ">
                       <div className="col-md-12" >                              
     <h2 class="text-md-center py-5">예배 장소 </h2>
                    </div>
   </div>
   <div className="row ">
   <div className="col-md-4">
   <h3> 뉴욕: 프러싱</h3>
   <p>Time:  Sunday 11:00 AM</p>
   <p>Sheraton LaGuardia East Hotel 7Floor</p>
   <p>135-20 39th Ave, Flushing, NY 11354</p>   
    </div>
    <div className="col-md-4">
         <h3>뉴욕: 브랑스</h3>
     <p>Time:  Wendesday 7:30 PM</p>
     <p> Residence Inn by Marriott New York </p>
     <p> at Metro Ctr Atrium 1776</p>
     <p>Eastchester Road, Bronx, NY 10461</p>
   </div>
   
     <div className="col-md-4">
         <h3>텍사스</h3>
      <p> Sunday 11 AM, Friday 7:30 PM</p>
      <p> ECM Freedom Arena</p>
      <p>1701 N. Fielder Rd</p>
      <p>Arlington, TX 76012</p>
       </div>
       
   </div>
        </div>
    
          
       
   ​</div>
   <div className="container-fluid footer-bottom" >
   <div className="container ">
        <div className="row ">
                       <div className="col-md-12"  >      
                       © 2024 HolySpritFire All right reserved.
                       </div>
                       </div></div>
   </div>
   </>
    )
}

export default Footer
