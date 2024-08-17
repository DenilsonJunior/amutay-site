import React, { useState, useEffect } from 'react';
import { HeaderContainer } from './styles.js';
// import ModoEscuroButton from './ModoEscuroButton.jsx';

const Header = () => {
    const [isTrue, setIsTrue] = useState(false);
    // const [modoEscuro, setModoEscuro] = useState(false);

    useEffect(() => {
        // Seleciona todos os elementos <a> na página
        let clickLinks = document.getElementsByClassName('boxMenu')[0]?.getElementsByTagName('a');

        // Função para lidar com o clique
        const handleClick = () => setIsTrue(prevIsTrue => !prevIsTrue);

        // Adiciona os event listeners
        if (clickLinks) {
            for (let i = 0; i < clickLinks.length; i++) {
                clickLinks[i].addEventListener('click', handleClick);
            }
        }

        // Remove os event listeners quando o componente for desmontado
        return () => {
            if (clickLinks) {
                for (let i = 0; i < clickLinks.length; i++) {
                    clickLinks[i].removeEventListener('click', handleClick);
                }
            }
        };
    }, [isTrue]);

    return (
        <HeaderContainer>
            {/* <ModoEscuroButton modoEscuro={modoEscuro} setModoEscuro={setModoEscuro} /> */}
            <a href="#capa" target="_blank" rel="noopener noreferrer">
                <img className='logo' src="./assets/img/logo.png" alt="" />
            </a>
            
            <button 
                onClick={() => setIsTrue(!isTrue)}
                aria-expanded={!isTrue}
                aria-label="Menu de navegação"
            >
                {isTrue ? '✖' : '☰'}
            </button>
            
            {isTrue && (
                <div className='boxMenu'>
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
            )}
        </HeaderContainer>
    );
};

export default Header;
