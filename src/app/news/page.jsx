// import Navbar from "../components/navbar";

// export default function Articles() {

//   const articles = [
//     "How AI is Changing the Future",
//     "The Rise of Modern Web Design",
//     "Best Practices in Development",
//   ];

//   return (
//     <main >
//       <Navbar/>

//       <h1 className="text-5xl font-bold mb-10">
//         Articles
//       </h1>

//       <div className="space-y-6">

//         {articles.map((article, index) => (

//           <div
//             key={index}
//             className="bg-white p-6 rounded-2xl shadow"
//           >
//             <h2 className="text-2xl font-semibold">
//               {article}
//             </h2>
//           </div>

//         ))}

//       </div>

//     </main>
//   );
// }
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import "./page.css"
// import { newss } from "../data/newss";

//  function Test() {

//   const [search, setSearch] = useState("");

//   const filteredNews = newss.filter((item) =>
//     item.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>

//       <input
//         type="text"
//         placeholder="Search article..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <div>
//         {filteredNews.map((item) => (
//           <Link
//             key={item.id}
//         href={`/details/${item.id}`}             >

//             <div
//               style={{
//                 border: "1px solid black",
//                 marginTop: "20px",
//                 padding: "20px",
//                 cursor: "pointer",
//               }}
//             >
//               <h2>{item.title}</h2>
//               <p>{item.desc}</p>
//             </div>
//           </Link>
//         ))}
//       </div>

//     </div>
//   );
// }
// export default Test;
"use client";
import "./page.css";

import { useState } from "react";
import Link from "next/link";
import { fmnews } from "../data/fmnews";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

 function Fmnew() {
 const sortedArticles = [...fmnews].sort(
    (a, b) =>
      new Date(b.createdAt) -
      new Date(a.createdAt)
  );

  // عدد المقالات في الصفحة
  const articlesPerPage = 18;

  // الصفحة الحالية
  const [currentPage, setCurrentPage] =
    useState(1);

  // عدد الصفحات
  const totalPages = Math.ceil(
    sortedArticles.length / articlesPerPage
  );

  // بداية المقالات
  const startIndex =
    (currentPage - 1) * articlesPerPage;

  // المقالات الحالية
  const currentArticles =
    sortedArticles.slice(
      startIndex,
      startIndex + articlesPerPage
    );

  return (
    <div className="page">
<Navbar/>
      <h3>اخبار الفن </h3>
<div className="all">
 <section className="heroo">
      
      {currentArticles.map((post) => (

        <Link
          key={post.id}
href={`/detailss/${post.id}`}             >

          <div className="divv">

<br />
            <h2>{post.title}</h2>
<br />
            <p>{post.desc}</p>

          </div>

        </Link>

      ))}
    

   
        </section>
      
        </div>
          <div className="pagination">

        {Array.from(
          { length: totalPages },
          (_, i) => (

            <button
              key={i}
              onClick={() =>
                setCurrentPage(i + 1)
              }

              className={
                currentPage === i + 1
                  ? "active"
                  : ""
              }
            >
              {i + 1}
            </button>

          )
        )}
                 </div>
<br />
<Footer/>
<br />
    </div>
  );
}
export default  Fmnew;