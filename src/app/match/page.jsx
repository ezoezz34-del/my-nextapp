// "use client";
// import { useState } from "react";
// import "./page.css";

// import Navbar from "../components/navbar";
// import Footer from "../components/footer";
// import Search from "../components/search";

// import Today from "../components/dates/today";
// import Yesterday from "../components/dates/yesterday";
// import Tomorrow from "../components/dates/tomorrow";

// function Match() {
//   const [day, setDay] = useState("today");

//   return (
//     <div className="page">
//       <Navbar />

//       <br />

//       <Search />

//       <div className="days">
//        <button
//           className={day === "tomorrow" ? "active" : ""}
//           onClick={() => setDay("tomorrow")}
//         >
//           الغد
//         </button>

//         <button
//           className={day === "today" ? "active" : ""}
//           onClick={() => setDay("today")}
//         >
//           اليوم
//         </button>

      
//            <button
//           className={day === "yesterday" ? "active" : ""}
//           onClick={() => setDay("yesterday")}
//         >
//           أمس
//         </button>
//       </div>

//       {day === "yesterday" && <Yesterday />}
//       {day === "today" && <Today />}
//       {day === "tomorrow" && <Tomorrow />}

//       <Footer />
//     </div>
//   );
// }
// export default Match;
 import Match from "./pageserv"
 export const metadata = {
  title:
    "مشاهدة مباريات كأس العالم 2026 بث مباشر HD بدون إعلانات مزعجة | جدول المباريات والنتائج",
    
  description:
    "شاهد مباريات كأس العالم 2026 بث مباشر بجودة HD وبدون إعلانات مزعجة، مع جدول المباريات، النتائج المباشرة، ترتيب المجموعات، أخبار المنتخبات والتغطية الكاملة للبطولة.",

  keywords: [
    "كأس العالم 2026",
    "مشاهدة كأس العالم 2026",
    "بث مباشر كأس العالم",
    "مباريات كأس العالم اليوم",
    "جدول مباريات كأس العالم 2026",
    "نتائج كأس العالم 2026",
    "منتخب مصر كأس العالم",
    "World Cup 2026",
    "FIFA World Cup 2026",
    "بث مباشر مباريات اليوم",
    "مباريات كرة القدم",
    "مشاهدة المباريات بدون إعلانات"
  ],

  openGraph: {
    title:
      "مشاهدة مباريات كأس العالم 2026 بث مباشر HD بدون إعلانات مزعجة",
    description:
      "تابع جميع مباريات كأس العالم 2026 لحظة بلحظة مع النتائج المباشرة وجدول المباريات وترتيب المجموعات.",
    type: "website",
    locale: "ar_EG",
     image:"/images/شعار_كأس_العالم_2026..webp",

  },

  twitter: {
    card: "summary_large_image",
    title:
      "مشاهدة مباريات كأس العالم 2026 بث مباشر HD بدون إعلانات مزعجة",
    description:
      "جدول المباريات والنتائج المباشرة وأخبار كأس العالم 2026.",
  },

  robots: {
    index: true,
    follow: true,
  },
};
 function Matchd() {
  return <Match />;
}
export default Matchd;