import {
  BR, // البرازيل
  HT, // هايتي
  MA, // المغرب

  ZA, // جنوبأفريقيا
  KR, // كورياالجنوبية
  MX, // المكسيك
  CZ, // التشيك

  DE, // ألمانيا
  EC, // الإكوادور
  CI, // كوتديفوار
  CW, // كوراساو

  NL, // هولندا
  TN, // تونس
  SE, // السويد
  JP, // اليابان
} from "country-flag-icons/react/3x2";
import Image from "next/image";
 import Link from "next/link";

export default function Yesterday() {
  return (
    <div className="table">

      <div className="matches">
<div className="team">
    <BR className="flag" />
    <span className="teamName">البرازيل</span>
  </div>        <span className="score">3</span>

        <div className="matdel">
                <h3>انتهت المباراة</h3>         
      
          </div>

        <span className="score">0</span>
<div className="team">
<Image
  src="/scotland.png"
  alt="Scotland"
  width={36}
  height={32}
/>

 <span className="teamName"> اسكتلندا</span>
  </div>
</div>


      <div className="matches">

<div className="team">
    < HT className="flag" />
    <span className="teamName">هايتي</span>
  </div>        <span className="score">2</span>

        <div className="matdel">
                     <h3>انتهت المباراة</h3>         
        </div>
        <span className="score">4</span>
<div className="team">
    <MA className="flag" />
    <span className="teamName">المغرب</span>
  </div>     
   </div>
        <Link className="maz" href="./live2">

      <div className="matches">
<div className="team">
    <ZA className="flag" />
    <span className="teamName">جنوب أفريقيا</span>
  </div>       
   <span className="score">0</span>
 <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>04:00 Pm</h5>
         <h5>كأس العالم - المجموعة ا</h5>
        </div>

        <span className="score">0</span>
<div className="team">
    <KR className="flag" />
    <span className="teamName">كورياالجنوبية</span>
  </div>      </div>
        </Link>
          <Link className="maz" href="./live">
      <div className="matches">
<div className="team">
    <MX className="flag" />
    <span className="teamName">المكسيك</span>
  </div>       
   <span className="score">0</span>
 <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>04:00 شm</h5>
         <h5>كأس العالم - المجموعة ا</h5>
        </div>
        <span className="score">0</span>
<div className="team">
    <CZ className="flag" />
    <span className="teamName">التشيك</span>
  </div>      </div>
        </Link>
                  <Link className="maz" href="./live2">

      <div className="matches">
<div className="team">
    <DE className="flag" />
    <span className="teamName">ألمانيا</span>
  </div>       
   <span className="score">0</span>
 <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>11:00 pm</h5>
         <h5>كأس العالم - المجموعة ه</h5>
        </div>

        <span className="score">0</span>
<div className="team">
    <EC className="flag" />
    <span className="teamName">الإكوادور</span>
  </div>      </div>
        </Link>
         <Link className="maz" href="">

      <div className="matches">
<div className="team">
    <CI className="flag" />
    <span className="teamName">كوت ديفوار</span>
  </div>       
   <span className="score">0</span>
 <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>11:00 pm</h5>
         <h5>كأس العالم - المجموعة ه</h5>
        </div>

        <span className="score">0</span>
<div className="team">
    <CW className="flag" />
    <span className="teamName">كوراساو</span>
  </div>      </div>
        </Link>



    </div>
  );
}