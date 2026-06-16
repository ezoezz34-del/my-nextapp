
"use client";
import { useState } from "react";
import "./page.css";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Search from "../components/search";

import Today from "../components/dates/today";
import Yesterday from "../components/dates/yesterday";
import Tomorrow from "../components/dates/tomorrow";

function Match() {
  const [day, setDay] = useState("today");

  return (
    <div className="page">
      <Navbar />

      <br />

      <Search />

      <div className="days">
       <button
          className={day === "tomorrow" ? "active" : ""}
          onClick={() => setDay("tomorrow")}
        >
          الغد
        </button>

        <button
          className={day === "today" ? "active" : ""}
          onClick={() => setDay("today")}
        >
          اليوم
        </button>

      
           <button
          className={day === "yesterday" ? "active" : ""}
          onClick={() => setDay("yesterday")}
        >
          أمس
        </button>
      </div>

      {day === "yesterday" && <Yesterday />}
      {day === "today" && <Today />}
      {day === "tomorrow" && <Tomorrow />}

      <Footer />
    </div>
  );
}
export default Match;