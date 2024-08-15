import { Swiper, SwiperSlide } from 'swiper/react';
import { ContainerQuemSomos } from './styles.js';

import 'swiper/css';

function QuemSomos() {

    return (
        <ContainerQuemSomos className='max-conteudo'>
            {/* <div>
                <h2>QuemSomos</h2>
                <p><b>Desenvolvemos experiências personalizadas e de alto impacto.</b></p>
                <p>Oferecemos consultoria, gestão e elaboração de <b>soluções educacionais</b> voltadas para o desenvolvimento de trilhas de aprendizagem com <b>formação</b> <b>virtual</b>, <b>híbrida</b> e <b>presencial</b>.</p>
            </div>

            <div>
                <h3>A paixão e o comprometimento que colocamos em cada projeto desenvolvido são resultado de um conjunto variado de vivências. Os caminhos pessoais e profissionais de quem compõe a nossa empresa constroem pontes que unem conhecimentos, competências e qualidades.</h3>
            </div> */}

            {/* <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <p>Níveis de especialização e mestrado em áreas como Educação, Comunicação e Tecnologia.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p>Formação acadêmica interdisciplinar + multidisciplinar.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p>Trajetórias profissionais que contam com experiência em sala de aula, formação de professores, educação corporativa, projetos sociais, entre outros.</p>
                </SwiperSlide>
                ...
            </Swiper> */}

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
