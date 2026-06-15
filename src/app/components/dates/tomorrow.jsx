import {
  SA, // السعودية
  UY, // أوروجواي

  IR, // إيران
  NZ, // نيوزيلندا

  FR, // فرنسا
  SN, // السنغال


} from "country-flag-icons/react/3x2";
 import Link from "next/link";
export default function Tomorrow() {
  return (
    <div className="table">
                      <Link className="maz" href="">

      <div className="matches">

        <SA style={{ width: "60px" }} />
        <span className="score">0</span>

        <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>01:00 Am</h5>
         <h5>كأس العالم - المجموعة ح</h5>
        </div>

        <span className="score">0</span>
        <UY style={{ width: "60px" }} />
      </div>
        </Link>
              <Link className="maz" href="">
          <div className="matches">
            <IR style={{ width: "60px" }} />
            <span className="score">0</span>

            <div className="matdel">
                <h5>لم تبدأ بعد</h5>
          <h5>04:00 Am</h5>
         <h5>كأس العالم - المجموعة ز</h5>
            </div>
            <span className="score">0</span>

            <NZ style={{ width: "60px" }} />
          </div>
        </Link>
                     <Link className="maz" href="">
          <div className="matches">
            <FR style={{ width: "60px" }} />
            <span className="score">0</span>

            <div className="matdel">
               <h5>لم تبدأ بعد</h5>
          <h5>10:00 Pm</h5>
         <h5>كأس العالم - المجموعة ط</h5>
            </div>
            <span className="score">0</span>

            <SN style={{ width: "60px" }} />
          </div>
        </Link>
        

    </div>
  );
}