// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import "./search.css";
// import { newss } from "../data/newss";
// import { fmnews } from "../data/fmnews";

//  function Search() {

//   const [search, setSearch] = useState("");


//   const allNews = [...newss, ...fmnews];

//   const filteredNews = allNews.filter((item) =>
//     item.title.toLowerCase().includes(search.toLowerCase())
//   );
//   return (
//     <div className="nas">

//       <input className="in"
//         type="text"
//         placeholder="Search article..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {search.length > 0 && (

//         <div className="mazen">

//           {filteredNews.map((item) => (

//             <Link className="oki"
//               key={item.id}
//                     href={`/details/${item.id}`}             >

//               <div 
//               className="results"
//               >
//                 <h2>{item.title}</h2>
//                 <br />
//               </div>

//             </Link>

//           ))}

//         </div>

//       )}
      
     


//     </div>
//   );
// }
//          export default Search;
"use client";

import { useState } from "react";
import Link from "next/link";
import "./search.css";
import { newss } from "../data/newss";
import { fmnews } from "../data/fmnews";

function Search() {
  const [search, setSearch] = useState("");

  const allNews = [
    ...newss.map((item) => ({ ...item, source: "newss" })),
    ...fmnews.map((item) => ({ ...item, source: "fmnews" })),
  ];

  const filteredNews = allNews.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="nas">
      <input
        className="in"
        type="text"
        placeholder="Search article..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search.length > 0 && (
        <div className="mazen">
          {filteredNews.length === 0 ? (
            <div className="results">
              <h2>لا يوجد نتائج</h2>
            </div>
          ) : (
            filteredNews.map((item) => (
              <Link
                className="oki"
                key={` ${item.source}-${item.id}`
                 }
                href={
                  item.source === "newss"
                    ?`/details/${item.id}`

                    : `/detailss/${item.id}`
                }
            >
                <div className="results">
                  <h4>{item.title}</h4>
                  <br />
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Search;