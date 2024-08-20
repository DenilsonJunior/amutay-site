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
                <a href="http://" target="_blank" rel="noopener noreferrer" className='anima2'>
                    <img src="./assets/img/ico-linkdin.png" alt="" />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer" className='anima3'>
                    <img src="./assets/img/ico-whats.png" alt="" />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer" className='anima4'>
                    <img src="./assets/img/ico-insta.png" alt="" />
                </a>
            </div>
            <div className='anima5'>
                <p>Rua Nascimento Silva, 107 - Rio de Janeiro / RJ</p>
                <p>Telefone: (21) 99999-9999 | amutay@amutay.com.br</p>
            </div>
        </ContainerContatos>
    );
}

export default Contatos;
