
import {
 QA, // قطر
CA, // كندا

KR, // كوريا الجنوبية
MX, // المكسيك

AU, // أستراليا
US, // الولايات المتحدة

MA, // المغرب
// GB-SCT ,// اسكتلندا (مش دولة مستقلة)
BR, // البرازيل

HT // هايتي
} from "country-flag-icons/react/3x2";
 import Link from "next/link";

export default function Yesterday() {
  return (
    <div className="table">

      <div className="matches">
        < QA  style={{ width: "60px" }} />
        <span className="score">0</span>

        <div className="matdel">
                 <h3>انتهت المباراة</h3>
        
          </div>

        <span className="score">6</span>
        < CA style={{ width: "60px" }} />
      </div>


      <div className="matches">

        < KR  style={{ width: "60px" }} />
        <span className="score">0</span>

        <div className="matdel">
                 <h3>انتهت المباراة</h3>
         
        </div>

        <span className="score">1</span>
        <MX style={{ width: "60px" }} />
      </div>
        <Link className="maz" href="./live">

      <div className="matches">

        < AU style={{ width: "60px" }} />
        <span className="score">0</span>

        <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>10:00 Am</h5>
         <h5>كأس العالم - المجموعة د</h5>
        </div>

        <span className="score">0</span>
        < US style={{ width: "60px" }} />
      </div>
        </Link>
   
           

    </div>
  );
}