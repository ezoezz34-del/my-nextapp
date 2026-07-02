
import {
  ZA, // South Africa
  CA, // Canada
  DE, // Germany
  PY, // Paraguay
  NL, // Netherlands
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
        

           <Link className="maz" href="./live">

      <div className="matches">
<div className="team">
    <US className="flag" />
    <span className="teamName">United States</span>
  </div>       

   <span className="score">0</span>
 <div className="matdel">
          <h5> تبدأ لمباراه</h5>
          <h5>03:00 Am</h5>
         <h5> الدور ال32</h5> 
        </div>

        <span className="score">0</span>
<div className="team">
    <BA className="flag" />
    <span className="teamName"> Bosnia and Herzegovina</span>
  </div>      </div>
        </Link>
          <Link className="maz" href="">

      <div className="matches">
<div className="team">
    <ES className="flag" />
    <span className="teamName">Spain</span>
  </div>       

   <span className="score">0</span>
 <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>10:00 Pm</h5>
         <h5> الدور ال32</h5> 
        </div>

        <span className="score">0</span>
<div className="team">
    <AT className="flag" />
    <span className="teamName">Austria</span>
  </div>      </div>
        </Link>
           
    </div>
  );
}