import "./globals.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

// export const metadata = {
//   title: "first project",
//   description: "Modern News Website",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >


        {children}


      </body>
    </html>
  );
}