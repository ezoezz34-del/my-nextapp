import {
  ZA, // South Africa
  CA, // Canada
  MA, // Morocco
  BR, // Brazil
  JP, // Japan
 NO , // Norway
PY ,// Paraguay
  FR, // France
  SE, // Sweden
  CI, // Ivory Coast
  MX, // Mexico
  EC, // Ecuador
  GB, // England
  CD, // DR Congo
  US, // United States
  BE, // Belgium
  PT, // Portugal
  HR, // Croatia
  ES, // Spain
  CH, // Switzerland
  AR, // Argentina
  CO, // Colombia
  EG, // Egypt
} from "country-flag-icons/react/3x2";
import Image from "next/image";
 import Link from "next/link";

export default function Yesterday() {
  return (
    <div className="table">
        
           <Link className="maz" href="">
      <div className="matches">
<div className="team">
    <FR className="flag" />
    <span className="teamName">France</span>

  </div>       
   <span className="score">0</span>
 <div className="matdel">
    {/* <h4> تبدأ المباراه</h4> */}

  <h5>لم تبدأ بعد</h5>
          <h5>12:00 Am</h5>
         <h5> الدور ال16</h5> 
        </div>

        <span className="score">0</span>
<div className="team">
    <PY className="flag" />
    <span className="teamName">Paraguay</span>
  </div>      </div>
        </Link>
           <Link className="maz" href="">
      <div className="matches">
<div className="team">
    <BR className="flag" />
 
    <span className="teamName">Brazil</span>
  </div>     
    
   <span className="score">0</span>
 <div className="matdel">
  <h5>لم تبدأ بعد</h5>
          <h5>11:00 Pm</h5>
         <h5> الدور ال16</h5> 
        </div>
        <span className="score">0</span>
<div className="team">

    <NO className="flag" />
    <span className="teamName">Norway</span>
  </div>      </div>
        </Link>  
                   {/* <Link className="maz" href=""> 

       <div className="matches">
<div className="team">
    <CA className="flag" />
    <span className="teamName">Canada</span>
  </div>     
   <span className="score">0</span>
 <div className="matdel">
          <h5>لم تبدأ بعد</h5>
         <h5>09:00 Pm</h5>
         <h5> الدور ال16</h5> 
        </div>  
        <span className="score">0</span>
<div className="team">
    <MA className="flag" />
    <span className="teamName">Morocco</span>
  </div>      </div>
        </Link>
 */}


    </div>
  );
}