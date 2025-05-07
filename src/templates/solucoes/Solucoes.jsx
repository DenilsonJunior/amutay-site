import { Swiper, SwiperSlide } from 'swiper/react';
import { ContainerSolucoes } from './styles.js';
import React, { useRef, useLayoutEffect, useState } from 'react';
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
            { className: ".anima0", start: "-20% 30%", end: "20% 50%", duration: 1 },
            { className: ".anima1", start: "0% 30%", end: "30% 50%", duration: 1 },
            { className: ".anima2", start: "40% 10%", end: "70% 40%", duration: 1 },
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
                    once: true,
                    // markers: true,
                }
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            gsap.killTweensOf(animations.map(({ className }) => className).join(", "));
        };
    }, []);

    // Dados do acordeão
    const accordionData = [
        {
            title: 'Consultoria especializada',
            content: 'Mergulhamos na demanda e cuidamos do desenvolvimento de todas as etapas da formação, do início ao fim, até tudo estar pronto para a publicação. A consultoria contempla o desenho da estratégia, o desenvolvimento da solução de aprendizagem e todas as etapas operacionais, como design de aprendizagem, revisão ortográfica, validações, design gráfico, diagramação, programação e acessibilidade.'
        },
        {
            title: '<i>On demand</i>',
            content: 'Auxiliamos na identificação de suas demandas e montamos um núcleo especializado que mergulha na sua cultura para atender às suas necessidades. Você tem a liberdade para escolher quais serviços e soluções são mais estratégicos para o momento da sua empresa.'
        }
    ];

    // Controle de estado
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <ContainerSolucoes className='max-conteudo' id="solucoes">
            <div className="boxText0 anima0">
                <h2>Soluções</h2>

                <p>Contamos com diversos serviços e soluções personalizadas para educação corporativa, formação e desenvolvimento.</p>

                <div className="accordion-wrapper">
                    {accordionData.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div key={index} className={`accordion-item ${isOpen ? 'open' : ''}`}>
                                <button onClick={() => toggleAccordion(index)}>
                                    <p
                                        dangerouslySetInnerHTML={{ __html: item.title }}
                                        style={{ margin: 0 }}
                                    />
                                    <span>
                                        <img src="./assets/img/arrow.png" alt="" />
                                    </span>
                                </button>
                                <div className="accordion-content">
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>


                <p>
                    Desenvolvemos diferentes tipos de entregáveis para criar uma jornada formativa diferenciada, combinando linguagens e formatos de navegação distintos a fim de maximizar o engajamento e a aprendizagem.
                </p>
            </div>

            <Swiper
                spaceBetween={50}
                centeredSlides={true}
                slidesPerView={1}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper anima1"
            >
                {/* Seus SwiperSlides aqui... */}
                <SwiperSlide>
                    <div className="boxFundo">
                        <img src="./assets/img/cursodigital.gif" alt="" />
                        <h3>Curso digital</h3>
                    </div>
                </SwiperSlide>
                {/* ...demais slides */}
            </Swiper>

            <div className="boxText1">
                <h3>Entre em contato para conhecer mais sobre o nosso trabalho!</h3>
            </div>
        </ContainerSolucoes>
    );
}

export default Solucoes;
