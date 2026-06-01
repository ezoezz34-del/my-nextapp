import Link from "next/link";
import "./navbar.css";

 function Navbar() {
  return (
    
       <nav className="navbar">

        <div className="logo">
          News
        </div>
        <div className="left-links">
     
          <Link href="/">Home</Link>

          <Link href="/about">About</Link>

          <Link href="/prvicy">Privacy Policy</Link>
           <Link href="/contactus">Contact Us</Link>


          <Link href="/news">فنون</Link>

          <Link href="/Articles">رياضه</Link>
                    <Link href="/test">test</Link>

       






        </div>
      </nav>
    
  );
}
export default Navbar;