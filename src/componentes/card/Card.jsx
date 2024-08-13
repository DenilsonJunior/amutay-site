import React, { useRef, useEffect } from 'react';
import { CardItem } from './styles';
import { PiPlayCircleLight } from "react-icons/pi";

export const Card = (props) => {
    const titleRef = useRef(null);

    useEffect(() => {
        const adjustTitleText = () => {
            if (titleRef.current) {
                const titleElement = titleRef.current;
                const titleContainerWidth = titleElement.offsetWidth; // Largura do contêiner da .title
                const titleWidth = titleElement.scrollWidth; // Largura real do texto dentro da .title
                const originalText = props.title;

                // Verifica se o texto precisa ser truncado
                if (titleWidth > titleContainerWidth) {
                    let truncatedText = originalText;
                    while (titleElement.scrollWidth > titleContainerWidth && truncatedText.length > 0) {
                        truncatedText = truncatedText.slice(0, -1); // Remove o último caractere
                        titleElement.textContent = truncatedText + '...'; // Adiciona "..." no final
                    }
                } else {
                    titleElement.textContent = originalText; // Exibe o texto completo se não precisar de truncamento
                }
            }
        };

        // Chama a função para ajustar o texto quando as props mudarem
        adjustTitleText();

        // Reajusta o texto quando a janela for redimensionada
        window.addEventListener('resize', adjustTitleText);

        // Limpa o event listener ao desmontar o componente
        return () => {
            window.removeEventListener('resize', adjustTitleText);
        };
    }, [props.title]); // Dispara o efeito sempre que props.title mudar

    return (
        <CardItem>
            <a href={props.link} target="_blank">
                <div className="card">
                    <div className="pn">
                        <h2>{props.pn}</h2>
                    </div>
                    <div className="boxImage">
                        <img src={`./assets/img/${props.img}`} alt={props.title} />
                        <div className="boxPlay">
                            <PiPlayCircleLight />
                        </div>
                    </div>
                    <div className="title" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        <p ref={titleRef}>{props.title}</p>
                    </div>
                </div>
            </a>
        </CardItem>
    );
};

export default Card;
