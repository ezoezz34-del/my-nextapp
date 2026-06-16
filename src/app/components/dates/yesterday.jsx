

// import Link from "next/link";
// import {
//   DE,
//   CW,
//   JP,
//   NL,
//   EC,
//   CI,
//   TN,
//   SE,
//   CV,
//   ES,
//   EG,
//   BE
// } from "country-flag-icons/react/3x2";

// export default function Today() {
//   return (
//     <div className="table">

//       <div className="matches">
//         <DE style={{ width: "60px" }} />
//         <span className="score">7</span>

//         <div className="matdel">
//           <h3>انتهت المباراة</h3>
//         </div>

//         <span className="score">1</span>
//         <CW style={{ width: "60px" }} />
//       </div>

//       <div className="matches">
//         <JP style={{ width: "60px" }} />
//         <span className="score">2</span>

//         <div className="matdel">
//           <h3>انتهت المباراة</h3>
//         </div>

//         <span className="score">2</span>
//         <NL style={{ width: "60px" }} />
//       </div>

//       <div className="matches">
//         <EC style={{ width: "60px" }} />
//         <span className="score">0</span>

//         <div className="matdel">
//           <h3>انتهت المباراة</h3>
//         </div>

//         <span className="score">1</span>
//         <CI style={{ width: "60px" }} />
//       </div>

//         <div className="matches">
//           <CV style={{ width: "60px" }} />
//           <span className="score">0</span>

//           <div className="matdel">
//             {/* <h5>لم تبدأ بعد</h5> */}
//           <h3>انتهت المباراة</h3>
           
//           </div>

//           <span className="score">0</span>
//           <ES style={{ width: "60px" }} />
//         </div>
      
//       <Link className="maz" href="/live">

//       <div className="matches">
//         <EG style={{ width: "60px" }} />
//         <span className="score">1</span>

//         <div className="matdel">
//           <h3>انتهت المباراة</h3>
       
//         </div>

//         <span className="score">1</span>
//         <BE style={{ width: "60px" }} />
//       </div>
//       </Link>

//     </div>
//   );
// }
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
          <div className="matches">
            <FR style={{ width: "60px" }} />
            <span className="score">3</span>

            <div className="matdel">
          <h3>انتهت المباراة</h3>
      
            </div>
            <span className="score">1</span>

            <SN style={{ width: "60px" }} />
          </div>
        

    </div>
  );
}