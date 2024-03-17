

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img className='relative rounded-2xl' src="https://i.ibb.co/hHJqxg4/ux-indonesia-q-C2n6-RQU4-Vw-unsplash.jpg" alt="Image" />
        <button className='btn btn-secondary absolute top-[50%] left-[25%]'>Join as Employee</button>
        </SwiperSlide>
        <SwiperSlide><img className='relative rounded-2xl' src="https://i.ibb.co/wM5GgRZ/kelly-sikkema-M98-NRBuzbpc-unsplash.jpg" alt="" />
        <button className='btn btn-secondary absolute top-[50%] left-[25%]'>Join as HR/Admin</button>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}

export default Banner;
