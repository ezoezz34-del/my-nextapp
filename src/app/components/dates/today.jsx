
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

      <div className="matches">
<div className="team">
    <UY className="flag" />
    <span className="teamName">أوروجواي</span>
  </div>        <span className="score">2</span>

        <div className="matdel">
                   <h3>انتهت المباراة</h3>         
  
           </div>

        <span className="score">0</span>
<div className="team">
    <CV className="flag" />

 <span className="teamName"> الرأس الأخضر</span>
  </div>
</div>

        <Link className="maz" href="./live">

      <div className="matches">

<div className="team">
    < EG className="flag" />
    <span className="teamName">مصر</span>
  </div>        <span className="score">2</span>

        <div className="matdel">
          <h4> تبدأ المباراه</h4>
          <h5>04:00 Am</h5>
         <h5>كأس العالم - المجموعة و</h5>
        </div>
        <span className="score">1</span>
<div className="team">
    <NZ className="flag" />
    <span className="teamName">نيوزيلندا</span>
  </div>     
   </div>
        </Link>
        <Link className="maz" href="">

      <div className="matches">
<div className="team">
    <AR className="flag" />
    <span className="teamName">الأرجنتين</span>
  </div>       
   <span className="score">0</span>
 <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>08:00 pm</h5>
         <h5>كأس العالم - المجموعة ح</h5>
        </div>

        <span className="score">0</span>
<div className="team">
    <AT className="flag" />
    <span className="teamName">النمسا</span>
  </div>      </div>
        </Link>



    </div>
  );
}