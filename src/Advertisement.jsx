import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/autoplay';
//import slider1 from "../../assets/night.png"
import slider1 from "../src/assets/1.jpeg"
import slider2 from "../src/assets/2.jpg"
import slider3 from "../src/assets/3.jpg"
const Advertisement = () => {
    return (
        <div>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
            >



                <SwiperSlide className='relative h-[50vh]'> 
                <div><img className='w-full' src={slider1} alt="" /></div>
                   
                </SwiperSlide>
                <SwiperSlide className='relative h-[50vh]'>
                <div><img className='w-full' src={slider2} alt="" /></div>
                   
                </SwiperSlide>
                <SwiperSlide className='relative h-[50vh]'>
                <div><img className='w-full' src={slider3} alt="" /></div>
                   
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Advertisement;