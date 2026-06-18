
import {
  GH,       // غانا
PA  ,   
  UZ ,  // أوزبكستان
 CO,     // كولومبيا

  CZ,     
ZA,  // جنوب أفريقيا

  CH,  // سويسرا
  BA       // البوسنة والهرسك

} from "country-flag-icons/react/3x2";
 import Link from "next/link";

export default function Yesterday() {
  return (
    <div className="table">

      <div className="matches">
        <GH style={{ width: "60px" }} />
        <span className="score">1</span>

        <div className="matdel">
          <h3>انتهت المباراة</h3>
        
           </div>

        <span className="score">0</span>
        < PA style={{ width: "60px" }} />
      </div>


      <div className="matches">

        < UZ style={{ width: "60px" }} />
        <span className="score">1</span>

        <div className="matdel">
          <h3>انتهت المباراة</h3>
      
        </div>

        <span className="score">3</span>
        <CO style={{ width: "60px" }} />
      </div>
        <Link className="maz" href="./live">

      <div className="matches">

        < CZ style={{ width: "60px" }} />
        <span className="score">0</span>

        <div className="matdel">
          <h4> تبدأ المباراه</h4>
          <h5>07:00 Am</h5>
         <h5>كأس العالم - المجموعة ا</h5>
        </div>

        <span className="score">1</span>
        < ZA style={{ width: "60px" }} />
      </div>
        </Link>
           <Link className="maz" href="">

      <div className="matches">

        <  CH style={{ width: "60px" }} />
        <span className="score">0</span>

        <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>10:00 Pm</h5>
         <h5>كأس العالم - المجموعة ب</h5>
        </div>

        <span className="score">0</span>
        <  BA style={{ width: "60px" }} />
      </div>
        </Link>
           

    </div>
  );
}