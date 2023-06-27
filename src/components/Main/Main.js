import React, { useEffect } from "react";
import "./Main.css";
import Data from "../../services/data";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsClipboardCheck } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title" data-aos="fade-right">
          پربازدیدترین ها
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map((data) => {
          return (
            <div className="singleDestnation" key={data.id} data-aos="fade-up">
              <div className="imgDiv">
                <img src={data.imgSrc} alt={data.destTitle} />
              </div>
              <div className="cardInfo">
                <h4 className="destTitle">{data.destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{data.location}</span>
                </span>

                <div className="fees flex">
                  <div className="price">
                    <h5>{data.fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{data.description}</p>
                </div>

                <button className="btn flex">
                  جزئیات <BsClipboardCheck className="icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
