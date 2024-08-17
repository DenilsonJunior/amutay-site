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
    @media (max-width: 720px) {
        padding-top: 10vw;
    }

    .redes {
        display: flex;
        gap: 1.5rem;
        margin: 10vw 0 3vw;
        @media (max-width: 720px) {
            margin: 17vw 0 3vw;
        }
        
        a {
            width: 3.5vw;
            transition-duration: .3s;
            @media (max-width: 720px) {
                width: 8vw;
            }

            &:hover {
                transform: scale(1.1);
            }
            img {
                width: 100%;
            }
        }
    }

    p {
        text-align: center;
        font-size: 1.4vw;
        color: white;
        @media (max-width: 720px) {
            line-height: 5vw;
            font-size: 3.5vw;
        }
    }
`
