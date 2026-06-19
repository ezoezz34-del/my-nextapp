
import {
  MA, // المغرب
  BR, // البرازيل
  HT, // هايتي
  TR, // تركيا
  PY, // باراغواي
  NL, // هولندا
  SE, // السويد
  DE, // ألمانيا
  CI, // كوت ديفوار
} from "country-flag-icons/react/3x2";
import Image from "next/image";
 import Link from "next/link";

export default function Yesterday() {
  return (
    <div className="table">
        <Link className="maz" href="./live">

      <div className="matches">
<div className="team">
    <MA className="flag" />
    <span className="teamName">المغرب</span>
  </div>        <span className="score">0</span>

        <div className="matdel">
   <h5> تبدأ المباراه</h5>
          <h5>01:00 Am</h5>
         <h5>كأس العالم - المجموعة ج</h5>        
         </div>

        <span className="score">0</span>
<div className="team">
  <Image
  src="/scotland.png"
  alt="Scotland"
  width={40}
  height={40}
/>
 <span className="teamName">اسكتلندا</span>
  </div>
</div>
              </Link>

        <Link className="maz" href="">

      <div className="matches">

<div className="team">
    <BR className="flag" />
    <span className="teamName">البرازيل</span>
  </div>        <span className="score">0</span>

        <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>03:30 Am</h5>
         <h5>كأس العالم - المجموعة ج</h5>
        </div>
        <span className="score">0</span>
<div className="team">
    <HT className="flag" />
    <span className="teamName">هايتي</span>
  </div>     
   </div>
        </Link>
        <Link className="maz" href="">

      <div className="matches">
<div className="team">
    <TR className="flag" />
    <span className="teamName">تركيا</span>
  </div>       
   <span className="score">0</span>
 <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>06:00 Am</h5>
         <h5>كأس العالم - المجموعة د</h5>
        </div>

        <span className="score">0</span>
<div className="team">
    <PY className="flag" />
    <span className="teamName">باراغواي</span>
  </div>      </div>
        </Link>


          <Link className="maz" href="">

      <div className="matches">

<div className="team">
    <NL className="flag" />
    <span className="teamName">هولندا</span>
  </div>        <span className="score">0</span>

        <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>08:00 Pm</h5>
         <h5>كأس العالم - المجموعة و</h5>
        </div>

        <span className="score">0</span>
<div className="team">
    <SE className="flag" />
    <span className="teamName">السويد</span>
  </div>      </div>
        </Link>
          <Link className="maz" href="">

      <div className="matches">

 <div className="team">
    <DE className="flag" />
    <span className="teamName">ألمانيا</span>
  </div>      
    <span className="score">0</span>

        <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>11:00 Pm</h5>
         <h5>كأس العالم - المجموعة ه</h5>
        </div>

        <span className="score">0</span>
 <div className="team">
    <CI className="flag" />
    <span className="teamName">كوت ديفوار</span>
  </div>      </div>
        </Link>

=
     
   
           

    </div>
  );
}