import { Swiper, SwiperSlide } from 'swiper/react';
import { ContainerSolucoes } from './styles.js';
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Solucoes() {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const animations = [
            { className: ".anima1", start: "0% 30%", end: "50% 50%", duration: 1 },
            { className: ".anima2", start: "0% 10%", end: "45% 45%", duration: 1 },
        ];
    
        animations.forEach(({ className, start, end, duration }) => {
            gsap.to(className, {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                duration,
                scrollTrigger: {
                    trigger: "#solucoes",
                    scrub: true,
                    start,
                    end,
                    // markers: true, // Deixe isso true apenas para depuração
                }
            });
        });
    
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            gsap.killTweensOf(animations.map(({ className }) => className).join(", "));
        };
    }, []);

    return (
        <ContainerSolucoes className='max-conteudo' id="solucoes">
            <h2 className=''>Nossa Entrega</h2>
            <p>Contamos com diversos tipos de entregáveis para criar uma jornada formativa diferenciada, combinando linguagens e formatos de navegação distintos para maximizar o engajamento e a aprendizagem.</p>
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
            <div className="boxText1">
                <p>Nosso escopo de trabalho contempla o mergulho, diagnóstico e gestão de todas as etapas de construção do percurso de formação. Ficamos responsáveis pelo desenho da estratégia e desenvolvimento da solução de aprendizagem, assim como todas as etapas operacionais, como o design de aprendizagem, revisão ortográfica, validações, design gráfico,  diagramação, programação e acessibilidade, até que tudo estar pronto para a publicação na plataforma LMS.</p>
                <p>Entre em contato para conhecer mais sobre o nosso trabalho!  ​</p>
            </div>         
        </ContainerSolucoes>
    );
}

export default Solucoes;
