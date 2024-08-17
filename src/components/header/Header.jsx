import React, { useState, useEffect } from 'react';
import { HeaderContainer } from './styles.js';

const Header = () => {
    const [isTrue, setIsTrue] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const capa = document.getElementById('capa');
            const capaHeight = capa?.offsetHeight || 0;

            if (window.scrollY > capaHeight) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        let clickLinks = document.getElementsByClassName('boxMenu')[0]?.getElementsByTagName('a');

        const handleClick = () => setIsTrue(prevIsTrue => !prevIsTrue);

        if (clickLinks) {
            for (let i = 0; i < clickLinks.length; i++) {
                clickLinks[i].addEventListener('click', handleClick);
            }
        }

        return () => {
            if (clickLinks) {
                for (let i = 0; i < clickLinks.length; i++) {
                    clickLinks[i].removeEventListener('click', handleClick);
                }
            }
        };
    }, [isTrue]);

    return (
        <HeaderContainer $isTrue={isTrue} $scrolled={scrolled}>
            {/* <img className='logo' src="./assets/img/logo.png" alt="Logo" /> */}
            
            <button 
                onClick={() => setIsTrue(!isTrue)}
                aria-expanded={isTrue}
                aria-label="Menu de navegação"
            >
                {isTrue ? '✖' : '☰'}
            </button>
            
            <div className='boxMenu'>
                <a href="#capa">
                    <p>Home</p>
                </a>
                <a href="#quem">
                    <p>Quem somos</p>
                </a>
                <a href="#porque">
                    <p>Porque</p>
                </a>
                <a href="#solucoes">
                    <p>Soluções</p>
                </a>
                <a href="#contatos">
                    <p>Contatos</p>
                </a>
            </div>
        </HeaderContainer>
    );
};

export default Header;
