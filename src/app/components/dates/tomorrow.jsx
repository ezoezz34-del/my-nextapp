
import {
  EG, // مصر
  NZ, // نيوزيلندا
  UY, // أوروجواي
  CV, // الرأس الأخضر
  AR, // الأرجنتين
  AT, // النمسا
  FR, // فرنسا
  IQ, // العراق
  NO, // النرويج
  SN, // السنغال
  JO, // الأردن
  DZ, // الجزائر
  EC, // الإكوادور
  CW, // كوراساو
  TN, // تونس
  JP, // اليابان
  ES, // إسبانيا
  SA, // السعودية
  BE, // بلجيكا
  IR, // إيران
} from "country-flag-icons/react/3x2";
// import Image from "next/image";
 import Link from "next/link";

export default function Yesterday() {
  return (
    <div className="table">
        <Link className="maz" href="">

      <div className="matches">
<div className="team">
    <EC className="flag" />
    <span className="teamName">الإكوادور</span>
  </div>        <span className="score">0</span>

        <div className="matdel">
   <h5>لم تبدأ بعد</h5>
          <h5>03:00 Am</h5>
         <h5>كأس العالم - المجموعة ه</h5>        </div>

        <span className="score">0</span>
<div className="team">
    <CW className="flag" />

 <span className="teamName">كوراساو</span>
  </div>
</div>
              </Link>

        <Link className="maz" href="">

      <div className="matches">

<div className="team">
    <TN className="flag" />
    <span className="teamName">تونس</span>
  </div>        <span className="score">0</span>

        <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>07:00 Am</h5>
         <h5>كأس العالم - المجموعة و</h5>
        </div>
        <span className="score">0</span>
<div className="team">
    <JP className="flag" />
    <span className="teamName">اليابان</span>
  </div>     
   </div>
        </Link>
        <Link className="maz" href="">

      <div className="matches">
<div className="team">
    <ES className="flag" />
    <span className="teamName">إسبانيا</span>
  </div>       
   <span className="score">0</span>
 <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>07:00 pm</h5>
         <h5>كأس العالم - المجموعة ح</h5>
        </div>

        <span className="score">0</span>
<div className="team">
    <SA className="flag" />
    <span className="teamName">السعودية</span>
  </div>      </div>
        </Link>


          <Link className="maz" href="">

      <div className="matches">

<div className="team">
    <BE className="flag" />
    <span className="teamName">بلجيكا</span>
  </div>        <span className="score">0</span>

        <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>10:00 Pm</h5>
         <h5>كأس العالم - المجموعة ز</h5>
        </div>

        <span className="score">0</span>
<div className="team">
    <IR className="flag" />
    <span className="teamName">إيران</span>
  </div>      </div>
        </Link>

    </div>
  );
}