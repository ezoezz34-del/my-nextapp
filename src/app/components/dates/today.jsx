
import {


 
  GB, // England

  ES, // Spain
 
} from "country-flag-icons/react/3x2";
import Image from "next/image";
 import Link from "next/link";

export default function Yesterday() {
  return (
    <div className="table">

  


  <Link className="maz" href="">
    <div className="matches">
      <div className="team">
        <ES className="flag" />
        <span className="teamName">Spain</span>
      </div>

      <span className="score">0</span>

      <div className="matdel">
        <h5>لم تبدا المباراة</h5>      
       <h5>9:45 Pm</h5>
        <h5>دوري الامم الاوروبيه</h5>  
      </div>

      <span className="score">0</span>

      <div className="team">
      <GB className="flag" />

    <span className="teamName">England</span>
      </div>
    </div>
  </Link>  

    </div>
  );
}