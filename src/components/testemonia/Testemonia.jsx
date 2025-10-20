import "./Testemonia.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testemonia = () => {
  return (
    <section id="testemonia">
      <h5> Review from clients </h5>
      <h2>Testimonials</h2>

      <Swiper className="container testemonia__container">
        <SwiperSlide className="testemonial">
          <div className="cliaent__avatar">
            <img src={AVTR1} alt="" />
          </div>
           <h5 className="client__name">Ernest Achiver</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              soluta esse rem dignissimos ratione architecto ipsam officiis
              eaque nulla laborum!
            </small>
        </SwiperSlide>

        {/* 2 */}

         <SwiperSlide className="testemonial">
          <div className="cliaent__avatar">
            <img src={AVTR2} alt="" />
          </div>
          <h5 className="client__name">Tina Snow</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              soluta esse rem dignissimos ratione architecto ipsam officiis
              eaque nulla laborum!
            </small>
        </SwiperSlide>

        {/* 3 */}

         <SwiperSlide className="testemonial">
          <div className="cliaent__avatar">
            <img src={AVTR3} alt="" />
          </div>
          <h5 className="client__name">Shatta Wale</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              soluta esse rem dignissimos ratione architecto ipsam officiis
              eaque nulla laborum!
            </small>
        </SwiperSlide>

        {/* 4 */}

         <SwiperSlide className="testemonial">
          <div className="cliaent__avatar">
            <img src={AVTR4} alt="" />
          </div>
           <h5 className="client__name">Kwame Despite</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              soluta esse rem dignissimos ratione architecto ipsam officiis
              eaque nulla laborum!
            </small>
        </SwiperSlide>


      </Swiper>
    </section>
  );
};

export default Testemonia;
