
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


export default function Yesterday() {
  return (
    <div className="table">
        
      {/* <div className="matches">
<div className="team">
    <GB className="flag" />
    <span className="teamName">England</span>

  </div>       
   <span className="score">3</span>
 <div className="matdel">
 <h3>انتهت المباراة</h3>         

        </div>
        <span className="score">2</span>
<div className="team">
    <MX className="flag" />
    <span className="teamName">Mexico</span>
  </div>      </div>
      <div className="matches">
<div className="team">
    <PT className="flag" />
 
    <span className="teamName">Portugal</span>
  </div>     
    
   <span className="score">0</span>
 <div className="matdel">
  <h3>انتهت المباراة</h3>         

        </div>
        <span className="score">1</span>
<div className="team">
    <ES className="flag" />
    <span className="teamName">Spain</span>
  </div>      </div> */}
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

{/* Morocco vs France */}
    <div className="matches">
      <div className="team">
        <MA className="flag" />
        <span className="teamName">Morocco</span>
      </div>

      <span className="score">0</span>

      <div className="matdel">
                  <h3>انتهت المباراة</h3>         
      </div>

      <span className="score">2</span>

      <div className="team">
        <FR className="flag" />
        <span className="teamName">France</span>
      </div>
    </div>
    </div>
  );
}