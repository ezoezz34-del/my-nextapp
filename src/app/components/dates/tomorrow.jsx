
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
        <Link className="maz" href="">

      <div className="matches">
        <GH style={{ width: "60px" }} />
        <span className="score">0</span>

        <div className="matdel">
   <h5>لم تبدأ بعد</h5>
          <h5>02:00 Am</h5>
         <h5>كأس العالم - المجموعة ل</h5>        </div>

        <span className="score">0</span>
        < PA style={{ width: "60px" }} />
      </div>
              </Link>

        <Link className="maz" href="">

      <div className="matches">

        < UZ style={{ width: "60px" }} />
        <span className="score">0</span>

        <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>05:00 Am</h5>
         <h5>كأس العالم - المجموعة ك</h5>
        </div>

        <span className="score">0</span>
        <CO style={{ width: "60px" }} />
      </div>
        </Link>
        <Link className="maz" href="">

      <div className="matches">

        < CZ style={{ width: "60px" }} />
        <span className="score">0</span>

        <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>07:00 Am</h5>
         <h5>كأس العالم - المجموعة ا</h5>
        </div>

        <span className="score">0</span>
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