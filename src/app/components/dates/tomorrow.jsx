import {
  ZA, // South Africa
  CA, // Canada
  MA, // Morocco
  BR, // Brazil
  JP, // Japan
  FR, // France
  SE, // Sweden
  CI, // Ivory Coast
  NO, // Norway
  MX, // Mexico
  EC, // Ecuador
  GB, // England
  CD, // DR Congo
  US, // United States
  BA, // Bosnia and Herzegovina
  BE, // Belgium
  SN, // Senegal
  PT, // Portugal
  HR, // Croatia
  ES, // Spain
  AT, // Austria
  CH, // Switzerland
  DZ, // Algeria
  AR, // Argentina
  CV, // Cape Verde
  CO, // Colombia
  GH, // Ghana
  AU, // Australia
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
    <AR className="flag" />
    <span className="teamName">Argentina</span>
 
  </div>       
   <span className="score">0</span>
 <div className="matdel">
  <h5>لم تبدأ بعد</h5>
          <h5>01:00 Am</h5>
         <h5> الدور ال32</h5> 
        </div>

        <span className="score">0</span>
<div className="team">
    <CV className="flag" />
    <span className="teamName">Cape Verde</span>
  </div>      </div>
        </Link>
           <Link className="maz" href="">
      <div className="matches">
<div className="team">
    <CO className="flag" />
 
    <span className="teamName">Colombia</span>
  </div>     
    
   <span className="score">0</span>
 <div className="matdel">
  <h5>لم تبدأ بعد</h5>
          <h5>04:30 Am</h5>
         <h5> الدور ال32</h5> 
        </div>
        <span className="score">0</span>
<div className="team">
    <GH className="flag" />
    <span className="teamName">Ghana</span>
  </div>      </div>
        </Link>  
                   <Link className="maz" href=""> 

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



    </div>
  );
}