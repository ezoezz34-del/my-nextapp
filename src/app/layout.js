import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Script from "next/script";

 export const metadata = {
  metadataBase: new URL("https://my-nextapp-nine.vercel.app/"),
  title:
    "م أخبار المنتخبات والتغطية الكاملة للبطولر HD بدون إعلانات مزعجة | جدول المباريات والنتائج",
  
  description:
    "شاهد مباريات كأس العالم 2026 بث مباشر بجودة HD وبدون إعلانات مزعجة، مع جدول المباريات، النتائج المباشرة، ترتيب المجموعات، أخبار المنتخبات والتغطية الكاملة للبطولة.",

  keywords: [
    "كأس العالم 2026",
    "مشاهدة كأس العالم 2026",
    "بث مباشر كأس العالم",
    "مباريات كأس العالم اليوم",
    "جدول مباريات كأس العالم 2026",
    "نتائج كأس العالم 2026",
    "منتخب مصر كأس العالم",
    "World Cup 2026",
    "FIFA World Cup 2026",
    "بث مباشر مباريات اليوم",
    "مباريات كرة القدم",
        "مباريات كرة القدم اخبار",

    "مشاهدة المباريات بدون إعلانات"
  ],

  openGraph: {
    title:
      "مشاهدة مباريات كأس العالم 2026 بث مباشر HD بدون إعلانات مزعجة",
    description:
      "تابع جميع مباريات كأس العالم 2026 لحظة بلحظة مع النتائج المباشرة وجدول المباريات وترتيب المجموعات.",
    type: "website",
    locale: "ar_EG",
     image:"/images/شعار_كأس_العالم_2026..webp",

  },

  twitter: {
    card: "summary_large_image",
    title:
      "مشاهدة مباريات كأس العالم 2026 بث مباشر HD بدون إعلانات مزعجة",
    description:
      "جدول المباريات والنتائج المباشرة وأخبار كأس العالم 2026.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
          id="monetag-popunder"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var s = document.createElement('script');
                s.dataset.zone = '11159801';
                s.src = 'https://nap5k.com/tag.min.js';
                document.body.appendChild(s);
              })();
            `,
          }}
        />
      <body >
    <Script
          src="https://quge5.com/88/tag.min.js"
          strategy="afterInteractive"
          data-zone="250975"
          data-cfasync="false"
        />
        {/* <script src="https://quge5.com/88/tag.min.js" data-zone="250968" async data-cfasync="false"></script> */}
        {children}
          <Script id="monetag-vignette" strategy="afterInteractive">
        {`
          (function(s){
            s.dataset.zone='11159994',
            s.src='https://n6wxm.com/vignette.min.js'
          })
          ([document.documentElement, document.body]
          .filter(Boolean)
          .pop()
          .appendChild(document.createElement('script')))
        `}
      </Script>
        <Analytics />

        <Script
          id="monetag-onclick"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var s = document.createElement('script');
                s.dataset.zone = '11159669';
                s.src = 'https://al5sm.com/tag.min.js';
                document.body.appendChild(s);
              })();
            `,
          }}
        />
      </body>
   

    </html>
  );
}