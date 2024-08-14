import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

function Capa() {

    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <h1>Conheça nossas soluções educacionais.</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <h3>Conte com nossos talentos e nossa experiência para desenvolver soluções personalizadas.</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <h3>Potencialize a qualidade das suas experiências educacionais.</h3>
                </SwiperSlide>
                ...
            </Swiper>           
        </>
    );
}

export default Capa;
