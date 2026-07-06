
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
        
           <Link className="maz" href="./live">
      <div className="matches">
<div className="team">
    <US className="flag" />
    <span className="teamName"> United States</span>
  </div>       
   <span className="score">0</span>
 <div className="matdel">
  <h4> تبدأ المباراه</h4>
          <h5>03:00 Am</h5>
         <h5> الدور ال16</h5> 
        </div>
        <span className="score">0</span>
<div className="team">
    <BE className="flag" />
    <span className="teamName">Belgium</span>
  </div>      </div>
        </Link>
           <Link className="maz" href="">
      <div className="matches">
<div className="team">
    <EG className="flag" />
 
    <span className="teamName">Egypt</span>
  </div>     
   <span className="score">0</span>
 <div className="matdel">
  <h5>لم تبدأ بعد</h5>
          <h5>07:00 Pm</h5>
         <h5> الدور ال16</h5> 
        </div>
        <span className="score">0</span>
<div className="team">
    <AR className="flag" />
    <span className="teamName">Argentina</span>
  </div>      </div>
        </Link>  
                   <Link className="maz" href=""> 

       <div className="matches">
<div className="team">
    <CH className="flag" />
    <span className="teamName">Switzerland</span>
  </div>       

   <span className="score">0</span>
 <div className="matdel">
          <h5>لم تبدأ بعد</h5>
         <h5>11:00 Pm</h5>
         <h5> الدور ال16</h5> 
        </div>

        <span className="score">0</span>
<div className="team">
    <CO className="flag" />
    <span className="teamName">Colombia</span>
  </div>      </div>
        </Link>



    </div>
  );
}