import React from 'react';
import avatar from '../../assets/profile.png';

//Swiper core and required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

//Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Testimonials.css';

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h4>What clients say about me?</h4>
            <h2>Testimonials</h2>
            <div className="divider"></div>
            <Swiper className="container mySwiper testimonials"
                slidesPerView={1}
                spaceBetween={40}
                centeredSlides={true}
                autoplay={{
                delay: 3000,
                disableOnInteraction: true,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                 
            >
                <SwiperSlide className="testimonial">
                    <div className="client-avatar">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <h3>Ansarul Anis</h3>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsa esse autem iure magnam maiores sunt repellat non cupiditate, culpa nemo animi inventore voluptatem suscipit distinctio molestiae. Ratione impedit ab, tempore temporibus blanditiis repudiandae accusamus.</small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client-avatar">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <h3>Ansarul Anis</h3>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsa esse autem iure magnam maiores sunt repellat non cupiditate, culpa nemo animi inventore voluptatem suscipit distinctio molestiae. Ratione impedit ab, tempore temporibus blanditiis repudiandae accusamus.</small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client-avatar">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <h3>Ansarul Anis</h3>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsa esse autem iure magnam maiores sunt repellat non cupiditate, culpa nemo animi inventore voluptatem suscipit distinctio molestiae. Ratione impedit ab, tempore temporibus blanditiis repudiandae accusamus.</small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client-avatar">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <h3>Ansarul Anis</h3>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsa esse autem iure magnam maiores sunt repellat non cupiditate, culpa nemo animi inventore voluptatem suscipit distinctio molestiae. Ratione impedit ab, tempore temporibus blanditiis repudiandae accusamus.</small>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Testimonials;