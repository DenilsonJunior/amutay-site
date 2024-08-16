import styled from "styled-components"

export const ContainerContatos = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(./assets/img/imgfim.png);
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    padding-top: 5vw;
    padding-bottom: 15vw;

    .redes {
        display: flex;
        gap: 1rem;
        margin: 10vw 0 3vw;
        a {
            width: 3.5vw;
            img {
                width: 100%;
            }
        }
    }

    p {
        text-align: center;
        font-size: 1.4vw;
        color: white;
        @media (max-width: 1000px) {
            color: red;
        }
    }
`
