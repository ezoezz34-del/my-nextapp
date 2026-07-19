// import "./page.css";

// export default function ApplyPage() {
//   return (
//     <div className="apply-page">
//       <div className="apply-card">
//         <h1>Job Application</h1>
//         <p>املأ البيانات التالية للتقديم على الوظيفة</p>

//         <form className="apply-form">
//           <div className="input-group">
//             <label>الاسم بالكامل</label>
//             <input type="text" placeholder="اكتب اسمك" />
//           </div>

//           <div className="input-group">
//             <label>السن</label>
//             <input type="number" placeholder="اكتب سنك" />
//           </div>

//           <div className="input-group">
//             <label>المؤهل الدراسي</label>
//             <input type="text" placeholder="مثال: بكالوريوس تجارة" />
//           </div>

//           <div className="input-group">
//             <label>المهارات (Skills)</label>
//             <textarea
//               rows="4"
//               placeholder="HTML - CSS - React - Excel ..."
//             ></textarea>
//           </div>

//           <div className="input-group">
//             <label>هل عملت من قبل؟</label>
//             <textarea
//               rows="4"
//               placeholder="اكتب خبراتك السابقة إن وجدت"
//             ></textarea>
//           </div>

//           <button type="submit">
//             تقديم الطلب
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
 import "./page.css";

export default function ApplyPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // هنا هتحفظ البيانات في Firebase بعدين

    setShowSuccess(true);
  };

  return (
    <div className="apply-page">
      <div className="apply-card">
        <h1>Job Application</h1>
        <p>املأ البيانات التالية للتقديم على الوظيفة</p>

        <form className="apply-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>الاسم بالكامل</label>
            <input type="text" required />
          </div>

          <div className="input-group">
            <label>السن</label>
            <input type="number" required />
          </div>

          <div className="input-group">
            <label>المؤهل الدراسي</label>
            <input type="text" required />
          </div>

          <div className="input-group">
            <label>Skills</label>
            <textarea rows="4" required />
          </div>

          <div className="input-group">
            <label>خبرات سابقة</label>
            <textarea rows="4" />
          </div>

          <div className="input-group">
            <label>         💬 Chat on WhatsApp رفم </label>
            <input type="text" required />
          </div>
          <button type="submit">Submit Application</button>
        </form>
      </div>

      {showSuccess && (
        <div className="success-overlay">
          <div className="success-modal">
            <div className="check-circle">✓</div>

            <h2>Congratulations!</h2>

            <p>
              Your application has been submitted successfully.
            </p>

            <button onClick={() => setShowSuccess(false)}>
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}