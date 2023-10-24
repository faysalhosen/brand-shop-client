import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/autoplay';
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
                <div><img src="/public/assets/1.jpeg" alt="" /></div>
                   
                </SwiperSlide>
                <SwiperSlide className='relative h-[50vh]'>
                <div><img src="/public/assets/2.jpg.jpeg" alt="" /></div>
                   
                </SwiperSlide>
                <SwiperSlide className='relative h-[50vh]'>
                <div><img src="/public/assets/3.jpg.jpeg" alt="" /></div>
                   
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Advertisement;