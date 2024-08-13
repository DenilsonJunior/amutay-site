import styled from 'styled-components';

export const Cabecalho = styled.header`
    width: 100%;
    /* background-color: var(--esc); */
    /* backdrop-filter: blur(5px); */
    display: flex;
    /* justify-content: flex-end; */
    box-shadow: 0rem 0.3rem 0.6rem rgba(0, 0, 0, .4);
    padding: 1rem 5%;
    position: sticky;
    background-color: #6c9089;
    top: 0;
    z-index: 2;
    margin-bottom: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
        height: 8rem;
        filter: drop-shadow(0.2rem 0.2rem 0.3rem #0008);
        @media (max-width: 650px) {
            height: 7rem;
        }
    }

    h1 {
        margin: 0 0 0 1rem;
        color: white;
        text-shadow: 0.3rem 0.3rem 0.5rem #0008;
        letter-spacing: .3rem;
        text-transform: uppercase;
        @media (max-width: 650px) {
            font-size: 2rem;
        }
    }
`