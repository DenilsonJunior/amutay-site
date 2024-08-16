import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ContainerQuemSomos } from './styles.js';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function QuemSomos() {

    return (
        <ContainerQuemSomos className='max-conteudo'>
            
            <div className='boxtxt1'>
                <h2>QuemSomos?</h2>
                <p><b>Desenvolvemos experiências personalizadas e de alto impacto.</b></p>
                <p>Oferecemos consultoria, gestão e elaboração de <b>soluções educacionais</b> voltadas para o desenvolvimento de trilhas de aprendizagem com <b>formação</b> <b>virtual</b>, <b>híbrida</b> e <b>presencial</b>.</p>
            </div>

            <div className='boxtxt2'>
                <p>A paixão e o comprometimento que colocamos em cada projeto desenvolvido são resultado de um conjunto variado de vivências. Os caminhos pessoais e profissionais de quem compõe a nossa empresa constroem pontes que unem conhecimentos, competências e qualidades.</p>
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
                className="mySwiper"
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
                ...
            </Swiper>

            <div className='boxtxt3'>
                <p><b>Uma empresa feita por mulheres!</b></p>
                <p>A <b>Amutay</b> foi idealizada por mulheres que, desde a sua fundação, trabalham a <b>perspectiva feminina</b> na concepção, no encaminhamento e no desenvolvimento de <b>cada um dos projetos</b> de forma criativa.</p>
                <p>Prezamos a diversidade e a inclusão, conscientes de que somos uma empresa feita por pessoas reais e únicas, que trabalham para contribuir com a formação e para mudar a vida de outras pessoas.</p>
            </div>

            <div className='flexCards'>
                <div className='card'>
                    <img className='pers' src="./assets/img/mari.png" alt="" />
                    <div className="boxtext">
                        <h3>Marianne Marimon</h3>
                        <p>Consultora de aprendizagem e especialista no desenvolvimento de estratégias e soluções educativas nos mais diferentes contextos, da educação pública ao corporativo. Possui 10 anos de experiência com docência, projetos educacionais e comunitários, além de formação continuada de professores. É mestra em Educação Científica e Tecnológica, especialista em Trabalho Interdisciplinar e licenciada em Educação do Campo na área de Ciências da Natureza e Matemática.</p>
                    </div>
                    <button>
                        <div className="box">
                            <img className='icoLink' src="./assets/img/linkdin.png" alt="" />
                        </div>
                        <p>Acessar</p>
                    </button>
                </div>
                <div className='card'>
                    <img className='pers' src="./assets/img/leila.png" alt="" />
                    <div className="boxtext">
                        <h3>Leila Paiter</h3>
                        <p>Licenciada em Educação do Campo na área de Ciências da Natureza e Matemática, pedagoga, especialista em Trabalho Interdisciplinar e mestra em Educação Científica e Tecnológica. Possui experiência com docência na Educação Básica, em projetos educacionais escolares e comunitários e na formação inicial e continuada de professores. Nos últimos anos, tem se dedicado a atuar em projetos de educação digital.</p>
                    </div>
                    <button>
                        <div className="box">
                            <img className='icoLink' src="./assets/img/linkdin.png" alt="" />
                        </div>
                        <p>Acessar</p>
                    </button>
                </div>
            </div>

        </ContainerQuemSomos>
    );
}

export default QuemSomos;
