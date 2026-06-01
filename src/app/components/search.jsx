"use client";

import { useState } from "react";
import Link from "next/link";
import "./search.css";
import { newss } from "../data/newss";

 function Search() {

  const [search, setSearch] = useState("");

  const filteredNews = newss.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="nas">

      <input className="in"
        type="text"
        placeholder="Search article..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search.length > 0 && (

        <div className="mazen">

          {filteredNews.map((item) => (

            <Link className="oki"
              key={item.id}
                    href={`/details/${item.id}`}             >

              <div 
              className="results"
              >
                <h2>{item.title}</h2>
                <br />
              </div>

            </Link>

          ))}

        </div>

      )}
      
     


    </div>
  );
}
         export default Search;