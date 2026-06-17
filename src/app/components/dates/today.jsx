// import {
//   SA, // السعودية
//   UY, // أوروجواي

//   IR, // إيران
//   NZ, // نيوزيلندا

//   FR, // فرنسا
//   SN, // السنغال


// } from "country-flag-icons/react/3x2";
//  import Link from "next/link";
// export default function Tomorrow() {
//   return (
//     <div className="table">

//       <div className="matches">

//         <SA style={{ width: "60px" }} />
//         <span className="score">1</span>

//         <div className="matdel">
//           <h3>انتهت المباراة</h3>
//         </div>

//         <span className="score">1</span>
//         <UY style={{ width: "60px" }} />
//       </div>
        
//           <div className="matches">
//             <IR style={{ width: "60px" }} />
//             <span className="score">2</span>

//             <div className="matdel">
//           <h3>انتهت المباراة</h3>
         
//             </div>
//             <span className="score">2</span>

//             <NZ style={{ width: "60px" }} />
//           </div>
//                      <Link className="maz" href="/live">
//           <div className="matches">
//             <FR style={{ width: "60px" }} />
//             <span className="score">3</span>

//             <div className="matdel">
//           <h3>انتهت المباراة</h3>
      
//             </div>
//             <span className="score">1</span>

//             <SN style={{ width: "60px" }} />
//           </div>
//         </Link>
        

//     </div>
//   );
// }

import {

  IQ, // العراق
  NO, // النرويج

  AR, // الأرجنتين
  DZ, // الجزائر

  AT, // النمسا
  JO, // الأردن

  PT, // البرتغال
  CD, // الكونغو الديمقراطية

  GB_ENG, // إنجلترا
  HR // كرواتيا
} from "country-flag-icons/react/3x2";
 import Link from "next/link";

export default function Yesterday() {
  return (
    <div className="table">

      <div className="matches">
        <IQ style={{ width: "60px" }} />
        <span className="score">1</span>

        <div className="matdel">
          <h3>انتهت المباراة</h3>
          
            </div>

        <span className="score">3</span>
        < NO style={{ width: "60px" }} />
      </div>
              

        <Link className="maz" href="./live">

      <div className="matches">

        < AR style={{ width: "60px" }} />
        <span className="score">0</span>

        <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>04:00 Am</h5>
         <h5>كأس العالم - المجموعة ي</h5>
        </div>

        <span className="score">0</span>
        <DZ style={{ width: "60px" }} />
      </div>
        </Link>
        <Link className="maz" href="">

      <div className="matches">

        < AT style={{ width: "60px" }} />
        <span className="score">0</span>

        <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>07:00 Am</h5>
         <h5>كأس العالم - المجموعة ي</h5>
        </div>

        <span className="score">0</span>
        < JO style={{ width: "60px" }} />
      </div>
        </Link>
           <Link className="maz" href="">

      <div className="matches">

        <  PT style={{ width: "60px" }} />
        <span className="score">0</span>

        <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>08:00 Pm</h5>
         <h5>كأس العالم - المجموعة ك</h5>
        </div>

        <span className="score">0</span>
        <  CD style={{ width: "60px" }} />
      </div>
        </Link>
           <Link className="maz" href="">

      <div className="matches">

        <   GB_ENG style={{ width: "60px" }} />
        <span className="score">0</span>

        <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>11:00 Pm</h5>
         <h5>كأس العالم - المجموعة ل </h5>
        </div>

        <span className="score">0</span>
        <   HR style={{ width: "60px" }} />
      </div>
        </Link>

    </div>
  );
}