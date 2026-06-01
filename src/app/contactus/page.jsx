import "./page.css";

import Footer from "../components/footer";
import Navbar from "../components/navbar";

export const metadata = {
  title: "Contact Us",
  description: "news everywhere any where",
};

 function contactus() {
  return (
    <>
    <div className="page">
      {/* <br /> */}
            <Navbar/>
      <br />
      <div className="page2">
        <div className="moa">
         
   <h1 >Contact Us     </h1>
</div>
    <div className="secmoa">
      
        <p >
        You can contact us anytime through the following platforms:
      </p>
<br />
  
      <a className="btn whatsapp"
        href="https://wa.me/201080850073?text=Hello%20I%20need%20help"
        target="_blank"
        // style={{ ...styles.btn, backgroundColor: "#25D366" }}
      >
        💬 Chat on WhatsApp
      </a>

      {/* Facebook */}
      <a className="btn facebook"
        href="https://facebook.com/yourpage"
        target="_blank"
        // style={{ ...styles.btn, backgroundColor: "#1877F2" }}
      >
        📘 Visit Facebook Page
      </a>

      {/* Email */}
      <a className="btn email"
        href="mailto:support@yourwebsite.com"
        // style={{ ...styles.btn, backgroundColor: "black" }}
      >
        📧 Send Email
      </a>

      </div>
      </div>

<br />

            <Footer/>
    <br />

    </div>
  


    </>
  );
}
export default contactus;
// export default function ContactPage() {
//   return (
//     <div style={styles.container}>
//       <h1>Contact Us</h1>

//       <p style={styles.text}>
//         We’re happy to hear from you. If you have any questions, suggestions, or issues,
//         feel free to contact us. We usually reply as soon as possible.
//       </p>

//       <div style={styles.card}>
//         <h3>📧 Email</h3>
//         <p>support@yourwebsite.com</p>
//       </div>

//       <div style={styles.card}>
//         <h3>📱 Phone</h3>
//         <p>+20 10 000 000 00</p>
//       </div>

//       <form style={styles.form}>
//         <input type="text" placeholder="Your Name" style={styles.input} />
//         <input type="email" placeholder="Your Email" style={styles.input} />
//         <textarea placeholder="Your Message" style={styles.textarea}></textarea>
//         <button type="submit" style={styles.button}>
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     maxWidth: "600px",
//     margin: "auto",
//     padding: "20px",
//     fontFamily: "Arial",
//   },
//   text: {
//     marginBottom: "20px",
//     color: "#555",
//   },
//   card: {
//     padding: "10px",
//     marginBottom: "10px",
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//   },
//   form: {
//     marginTop: "20px",
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//   },
//   input: {
//     padding: "10px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//   },
//   textarea: {
//     padding: "10px",
//     height: "120px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//   },
//   button: {
//     padding: "10px",
//     backgroundColor: "black",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
// };
// export default function Contact() {
//   return (
//     <div style={styles.container}>
//       <h1>Contact Us</h1>

//       <p style={styles.text}>
//         You can contact us anytime through the following platforms:
//       </p>

//       {/* WhatsApp */}
//       <a
//         href="https://wa.me/20108850073?text=Hello%20I%20need%20help"
//         target="_blank"
//         style={{ ...styles.btn, backgroundColor: "#25D366" }}
//       >
//         💬 Chat on WhatsApp
//       </a>

//       {/* Facebook */}
//       <a
//         href="https://facebook.com/yourpage"
//         target="_blank"
//         style={{ ...styles.btn, backgroundColor: "#1877F2" }}
//       >
//         📘 Visit Facebook Page
//       </a>

//       {/* Email */}
//       <a
//         href="mailto:support@yourwebsite.com"
//         style={{ ...styles.btn, backgroundColor: "black" }}
//       >
//         📧 Send Email
//       </a>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     maxWidth: "500px",
//     margin: "auto",
//     padding: "20px",
//     fontFamily: "Arial",
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
//   text: {
//     color: "#555",
//   },
//   btn: {
//     padding: "12px",
//     borderRadius: "8px",
//     color: "white",
//     textDecoration: "none",
//     textAlign: "center",
//     fontWeight: "bold",
//   },
// }