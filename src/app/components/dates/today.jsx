
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
        
           {/* <Link className="maz" href="./live2">
      <div className="matches">
<div className="team">
    <US className="flag" />
    <span className="teamName"> United States</span>
  </div>       
   <span className="score">1</span>
 <div className="matdel">
   <h3>انتهت المباراة</h3>         

        </div>
        <span className="score">4</span>
<div className="team">
    <BE className="flag" />
    <span className="teamName">Belgium</span>
  </div>      </div>
        </Link>
           <Link className="maz" href="./live">
      <div className="matches">
<div className="team">
    <EG className="flag" />
 
    <span className="teamName">Egypt</span>
  </div>     
   <span className="score">2</span>
 <div className="matdel">
   <h3>انتهت المباراة</h3>         

        </div>
        <span className="score">3</span>
<div className="team">
    <AR className="flag" />
    <span className="teamName">Argentina</span>
  </div>      </div>
        </Link>  

       <div className="matches">
<div className="team">
    <CH className="flag" />
    <span className="teamName">Switzerland</span>
  </div>       

   <span className="score">0</span>
 <div className="matdel">
           <h3>انتهت المباراة</h3>         
         <h5>  انتهت رجلات ترجيح 4-3 لصالح سويسرا</h5> 
        </div>

        <span className="score">0</span>
<div className="team">
    <CO className="flag" />
    <span className="teamName">Colombia</span>
  </div>      </div>

 */}
  {/* Spain vs United States */}
 <Link className="maz" href="">
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
  </Link>

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
   <Link className="maz" href="./live">
    <div className="matches">
      <div className="team">
        <NO className="flag" />
        <span className="teamName">Norway</span>
      </div>

      <span className="score">0</span>

      <div className="matdel">
        <h5> تبدأ المباراه</h5>
        <h5>12:00 Am</h5>
        <h5>ربع النهائي</h5>
      </div>

      <span className="score">0</span>

      <div className="team">
        <GB className="flag" />
        <span className="teamName">England</span>
      </div>
    </div>
  </Link>
     <Link className="maz" href="">
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
  </Link> 

    </div>
  );
}