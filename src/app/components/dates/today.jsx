import {
  IQ, // العراق
  FR, // فرنسا

  SN, // السنغال
  NO, // النرويج

  DZ, // الجزائر
  JO, // الأردن

  UZ, // أوزبكستان
  PT, // البرتغال

  GH, // غانا
  GB, // إنجلترا (استخدم GB)

  HR, // كرواتيا
  PA, // بنما
} from "country-flag-icons/react/3x2";
// import Image from "next/image";
 import Link from "next/link";

export default function Yesterday() {
  return (
    <div className="table">

      <div className="matches">
<div className="team">
    <IQ className="flag" />
    <span className="teamName">العراق</span>
  </div>        <span className="score">0</span>

        <div className="matdel">
                           <h3>انتهت المباراة</h3>         
   
           </div>

        <span className="score">3</span>
<div className="team">
    <FR className="flag" />

 <span className="teamName"> فرنسا</span>
  </div>
</div>

        <Link className="maz" href="./live">

      <div className="matches">

<div className="team">
    < SN className="flag" />
    <span className="teamName">السنغال</span>
  </div>        <span className="score">1</span>

        <div className="matdel">
          <h4> تبدأ المباراه</h4>
          <h5>03:00 Am</h5>
         <h5>كأس العالم - المجموعة ط</h5>
        </div>
        <span className="score">3</span>
<div className="team">
    <NO className="flag" />
    <span className="teamName">النرويج</span>
  </div>     
   </div>
        </Link>
        <Link className="maz" href="./live">

      <div className="matches">
<div className="team">
    <DZ className="flag" />
    <span className="teamName">الجزائر</span>
  </div>       
   <span className="score">0</span>
 <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>06:00 Am</h5>
         <h5>كأس العالم - المجموعة ي</h5>
        </div>

        <span className="score">0</span>
<div className="team">
    <JO className="flag" />
    <span className="teamName">الأردن</span>
  </div>      </div>
        </Link>
          <Link className="maz" href="">

      <div className="matches">
<div className="team">
    <UZ className="flag" />
    <span className="teamName">أوزبكستان</span>
  </div>       
   <span className="score">0</span>
 <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>08:00 pm</h5>
         <h5>كأس العالم - المجموعة ك</h5>
        </div>

        <span className="score">0</span>
<div className="team">
    <PT className="flag" />
    <span className="teamName">البرتغال</span>
  </div>      </div>
        </Link>
          <Link className="maz" href="">

      <div className="matches">
<div className="team">
    <GH className="flag" />
    <span className="teamName">غانا</span>
  </div>       
   <span className="score">0</span>
 <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>11:00 pm</h5>
         <h5>كأس العالم - المجموعة ل</h5>
        </div>

        <span className="score">0</span>
<div className="team">
    <GB className="flag" />
    <span className="teamName">إنجلترا</span>
  </div>      </div>
        </Link>



    </div>
  );
}