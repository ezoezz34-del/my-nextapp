import {
  NL, // هولندا
  TN, // تونس
  JP, // اليابان
  SE, // السويد
  AU, // أستراليا
  PY, // باراغواي
  US, // الولاياتالمتحدة
  TR, // تركيا
  FR, // فرنسا
  NO, // النرويج
  IQ, // العراق
  SN, // السنغال
  ES, // إسبانيا
  UY, // أوروجواي
} from "country-flag-icons/react/3x2";
import Image from "next/image";
 import Link from "next/link";

export default function Yesterday() {
  return (
    <div className="table">
          <Link className="maz" href="">

      <div className="matches">
<div className="team">
    <FR className="flag" />
    <span className="teamName">فرنسا</span>
  </div>       
   <span className="score">0</span>
 <div className="matdel">
  <h5>لم تبدأ بعد</h5>
          <h5>10:00 pm</h5>
         <h5>كأس العالم - المجموعة ط</h5>
        </div>

        <span className="score">0</span>
<div className="team">
    <NO className="flag" />
    <span className="teamName">النرويج</span>
  </div>      </div>
        </Link>
                <Link className="maz" href="">

      <div className="matches">
<div className="team">
    <IQ className="flag" />
    <span className="teamName">العراق</span>
  </div>       
   <span className="score">0</span>
 <div className="matdel">
 <h5>لم تبدأ بعد</h5>
          <h5>10:00 pm</h5>
         <h5>كأس العالم - المجموعة ط</h5>
        </div>

        <span className="score">0</span>
<div className="team">
    <SN className="flag" />
    <span className="teamName">السنغال</span>
  </div>      </div>
        </Link>
     <div className="matches">
<div className="team">
    < NL className="flag" />
    <span className="teamName">هولندا</span>
  </div>        <span className="score">3</span>

        <div className="matdel">
                     <h3>انتهت المباراة</h3>         
        </div>
        <span className="score">1</span>
<div className="team">
    <TN className="flag" />
    <span className="teamName">تونس</span>
  </div>     
   </div>

      <div className="matches">
<div className="team">
    <JP className="flag" />
    <span className="teamName">اليابان</span>
  </div>       
   <span className="score">1</span>
 <div className="matdel">
                           <h3>انتهت المباراة</h3>         

        </div>

        <span className="score">1</span>
<div className="team">
    <SE className="flag" />
    <span className="teamName">السويد</span>
  </div>      </div>
      <div className="matches">
<div className="team">
    <AU className="flag" />
    <span className="teamName">أستراليا</span>
  </div>       
   <span className="score">0</span>
 <div className="matdel">
                             <h3>انتهت المباراة</h3>         

        </div>
        <span className="score">0</span>
<div className="team">
    <PY className="flag" />
    <span className="teamName">باراغواي</span>
  </div>      </div>

      <div className="matches">
<div className="team">
    <US className="flag" />
    <span className="teamName">الولايات المتحدة</span>
  </div>       
   <span className="score">2</span>
 <div className="matdel">
                                   <h3>انتهت المباراة</h3>         

        </div>

        <span className="score">3</span>
<div className="team">
    <TR className="flag" />
    <span className="teamName">تركيا</span>
  </div>      </div>
      

    </div>
  );
}