import { Swiper, SwiperSlide } from 'swiper/react';
import { ContainerSolucoes } from './styles.js';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Solucoes() {

    return (
        <ContainerSolucoes className='max-conteudo' id="solucoes">
            <h2>Soluções</h2>
            <Swiper
                spaceBetween={50}
                centeredSlides={true}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
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
                    <div className="boxFundo">
                        <img src="./assets/img/cursodigital.gif" alt="" />
                        <h3>Curso digital</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="boxFundo">
                        <img src="./assets/img/paginanavegavel.gif" alt="" />
                        <h3>Pagina navegável</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="boxFundo">
                        <img src="./assets/img/videomontagem.gif" alt="" />
                        <h3>Vídeo montagem</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="boxFundo">
                        <img src="./assets/img/podcast.gif" alt="" />
                        <h3>Podcast</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="boxFundo">
                        <img src="./assets/img/learningmap.gif" alt="" />
                        <h3>Learning map</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="boxFundo">
                        <img src="./assets/img/atividadegamificada.gif" alt="" />
                        <h3>Atividade gamificada</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="boxFundo">
                        <img src="./assets/img/fasciculo.gif" alt="" />
                        <h3>Fascículo</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="boxFundo">
                        <img src="./assets/img/revistadigital.gif" alt="" />
                        <h3>Revista digital</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="boxFundo">
                        <img src="./assets/img/videomotion.gif" alt="" />
                        <h3>Vídeo motion</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="boxFundo">
                        <img src="./assets/img/infografico.gif" alt="" />
                        <h3>Infográfico</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="boxFundo">
                        <img src="./assets/img/catalogo.gif" alt="" />
                        <h3>Catálogo</h3>
                    </div>
                </SwiperSlide>
            </Swiper>           
        </ContainerSolucoes>
    );
}

export default Solucoes;
