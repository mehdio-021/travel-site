import React,{useEffect} from "react";
import "./Home.css";
import video1 from "../../assets/video1.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { TbApps } from "react-icons/tb";

import Aos from "aos";
import "aos/dist/aos.css"


const Home = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
    <section className="home flex">
      <div className="overLay"></div>
      <video src={video1} type="video/mp4" autoPlay muted loop></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText" data-aos ="fade-up">تورهای ما</span>
          <h1 className="homeTitle" data-aos ="fade-up">تور خود را پیدا کنید</h1>
        </div>

        <div className="cardDiv grid" data-aos ="fade-up">
          <div className="destinationInput">
            <label htmlFor="city">مقصد خود را وارد کنید</label>
            <div className="input flex">
              <input type="text" placeholder="اینجا را پر کنید" />
              <GrLocation className="icon" />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">تاریخ سفر را انتخاب کنید</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price"> حداکثر قیمت: </label>
              <h3 className="total">100 میلیون تومان</h3>
            </div>
            <div className="input flex">
              <input type="range" max="100" min="10" />
            </div>
          </div>

          <div className="searchOption flex">
            <HiFilter className="icon" />
            <span>جست و جوی پیشرفته</span>
          </div>
        </div>

        <div className="homeFooterIcon flex" data-aos ="fade-up">
          <div className="rightIcons">
            <AiOutlineWhatsApp className="icon"/>
            <FiInstagram className="icon"/>
            <FaTelegramPlane className="icon"/>
          </div>
          <div className="leftIcons">
           <AiOutlineUnorderedList className="icon"/>
           <TbApps className="icon"/>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Home;
