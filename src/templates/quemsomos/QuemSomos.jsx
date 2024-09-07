import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ContainerQuemSomos } from './styles.js';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function QuemSomos() {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const animations = [
            { className: ".anima1", start: "-20% 20%", end: "15% 80%", duration: 2 },
            { className: ".anima2", start: "-5% 20%", end: "20% 50%", duration: 2 },
            { className: ".anima3", start: "0% 30%", end: "35% 60%", duration: 5 },
            { className: ".anima4", start: "30% 20%", end: "60% 60%", duration: 1 },
            { className: ".card1, .card2", start: "30% 40%", end: "85% 70%", duration: 5 },
        ];
    
        animations.forEach(({ className, start, end, duration }) => {
            gsap.to(className, {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                duration,
                scrollTrigger: {
                    trigger: "#quem",
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
        <ContainerQuemSomos className='max-conteudo secAnima' id="quem">

            <img className='fumaca fumaca1' src="./assets/img/fmc1.png" alt="" />
            <img className='fumaca fumaca2' src="./assets/img/fmc1.png" alt="" />
            
            <div className='boxtxt1 anima1'>
                <h2>Quem Somos?</h2>
                <p><b>Somos uma Consultoria Educacional que desenvolve experiências personalizadas e de alto impacto.</b></p>
                <p>Oferecemos consultoria, gestão e elaboração de <b>soluções educacionais</b> voltadas para o desenvolvimento de trilhas de aprendizagem com <b>formação</b> <b>virtual</b>, <b>híbrida</b> e <b>presencial</b>.</p>
            </div>

            <div className='boxtxt2 anima1'>
                <p>A paixão e o comprometimento que colocamos em cada projeto desenvolvido são resultado de um conjunto variado de vivências. Os caminhos pessoais e profissionais de quem compõe a nossa empresa constroem pontes que unem conhecimentos, competências e qualidades.</p>
                <p>Confira algumas das qualificações que os profissionais que atuam na Amutay compartilham, para garantir a qualidade e o nível de conhecimento especializado em cada entrega:​</p>
            </div>

            <Swiper
                spaceBetween={50}
                centeredSlides={true}
                slidesPerView={1}
                autoplay={{
                    delay: 50000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper anima3"
            >
                <SwiperSlide>
                    <div className='cardSlide'>
                        <img className='imgSlide' src="./assets/img/slide1.png" alt="" />
                        <p>Níveis de especialização e mestrado em áreas como Educação, Comunicação e Tecnologia.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardSlide">
                        <img className='imgSlide' src="./assets/img/slide2.png" alt="" />
                        <p>Formação acadêmica interdisciplinar + multidisciplinar.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardSlide">
                        <img className='imgSlide' src="./assets/img/slide3.png" alt="" />
                        <p>Trajetórias profissionais que contam com experiência em sala de aula, formação de professores, educação corporativa, projetos sociais, entre outros.</p>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className='boxtxt3 anima4'>
                <h2>Uma empresa feita por mulheres!</h2>
                <p>A <b>Amutay</b> foi idealizada por mulheres que, desde a sua fundação, trabalham a <b>perspectiva feminina</b> na concepção, no encaminhamento e no desenvolvimento de <b>cada um dos projetos</b> de forma criativa.</p>
                <p>Prezamos a diversidade e a inclusão, conscientes de que somos uma empresa feita por pessoas reais e únicas, que trabalham para contribuir com a formação e para mudar a vida de outras pessoas.</p>
            </div>

            <div className='flexCards'>
                <div className='card card1'>
                    <img className='pers' src="./assets/img/mari.png" alt="" />
                    <div className="boxtext">
                        <h3>Marianne Marimon</h3>
                        <p>Consultora de aprendizagem, gestora de projetos e professora é especialista no desenvolvimento de soluções educativas digitais, hibridas ou presenciais nos mais diferentes contextos. Possui mestrado em Educação científica e tecnológica e especialização em trabalho interdisciplinar.</p>
                    </div>
                    <a href="https://www.linkedin.com/in/leila-paiter/" target="_blank" rel="noopener noreferrer">
                        <div className="box">
                            <img className='icoLink' src="./assets/img/linkdin.png" alt="" />
                        </div>
                        <p>Acessar</p>
                    </a>
                </div>
                <div className='card card2'>
                    <img className='pers' src="./assets/img/leila.png" alt="" />
                    <div className="boxtext">
                        <h3>Leila Paiter</h3>
                        <p>Gestora de projetos e operações, especialista em ensino e aprendizagem e professora. Atua no desenvolvimento de soluções educativas digitais, hibridas ou presenciais nos mais diferentes contextos. Possui mestrado em Educação científica e tecnológica e especialização em trabalho interdisciplinar.</p>
                    </div>
                    <a href="https://www.linkedin.com/in/mariannemarimon/" target="_blank" rel="noopener noreferrer">
                        <div className="box">
                            <img className='icoLink' src="./assets/img/linkdin.png" alt="" />
                        </div>
                        <p>Acessar</p>
                    </a>
                </div>
            </div>

        </ContainerQuemSomos>
    );
}

export default QuemSomos;
