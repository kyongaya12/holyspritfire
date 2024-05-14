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
     <h2 class="text-md-center pt-5">예배 장소 </h2>
                    </div>
   </div>
   <div className="row ">
   <div className="col-md-4 pt-5">
   <h3> 뉴욕: 프러싱</h3>
   <p>Time:  Sunday 11:00 AM</p>
   <p>Adria Hotel</p>
   <p>221-17 Northern Blvd, Bayside, NY 11361</p>   
    </div>
    <div className="col-md-4 pt-5">
     
   </div>
   
     <div className="col-md-4 pt-5">
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
