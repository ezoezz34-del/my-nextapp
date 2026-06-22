import {
  HR, // Croatia - كرواتيا
  PA, // Panama - بنما
  CD, // DR Congo - الكونغولديمقراطية
  CO, // Colombia - كولومبيا
  CA, // Canada - كندا
  CH, // Switzerland - سويسرا
  QA, // Qatar - قطر
  BA, // Bosnia and Herzegovina - البوسنةالهرسك
  BR, // Brazil - البرازيل
  HT, // Haiti - هايتي
  MA, // Morocco - المغرب
} from "country-flag-icons/react/3x2";
// import Image from "next/image";
 import Link from "next/link";

export default function Yesterday() {
  return (
    <div className="table">
        <Link className="maz" href="">

      <div className="matches">
<div className="team">
    <HR className="flag" />
    <span className="teamName">كرواتيا</span>
  </div>        <span className="score">0</span>

        <div className="matdel">
   <h5>لم تبدأ بعد</h5>
          <h5>02:00 Am</h5>
         <h5>كأس العالم - المجموعة ل</h5>        </div>

        <span className="score">0</span>
<div className="team">
       <PA className="flag" />
 <span className="teamName"> بنما</span>
  </div>
</div>
              </Link>

        <Link className="maz" href="">

      <div className="matches">

<div className="team">
    < CD className="flag" />
    <span className="teamName">الكونغو الديمقراطية</span>
  </div>        <span className="score">0</span>

        <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>05:00 Am</h5>
         <h5>كأس العالم - المجموعة ك</h5>
        </div>
        <span className="score">0</span>
<div className="team">
    <CO className="flag" />
    <span className="teamName">كولومبيا</span>
  </div>     
   </div>
        </Link>
        <Link className="maz" href="">

      <div className="matches">
<div className="team">
    <CA className="flag" />
    <span className="teamName">كندا</span>
  </div>       
   <span className="score">0</span>
 <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>10:00 Pm</h5>
         <h5>كأس العالم - المجموعة ب</h5>
        </div>

        <span className="score">0</span>
<div className="team">
    <CH className="flag" />
    <span className="teamName">سويسرا</span>
  </div>      </div>
        </Link>
          <Link className="maz" href="">

      <div className="matches">
<div className="team">
    <QA className="flag" />
    <span className="teamName">قطر</span>
  </div>       
   <span className="score">0</span>
 <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>10:00 pm</h5>
         <h5>كأس العالم - المجموعة ب</h5>
        </div>

        <span className="score">0</span>
<div className="team">
    <BA className="flag" />
    <span className="teamName">البوسنة الهرسك</span>
  </div>      </div>
        </Link>
        


    </div>
  );
}