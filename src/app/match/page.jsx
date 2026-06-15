
// "use client";
// import "./page.css";
// import Search from "../components/search";
// import { BR } from "country-flag-icons/react/3x2";
// import { MA } from "country-flag-icons/react/3x2";
// import { HT } from "country-flag-icons/react/3x2";
// import { CH } from "country-flag-icons/react/3x2";
// import { GB_SCT } from "country-flag-icons/react/3x2";
// import { QA } from "country-flag-icons/react/3x2";
// import { AU } from "country-flag-icons/react/3x2";
// import { TR } from "country-flag-icons/react/3x2";
// import Link from "next/link";
// import Navbar from "../components/navbar";
// import Footer from "../components/footer";

//  function Match() {


//   return (
//     <div className="page">
// <Navbar/>
// <br />

//           <Search />
//           <br />
//           <div className="table">
            
//       <Link
//           key={post.id}
// href={`/details/${post.slug}`}             >
//     <div className="matches">
        
//             <CH style={{ width: "60px" }} />
//             <div className="matdel">
//                 <h5> لم تبدا بعد</h5>
//                 <h5>
//                     10:00
//                 </h5>
//                 <h5>
//                     كاس العالم مجموعه ب
//                 </h5>

                

//             </div>
//                         <HT style={{ width: "60px" }} />

        

//     </div>
//     <link/>
//     <br />
//          <Link
//           key={post.id}
// href={`/details/${post.slug}`}             >
//      <div className="matches">
        
//             <BR style={{ width: "60px" }} />
//             <div className="matdel">
//                 <h5> لم تبدا بعد</h5>
//                 <h5>
//                     1:00
//                 </h5>
//                 <h5>
//                     كاس العالم مجموعه ب
//                 </h5>

                

//             </div>
//                         <MA style={{ width: "60px" }} />

        

//     </div>
//     </Link>
//     <br />
//        <Link
//           key={post.id}
// href={`/details/${post.slug}`}             >
//  <div className="matches">
        
//             <GB_SCT style={{ width: "60px" }} />
//             <div className="matdel">
//                 <h5> لم تبدا بعد</h5>
//                 <h5>
//                     4:00
//                 </h5>
//                 <h5>
//                     كاس العالم مجموعه ب
//                 </h5>

                

//             </div>
//                         <QA style={{ width: "60px" }} />

        

//     </div>
//     </Link>
//     <br />
//         <Link
//           key={post.id}
// href={`/details/${post.slug}`}             >
//  <div className="matches">
        
//             <AU style={{ width: "60px" }} />
//             <div className="matdel">
//                 <h5> لم تبدا بعد</h5>
//                 <h5>
//                     10:00
//                 </h5>
//                 <h5>
//                     كاس العالم مجموعه ب
//                 </h5>

                

//             </div>
//                         <TR style={{ width: "60px" }} />

        

//     </div>
// </Link>
// </div>
//           <Footer/>

//     </div>
//   );
// }
// export default  Match;
"use client";

import "./page.css";
import Search from "../components/search";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

import {
  DE, // ألمانيا
  CW, // كوراساو
  JP, // اليابان
  NL, // هولندا
  EC, // الإكوادور
  CI, // كوت ديفوار
  TN, // تونس
  SE, // السويد
  CV, // الرأس الأخضر
  ES, // إسبانيا
  EG, // مصر
  BE  // بلجيكا
} from "country-flag-icons/react/3x2";

function Match() {
  return (
    <div className="page">
      <Navbar />

      <br />

      <Search />

      <br />

      <div className="table">

          <div className="matches">
            <DE style={{ width: "60px" }} />
            <span className="score">7</span>

            <div className="matdel">
<h3 >انتهت المباراة  </h3>
              {/* <h5>08:00 pm</h5>
              <h5>كأس العالم - المجموعة ه</h5> */}
            </div>
            <span className="score">1</span>



            <CW style={{ width: "60px" }} />
          </div>


          <div className="matches">
            <JP style={{ width: "60px" }} />
            <span className="score">2</span>

            <div className="matdel">
<h3 >انتهت المباراة  </h3>
           
            </div>
            <span className="score">2</span>

            <NL style={{ width: "60px" }} />
          </div>

          <div className="matches">
            <EC style={{ width: "60px" }} />
            <span className="score">0</span>

            <div className="matdel">
<h3 >انتهت المباراة  </h3>
             
            </div>
            <span className="score">1</span>

            <CI style={{ width: "60px" }} />
          </div>


        <Link className="maz" href="">
          <div className="matches">
            <TN style={{ width: "60px" }} />
            <span className="score">1</span>

            <div className="matdel">
              <h3 >انتهت المباراة  </h3>

              {/* <h5>05:00 am</h5>
              <h5>كأس العالم - المجموعة و</h5> */}
            </div>
            <span className="score">3</span>

            <SE style={{ width: "60px" }} />
          </div>
        </Link>
          <Link className="maz" href="/live">
          <div className="matches">
            <CV style={{ width: "60px" }} />
            <span className="score">0</span>

            <div className="matdel">
              <h5>لم تبدأ بعد</h5>
              <h5>07:00 pm</h5>
              <h5>كأس العالم - المجموعة ح</h5>
            </div>
            <span className="score">0</span>

            <ES style={{ width: "60px" }} />
          </div>
        </Link>
          <Link className="maz" href="">
          <div className="matches">
            <EG style={{ width: "60px" }} />
            <span className="score">0</span>

            <div className="matdel">
              <h5>لم تبدأ بعد</h5>
              <h5>10:00 pm</h5>
              <h5>كأس العالم - المجموعة ز</h5>
            </div>
            <span className="score">0</span>

            <BE style={{ width: "60px" }} />
          </div>
        </Link>

      </div>

      <Footer />
    </div>
  );
}

export default Match;