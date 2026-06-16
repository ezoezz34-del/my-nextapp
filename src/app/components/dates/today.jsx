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

      <div className="matches">

        <SA style={{ width: "60px" }} />
        <span className="score">1</span>

        <div className="matdel">
          <h3>انتهت المباراة</h3>
        </div>

        <span className="score">1</span>
        <UY style={{ width: "60px" }} />
      </div>
        
          <div className="matches">
            <IR style={{ width: "60px" }} />
            <span className="score">2</span>

            <div className="matdel">
          <h3>انتهت المباراة</h3>
         
            </div>
            <span className="score">2</span>

            <NZ style={{ width: "60px" }} />
          </div>
                     <Link className="maz" href="/live">
          <div className="matches">
            <FR style={{ width: "60px" }} />
            <span className="score">0</span>

            <div className="matdel">
               <h4>  تبدا المباراه </h4>
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