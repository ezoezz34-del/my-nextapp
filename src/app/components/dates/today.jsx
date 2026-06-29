import {
  ZA, // South Africa
  CA, // Canada
  DE, // Germany
  PY, // Paraguay
  NL, // Netherlands
  MA, // Morocco
  BR, // Brazil
  JP, // Japan
  FR, // France
  SE, // Sweden
  CI, // Ivory Coast
  NO, // Norway
  MX, // Mexico
  EC, // Ecuador
  GB, // England
  CD, // DR Congo
  US, // United States
  BA, // Bosnia and Herzegovina
  BE, // Belgium
  SN, // Senegal
  PT, // Portugal
  HR, // Croatia
  ES, // Spain
  AT, // Austria
  CH, // Switzerland
  DZ, // Algeria
  AR, // Argentina
  CV, // Cape Verde
  CO, // Colombia
  GH, // Ghana
  AU, // Australia
  EG, // Egypt
} from "country-flag-icons/react/3x2";
import Image from "next/image";
 import Link from "next/link";

export default function Yesterday() {
  return (
    <div className="table">
 
      <div className="matches">
<div className="team">
    <JP className="flag" />
    <span className="teamName">Japan</span>
  </div>        <span className="score">1</span>

        <div className="matdel">
                                                 <h3>انتهت المباراة</h3>         
 
          </div>

        <span className="score">2</span>
        <div className="team">

    <BR className="flag" />
 <span className="teamName"> Brazil</span>
 </div>

</div>

        <Link className="maz" href="./live2">

      <div className="matches">
 
<div className="team">
    < DE className="flag" />
    <span className="teamName">Germany</span>
  </div>        <span className="score">0</span>

        <div className="matdel">
    <h4> تبدأ المباراه</h4>
          <h5>11:30 pm</h5>
         <h5> الدور ال32</h5>  
        </div>
        <span className="score">0</span>
<div className="team">
    <PY className="flag" />
    <span className="teamName">Paraguay</span>
  </div>     
   </div>
        </Link>
         {/* <Link className="maz" href="">
      <div className="matches">
<div className="team">
    <MA className="flag" />
    <span className="teamName">Morocco</span>
  </div>       
   <span className="score">0</span>
 <div className="matdel">
      <h5>لم تبدأ بعد</h5>
          <h5>06:00 Am</h5>
         <h5>كأس العالم - المجموعة ز</h5>
        </div>

        <span className="score">0</span>
<div className="team">
    <NL className="flag" />
    <span className="teamName">Netherlands</span>
  </div>      </div>
        </Link>
           <Link className="maz" href="">
      <div className="matches">
<div className="team">
    <CI className="flag" />
    <span className="teamName">Ivory Coast</span>
  </div>       
 
   <span className="score">0</span>
 <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>06:00 Am</h5>
         <h5>كأس العالم - المجموعة ز</h5>
        </div>
        <span className="score">0</span>
<div className="team">
    <NO className="flag" />
    <span className="teamName">Norway</span>
  </div>      </div>
        </Link>  */}
                  {/* <Link className="maz" href=""> 

       <div className="matches">
<div className="team">
    <HR className="flag" />
    <span className="teamName">كرواتيا</span>
  </div>       
   <span className="score">0</span>
 <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>12:00 Am</h5>
         <h5>كأس العالم - المجموعة ل</h5>
        </div>

        <span className="score">0</span>
<div className="team">
    <GH className="flag" />
    <span className="teamName">غانا</span>
  </div>      </div>
        </Link>
         <Link className="maz" href="">

      <div className="matches">
<div className="team">
    <PA className="flag" />
    <span className="teamName">بنما</span>
  </div>       
   <span className="score">0</span>
 <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>12:00 شm</h5>
         <h5>كأس العالم - المجموعة ل</h5>
        </div>

        <span className="score">0</span>
<div className="team">
    <GB className="flag" />
    <span className="teamName">إنجلترا</span>
  </div>      </div>
        </Link>
          <Link className="maz" href="">

      <div className="matches">
<div className="team">
    <CO className="flag" />
    <span className="teamName">كولومبيا</span>
  </div>       
   <span className="score">0</span>
 <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>02:30 Am</h5>
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
    <CD className="flag" />
    <span className="teamName">الكونغوالديمقراطية</span>
  </div>       
   <span className="score">0</span>
 <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>02:30 Am</h5>
         <h5>كأس العالم - المجموعة ك</h5>
        </div>

        <span className="score">0</span>
<div className="team">
    <UZ className="flag" />
    <span className="teamName">أوزبكستان</span>
  </div>      </div>
        </Link>
              <Link className="maz" href="">

      <div className="matches">
<div className="team">
    <DZ className="flag" />
    <span className="teamName">الجزائر</span>
  </div>       
   <span className="score">0</span>
 <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>02:30 Am</h5>
         <h5>كأس العالم - المجموعة ي</h5>
        </div>

        <span className="score">0</span>
<div className="team">
    <AT className="flag" />
    <span className="teamName">النمسا</span>
  </div>      </div>
        </Link>

            <Link className="maz" href="">

      <div className="matches">
<div className="team">
    <JO className="flag" />
    <span className="teamName">الأردن</span>
  </div>       
   <span className="score">0</span>
 <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>05:30 Am</h5>
         <h5>كأس العالم - المجموعة ي</h5>
        </div>

        <span className="score">0</span>
<div className="team">
    <AR className="flag" />
    <span className="teamName">الأرجنتين</span>
  </div>      </div>
        </Link>
            <Link className="maz" href="">

      <div className="matches">
<div className="team">
    <ZA className="flag" />
    <span className="teamName">جنوب أفريقيا</span>
  </div>       
   <span className="score">0</span>
 <div className="matdel">
          <h5>لم تبدأ بعد</h5>
          <h5>10:00 Am</h5>
         <h5> الدور ال32</h5>
        </div>

        <span className="score">0</span>
<div className="team">
    <CA className="flag" />
    <span className="teamName">كندا</span>
  </div>      </div>
        </Link> */}  

    </div>
  );
}