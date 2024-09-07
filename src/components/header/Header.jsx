import React, { useState, useEffect } from 'react';
import { HeaderContainer } from './styles.js';

const Header = () => {
    const [isTrue, setIsTrue] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    // Função para monitorar o scroll e sublinhar o item ativo
    useEffect(() => {
        const sections = document.querySelectorAll('section'); // Supondo que as seções tenham a tag <section>
        const options = {
            threshold: 0.1, // A seção é considerada visível quando 50% está no viewport
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    setActiveSection(id); // Atualiza a seção ativa
                }
            });
        }, options);

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <HeaderContainer $isTrue={isTrue} $scrolled={scrolled}>
            <img className='logo' src="./assets/img/logo2.png" alt="Logo" />
            
            <button 
                onClick={() => setIsTrue(!isTrue)}
                aria-expanded={isTrue}
                aria-label="Menu de navegação"
            >
                {isTrue ? '✖' : '☰'}
            </button>
            
            <div className='boxMenu'>
                <a href="#capa" className={activeSection === 'capa' ? 'active' : ''}>
                    <p>Home</p>
                </a>
                <a href="#quem" className={activeSection === 'quem' ? 'active' : ''}>
                    <p>Quem somos</p>
                </a>
                <a href="#porque" className={activeSection === 'porque' ? 'active' : ''}>
                    <p>Porque</p>
                </a>
                <a href="#solucoes" className={activeSection === 'solucoes' ? 'active' : ''}>
                    <p>Soluções</p>
                </a>
                <a href="#contatos" className={activeSection === 'contatos' ? 'active' : ''}>
                    <p>Contatos</p>
                </a>
            </div>
        </HeaderContainer>
    );
};

export default Header;
