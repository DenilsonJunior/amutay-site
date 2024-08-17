import styled from "styled-components"

export const ContainerSolucoes = styled.section`
    /* background-color: #0005; */
    padding-top: 8.2vw;
    padding-bottom: 8.2vw;

    h2 {
        font-size: 4.6vw;
        margin: 0;
        color: var(--color07);
        @media (max-width: 1000px) {
            color: red;
        }
    }

    .swiper {
        margin-top: 6vw;
        padding-bottom: 3.5vw;

        .swiper-button-prev,
        .swiper-button-next {
            display: none;
        }

        .swiper-pagination {
            .swiper-pagination-bullet {
                border: solid .15vw var(--color07);
                &.swiper-pagination-bullet-active {
                    background-color: var(--color07);
                }
            }
        }

        .boxFundo {
            background-image: url(./assets/img/fundogif.png);
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            width: 35vw;
            aspect-ratio: 1/1;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img {
                width: 60%;
                margin-top: -5vw;
            }
            h3 {
                text-align: center;
                margin-top: -2.5vw;
                color: white;
                font-size: 2vw;
                @media (max-width: 1000px) {
                    color: red;
                }
            }
        }
    }
   
`
