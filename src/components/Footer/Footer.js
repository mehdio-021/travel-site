import React,{useEffect} from "react";
import "./Footer.css";
import video2 from "../../assets/video2.mp4";
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FiChevronLeft } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css"


const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContentt container">
        <div className="contactDiv flex">
          <div className="text" data-aos ="fade-up">
            <small>مارا به خاطر بسپارید</small>
            <h2>با ما خاطره بسازید</h2>

            <div className="inputDiv flex" data-aos ="fade-up">
              <input  type="text" placeholder="آدرس ایمیل خود را وارد کنین" />
              <button className="btn flex" type="submit">
                ارسال <FiSend className="icon" />
              </button>
            </div>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                سفرمارکت
                <MdTravelExplore className="icon" />
              </a>
            </div>

            <div className="footerParagraph" data-aos ="fade-up">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی
            </div>
            <div className="footerSocials flex" data-aos ="fade-up">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            <div className="linkGroup" data-aos ="fade-up" data-aos-duration="3000">
              <span className="groupTitle">آژانس ما</span>
              <li className="footerList flex">
                <FiChevronLeft className="icon" />
                امکانات
              </li>
              <li className="footerList flex">
                <FiChevronLeft className="icon" />
                ارتباط با ما
              </li>
              <li className="footerList flex">
                <FiChevronLeft className="icon" />
                آژانس
              </li>
              <li className="footerList flex">
                <FiChevronLeft className="icon" />
                توریست
              </li>
            </div>
            <div className="linkGroup" data-aos ="fade-up" data-aos-duration="4000">
              <span className="groupTitle">رزرو ها</span>
              <li className="footerList flex">
                <FiChevronLeft className="icon" />
                رزرو همراه
              </li>
              <li className="footerList flex">
                <FiChevronLeft className="icon" />
                رزرو هتل
              </li>
              <li className="footerList flex">
                <FiChevronLeft className="icon" />
                اجاره خودرو
              </li>
              <li className="footerList flex">
                <FiChevronLeft className="icon" />
                اجاره ویلا
              </li>
            </div>
            <div className="linkGroup" data-aos ="fade-up" data-aos-duration="5000">
              <span className="groupTitle"> بلیط</span>
              <li className="footerList flex">
                <FiChevronLeft className="icon" />
                قطار
              </li>
              <li className="footerList flex">
                <FiChevronLeft className="icon" />
                هواپیما
              </li>
              <li className="footerList flex">
                <FiChevronLeft className="icon" />
                اتوبوس
              </li>
              <li className="footerList flex">
                <FiChevronLeft className="icon" />
                سواری
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>معتبر ترین وبسایت رزرو</small>
            <small>&copy;  All rights reserved</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
