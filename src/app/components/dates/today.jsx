import {
  ES, // إسبانيا
  UY, // أوروجواي
  SA, // السعودية
  CV, // الرأسالأخضر
  EG, // مصر
  IR, // إيران
  NZ, // نيوزيلندا
  BE, // بلجيكا
  HR, // كرواتيا
  GH, // غانا
  PA, // بنما
  GB, // إنجلترا
  CO, // كولومبيا
  PT, // البرتغال
  CD, // الكونغو الديمقراطية
  UZ, // أوزبكستان
  DZ, // الجزائر
  AT, // النمسا
  JO, // الأردن
  AR, // الأرجنتين
  ZA, // جنوب أفريقيا
  CA, // كندا
  NL, // هولندا
  TN, // تونس
  JP, // اليابان
  SE, // السويد
} from "country-flag-icons/react/3x2";
import Image from "next/image";
 import Link from "next/link";

export default function Yesterday() {
  return (
    <div className="table">

      <div className="matches">
<div className="team">
    <ES className="flag" />
    <span className="teamName">إسبانيا</span>
  </div>        <span className="score">1</span>

        <div className="matdel">
                              <h3>انتهت المباراة</h3>         
    
          </div>

        <span className="score">0</span>
        <div className="team">

    <UY className="flag" />
 <span className="teamName"> أوروجواي</span>
 </div>

</div>

        <Link className="maz" href="./live2">

      <div className="matches">

<div className="team">
    < SA className="flag" />
    <span className="teamName">السعودية</span>
  </div>        <span className="score">0</span>

        <div className="matdel">
                             <h3>انتهت المباراة</h3>         

        </div>
        <span className="score">0</span>
<div className="team">
    <CV className="flag" />
    <span className="teamName">الرأس الأخضر</span>
  </div>     
   </div>
        </Link>

      <div className="matches">
<div className="team">
    <EG className="flag" />
    <span className="teamName">مصر</span>
  </div>       
   <span className="score"></span>
 <div className="matdel">
                                 <h3>انتهت المباراة</h3>         
        </div>

        <span className="score">1</span>
<div className="team">
    <IR className="flag" />
    <span className="teamName">إيران</span>
  </div>      </div>
      <div className="matches">
<div className="team">
    <NZ className="flag" />
    <span className="teamName">نيوزيلندا</span>
  </div>       
   <span className="score">1</span>
 <div className="matdel">
                                 <h3>انتهت المباراة</h3>         
        </div>
        <span className="score">5</span>
<div className="team">
    <BE className="flag" />
    <span className="teamName">بلجيكا</span>
  </div>      </div>
              



    </div>
  );
}