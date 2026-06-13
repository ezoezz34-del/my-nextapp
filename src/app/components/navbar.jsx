"use client";
import Link from "next/link";
import "./navbar.css";
import { usePathname } from "next/navigation";

 function Navbar() {
    const pathname = usePathname();

  return (
    
       <nav className="navbar">

        <div className="logo">
          News
        </div>
        <div className="left-links">
      <Link className={pathname === "/" ? "active" : ""} href="/">
          Home
        </Link>

        <Link className={pathname === "/about" ? "active" : ""} href="/about">
          About
        </Link>

        <Link className={pathname === "/prvicy" ? "active" : ""} href="/prvicy">
          Privacy Policy
        </Link>

        <Link
          className={pathname === "/contactus" ? "active" : ""}
          href="/contactus"
        >
          Contact Us
        </Link>

        <Link className={pathname === "/news" ? "active" : ""} href="/news">
          فنون
        </Link>

        <Link
          className={pathname === "/Articles" ? "active" : ""}
          href="/Articles"
        >
          رياضه
        </Link>
        
        <Link
          className={pathname === "/match" ? "active" : ""}
          href="/match"
        >
          مباره كاس العالم
        </Link>
        </div>
      </nav>
    
  );
}
export default Navbar;