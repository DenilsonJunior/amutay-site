import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ContainerCapa } from './styles.js';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Capa() {

    return (
        <ContainerCapa id='capa'>
            {/* <img className='logo' src="./assets/img/logo2.png" alt="Logo" /> */}
            <div className='max-conteudo boxSlide'>
                <img className='logo2' src="./assets/img/logo.png" alt="Logo" />
                <Swiper
                    spaceBetween={50}
                    centeredSlides={true}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <h1 className='title'>Conheça nossas soluções educacionais.</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h2 className='subtitle'>Conte com nossos talentos e nossa experiência para desenvolver soluções personalizadas.</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h2 className='subtitle'>Potencialize a qualidade das suas experiências educacionais.</h2>
                    </SwiperSlide>
                </Swiper>
            </div>
        </ContainerCapa>
    );
}

export default Capa;
