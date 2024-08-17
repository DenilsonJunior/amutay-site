import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 3.5vw 3vw;
    z-index: 2;
    transition: background-color 0.3s ease-in-out;

    /* Aplica cor de fundo ao Header quando o estado "$scrolled" for verdadeiro */
    /* background-color: ${props => (props.$scrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent')}; */

    img.logo {
        width: 4.5vw;
        /* filter: drop-shadow(0px 1px 2px #333); */

        @media (max-width: 720px) {
            width: 9vw;
        }
    }

    button {
        border: none;
        background-color: transparent;
        color: ${props => (props.$scrolled ? '#1782A5' : 'white')};
        width: 5vw;
        height: 5vw;
        display: none;  /* Oculta o botão em telas maiores */
        align-items: center;
        justify-content: center;
        font-size: 7vw;
        position: relative;
        z-index: 2;
        transition-duration: .2s;
        filter: ${props => (props.$scrolled ? 'drop-shadow(0px 1px 2px #fff)' : 'none')};
        &:hover {
            transform: scale(1.2);
        }

        @media (max-width: 720px) {
            display: flex;  /* Exibe o botão em telas menores */
        }
    }

    .boxMenu {
        display: flex;
        align-items: center;
        gap: 5rem;  /* Espaço entre os itens do menu */
        flex-direction: row;  /* Menu tradicional em linha */
        justify-content: flex-end;
        position: relative;
        z-index: 1;

        @media (max-width: 720px) {
            gap: 2rem;
            flex-direction: column;  /* Menu em coluna no mobile */
            align-items: center;
            justify-content: center;
            position: fixed;
            width: 100vw;
            height: 100vh;
            background-color: rgba(255, 255, 255, 0.9);
            top: 0;
            left: 0;
            backdrop-filter: blur(1rem);
            display: ${props => (props.$isTrue ? 'flex' : 'none')}; /* Exibe o menu apenas quando o estado "$isTrue" é verdadeiro */
        }

        a {
            text-decoration: none;
            color: var(--text-color);
            transition-duration: .2s;
            font-weight: 700;
            backdrop-filter: ${props => (props.$scrolled ? 'blur(1px)' : 'none')};
            padding: 0vw .1vw;

            &:hover {
                transform: scale(1.1);
            }

            p {
                font-size: 2.1vw;
                color: ${props => (props.$scrolled ? '#1782A5' : 'white')};
                font-weight: ${props => (props.$scrolled ? '700' : '400')};
                filter: ${props => (props.$scrolled ? 'drop-shadow(0px 1px 2px #fff)' : 'none')};

                @media (max-width: 720px) {
                    font-size: 4.5vw;
                    color: var(--color01);
                    font-weight: 600;
                    filter: none;
                }
            }
        }
    }
`;
