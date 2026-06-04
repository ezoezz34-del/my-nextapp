
"use client";
import "./page.css";
import Search from "../components/search";

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
<br />
          <Search />

      <h3>اخبار الفن </h3>
<div className="all">
 <section className="heroo">
      
      {currentArticles.map((post) => (

        <Link
          key={post.id}
href={`/detailss/${post.slug}`}             >

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