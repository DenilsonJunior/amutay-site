import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ContainerPorQue } from './styles.js';

function PorQue() {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const animations = [
            // { className: ".anima1", start: "0% 20%", end: "30% 50%", duration: 1 },
            { className: ".anima2", start: "0% 40%", end: "35% 50%", duration: 1 },
            // { className: ".anima3", start: "50% 30%", end: "80% 50%", duration: 2 },
        ];
    
        animations.forEach(({ className, start, end, duration }) => {
            gsap.to(className, {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                duration,
                scrollTrigger: {
                    trigger: "#porque",
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
        <ContainerPorQue className='max-conteudo' id="porque">
            <div className="blockVideo">
                {/* <img className='fumaca fumaca1' src="./assets/img/fmc2.png" alt="" />
                <img className='fumaca fumaca2' src="./assets/img/fmc2.png" alt="" /> */}

                <h2 className=''>Porque Amutay?</h2>
                {/* <video className='anima2' src="" controls poster='./assets/img/video.png'></video> */}
            </div>

            <div className="newBG">
                <div className="boxText1 anima2">
                    <p><b>Amutay representa nosso compromisso de construir e compartilhar conhecimento</b></p>
                    <p>Desenvolvemos um <b>trabalho personalizado</b>, pois sabemos que realidades distintas demandam <b>soluções específicas</b>.</p>
                    <p>Nossa <b>estratégia metodológica</b> permite perceber e <b>compreender diferentes contextos</b>, tornando as experiências educativas mais significativas e potentes.</p>
                </div>
            </div>
        </ContainerPorQue>
    );
}

export default PorQue;
