import { ContainerContatos } from './styles.js';
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Contatos() {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const animations = [
            { className: ".anima1", start: "-20% 40%", end: "50% 70%", duration: 1 },
            { className: ".anima2", start: "-20% 40%", end: "50% 70%", duration: 1 },
            { className: ".anima3", start: "-20% 40%", end: "50% 70%", duration: 1 },
            { className: ".anima4", start: "-20% 40%", end: "50% 70%", duration: 1 },
            { className: ".anima5", start: "-40% 30%", end: "45% 60%", duration: 1 },
        ];
    
        animations.forEach(({ className, start, end, duration }) => {
            gsap.to(className, {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                duration,
                scrollTrigger: {
                    trigger: "#contatos",
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
        <ContainerContatos className='max-conteudo' id="contatos">
            <div className='redes'>
                <a href="http://" target="_blank" rel="noopener noreferrer" className='anima1'>
                    <img src="./assets/img/ico-mail.png" alt="" />
                </a>
                <a href="https://www.linkedin.com/company/amutay-educa%C3%A7%C3%A3o/" target="_blank" rel="noopener noreferrer" className='anima2'>
                    <img src="./assets/img/ico-linkdin.png" alt="" />
                </a>
                {/* <a href="http://" target="_blank" rel="noopener noreferrer" className='anima3'>
                    <img src="./assets/img/ico-whats.png" alt="" />
                </a> */}
                <a href="http://" target="_blank" rel="noopener noreferrer" className='anima4'>
                    <img src="./assets/img/ico-insta.png" alt="" />
                </a>
            </div>
            <div className='anima5'>
                <p>Estrada Vereador Onildo Lemos, nº 331, unidade 308 – Bloco C, Ingleses do Rio Vermelho 88058-700 Florianópolis, SC</p>
                {/* <p>Telefone: (21) 99999-9999 | amutay@amutay.com.br</p> */}
            </div>
        </ContainerContatos>
    );
}

export default Contatos;
