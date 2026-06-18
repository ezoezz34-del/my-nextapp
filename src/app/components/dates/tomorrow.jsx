
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
        <Link className="maz" href="">

      <div className="matches">
        < QA  style={{ width: "60px" }} />
        <span className="score">0</span>

        <div className="matdel">
   <h5>لم تبدأ بعد</h5>
          <h5>01:00 Am</h5>
         <h5>كأس العالم - المجموعة ب</h5>        </div>

        <span className="score">0</span>
        < CA style={{ width: "60px" }} />
      </div>
              </Link>

        <Link className="maz" href="">

      <div className="matches">

        < KR  style={{ width: "60px" }} />
        <span className="score">0</span>

        <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>04:00 Am</h5>
         <h5>كأس العالم - المجموعة ا</h5>
        </div>

        <span className="score">0</span>
        <MX style={{ width: "60px" }} />
      </div>
        </Link>
        <Link className="maz" href="">

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