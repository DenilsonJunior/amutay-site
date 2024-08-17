import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: fixed;
    width: 100%;
    /* background-color: #6200ea; */
    display: flex;
    justify-content: space-between;
    padding: 2vw;
    z-index: 2;
    img.logo {
        width: 9vw;
        filter: drop-shadow(0px 1px 2px #333);
    }

    button {
        border: none;
        background-color: transparent;
        color: white;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        position: relative;
        z-index: 2;
        transition-duration: .2s;
        filter: drop-shadow(0px 1px 2px #333);
        &:hover {
            transform: scale(1.2);
        }
    }

    .boxMenu {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: .3rem;
        position: fixed;
        z-index: 1;
        width: 100vw;
        height: 100vh;
        background-color: var(--bg-Menu);
        top: 0;
        left: 0;
        backdrop-filter: blur(1rem);
        a {
            text-decoration: none;
            color: var(--text-color);
            transition-duration: .2s;
            font-weight: 700;
            font-size: 1.8vw;
            &:hover {
                transform: scale(1.1);
            }

            @media (max-width: 720px) {
                font-size: 4vw;
            }
        }
    }
`;
