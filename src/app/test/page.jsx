import "./page.css";
import Image from "next/image";


function Test() {   <>
<article class="article-page">

  <div class="hero">
    <div class="overlay"></div>

    <div class="hero-content">
      <span class="category">أخبار الفن</span>

      <h1>
        موعد عرض فيلم الجواهريجي بعد تأجيله للمرة الثانية
      </h1>

      <p class="date">
        الأحد 31 مايو 2026 - 12:30 مساءً
      </p>
    </div>
  </div>

  <div class="container">

    <Image
      src="/images/images.jfif.webp"
      alt="article"
      class="main-image"
    />

    <div class="content">

      <p>
        يبحث قطاع كبير من الجمهور عن تفاصيل العمل الجديد...
      </p>

      <p>
        ويأتي الفيلم ضمن قائمة الأعمال المنتظرة خلال الفترة المقبلة...
      </p>

      <h2>
        تفاصيل قصة الفيلم
      </h2>

      <p>
        تدور الأحداث في إطار كوميدي اجتماعي...
      </p>

      <h2>
        أبطال العمل
      </h2>

      <p>
        يشارك في البطولة عدد كبير من النجوم...
      </p>

    </div>

    <div class="faq">

      <h2>الأسئلة الشائعة</h2>

      <div class="item">
        <h3>متى يعرض الفيلم؟</h3>
        <p>سيتم الإعلان عن الموعد النهائي قريباً.</p>
      </div>

      <div class="item">
        <h3>من أبطال الفيلم؟</h3>
        <p>يضم عدداً من النجوم المصريين.</p>
      </div>

      <div class="item">
        <h3>أين سيتم عرضه؟</h3>
        <p>في دور العرض السينمائي والمنصات الرقمية لاحقاً.</p>
      </div>

    </div>

  </div>

</article>

<footer class="footer">

  <div class="footer-links">
    <a href="/news">الرئيسية</a>
    <a href="/news">الأخبار</a>
    <a href="/movies">الأفلام</a>
    <a href="/series">المسلسلات</a>
    <a href="/about">من نحن</a>
    <a href="/contact">تواصل معنا</a>
    <a href="/privacy">سياسة الخصوصية</a>
  </div>

  <p>
    © 2026 جميع الحقوق محفوظة
  </p>

</footer>
</>
}
 

export default Test;