"use client";

import { useState } from "react";
import "./page.css";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { newss } from "../data/newss";
import { fmnews } from "../data/fmnews";

import Search from "../components/search";
import Image from "next/image";


function First() {
 
  
  const sortedArticles = [...newss].sort(
    (a, b) =>
      new Date(b.createdAt) -
      new Date(a.createdAt)
  );

  // عدد المقالات في الصفحة
  const articlesPerPage = 6;

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
    <div className="appp">
        <Navbar />
        <br />
          <Search />
      
      

      <div className="hero">
<div className="more">
            <Link className="sami" href="/Articles">show more</Link>

          <h1> رياضه</h1>
</div>
        <section className="heroo">
      
      {currentArticles.map((post) => (

        <Link
          key={post.slug}
href={`/details/${post.slug}`}             >

          <div className="divv">
            {post.image && (

  <Image
      src={post.image}
      alt={post.title}
      width={600}
      height={338}
      sizes="(max-width: 768px) 100vw, 600px"
        loading="eager"
  priority
      quality={75}
    />
    )}
<br />
            <h2>{post.title}</h2>
<br />
            <p>{post.desc}</p>

          </div>

        </Link>

      ))}
    



   
        </section>
        <br />
<div className="more">
            <Link  className="sami" href="/news">show more</Link>

          <h1> فنون</h1>
</div>
          <section className="heroo">
      
      {fmnews.map((post) => (

        <Link
          key={post.id}
href={`/detailss/${post.slug}`}             >

          <div className="divv">
                <Image
                              src={post.image}
                              alt={post.title}
                              width={600}
                              height={338}
                              sizes="(max-width: 768px) 100vw, 600px"
                              quality={75}
                              loading="eager"
                            />

            <h2>{post.title}</h2>

            <p>{post.desc}</p>

          </div>

        </Link>

      ))}

        </section>

     
      
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

</div>

      </div>
      <br />
 
        <Footer />

    </div>
    // </div>
           

  );
}

export default First;
