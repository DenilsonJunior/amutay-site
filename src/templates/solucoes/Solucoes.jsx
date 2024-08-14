import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

function Solucoes() {

    return (
        <>
            <h2>Soluções</h2>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <img src="" alt="" />
                    <p>Curso digital</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="" alt="" />
                    <p>Pagina navegável</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="" alt="" />
                    <p>Vídeo montagem</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="" alt="" />
                    <p>Podcast</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="" alt="" />
                    <p>Learning map</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="" alt="" />
                    <p>Atividade gamificada</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="" alt="" />
                    <p>Fascículo</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="" alt="" />
                    <p>Revista digital</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="" alt="" />
                    <p>Vídeo motion</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="" alt="" />
                    <p>Infográfico</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="" alt="" />
                    <p>Catálogo</p>
                </SwiperSlide>
                ...
            </Swiper>           
        </>
    );
}

export default Solucoes;
