
import {

  MA, // Morocco
  BR, // Brazil
 NO , // Norway
PY ,// Paraguay
  FR, // France
  SE, // Sweden
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
    <GB className="flag" />

    <span className="teamName">England</span>
  </div>     
   <span className="score">4</span>
 <div className="matdel">
   <h3>ابتدت المباراة</h3>         

        </div>
        <span className="score">0</span>
<div className="team">
    <AR className="flag" />
    <span className="teamName">France</span>
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
        <h5> النهائي</h5>
        </div>
        <span className="score">0</span>
<div className="team">
    <AR className="flag" />  

    <span className="teamName">Argentina</span>
  </div>     

   </div>
    </Link>  




 
  {/* Spain vs United States */}
 {/* <Link className="maz" href="">
    <div className="matches">
      <div className="team">
        <NO className="flag" />
        <span className="teamName">Norway</span>
      </div>

      <span className="score">0</span>

      <div className="matdel">
        <h5>لم تبدأ بعد</h5>
        <h5>12:00 Am</h5>
        <h5>ربع النهائي</h5>
      </div>

      <span className="score">0</span>

      <div className="team">
        <GB className="flag" />
        <span className="teamName">England</span>
      </div>
    </div>
  </Link> */}

  {/* Argentina vs Switzerland */}
   {/* <Link className="maz" href="">
    <div className="matches">
      <div className="team">
        <AR className="flag" />
        <span className="teamName">Argentina</span>
      </div>

      <span className="score">0</span>

      <div className="matdel">
        <h5>لم تبدأ بعد</h5>
        <h5>04:00 Am</h5>
        <h5>ربع النهائي</h5>
      </div>

      <span className="score">0</span>

      <div className="team">
        <CH className="flag" />
        <span className="teamName">Switzerland</span>
      </div>
    </div>
  </Link>  */}
 

    </div>
  );
}