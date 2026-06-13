
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

import { BR } from "country-flag-icons/react/3x2";
import { MA } from "country-flag-icons/react/3x2";
import { HT } from "country-flag-icons/react/3x2";
import { CH } from "country-flag-icons/react/3x2";
import { GB_SCT } from "country-flag-icons/react/3x2";
import { QA } from "country-flag-icons/react/3x2";
import { AU } from "country-flag-icons/react/3x2";
import { TR } from "country-flag-icons/react/3x2";

function Match() {
  return (
    <div className="page">
      <Navbar />

      <br />

      <Search />

      <br />

      <div className="table">

        <Link  className="maz" href="/details/switzerland-haiti">
          <div className="matches">
            <CH style={{ width: "60px" }} />

            <div className="matdel">
              <h5>لم تبدأ بعد</h5>
              <h5>10:00</h5>
              <h5>كأس العالم - المجموعة ب</h5>
            </div>

            <HT style={{ width: "60px" }} />
          </div>
        </Link>

        <br />

        <Link className="maz" href="/details/brazil-morocco">
          <div className="matches">
            <BR style={{ width: "60px" }} />

            <div className="matdel">
              <h5>لم تبدأ بعد</h5>
              <h5>1:00</h5>
              <h5>كأس العالم - المجموعة ب</h5>
            </div>

            <MA style={{ width: "60px" }} />
          </div>
        </Link>

        <br />

        <Link className="maz" href="/news">
          <div className="matches">
            <GB_SCT style={{ width: "60px" }} />

            <div className="matdel">
              <h5>لم تبدأ بعد</h5>
              <h5>4:00</h5>
              <h5>كأس العالم - المجموعة ب</h5>
            </div>

            <QA style={{ width: "60px" }} />
          </div>
        </Link>

        <br />

        <Link className="maz" href="/details/australia-turkey">
          <div className="matches">
            <AU style={{ width: "60px" }} />

            <div className="matdel">
              <h5>لم تبدأ بعد</h5>
              <h5>10:00</h5>
              <h5>كأس العالم - المجموعة ب</h5>
            </div>

            <TR style={{ width: "60px" }} />
          </div>
        </Link>

      </div>

      <Footer />
    </div>
  );
}

export default Match;