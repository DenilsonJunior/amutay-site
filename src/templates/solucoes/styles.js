import styled from "styled-components"

export const ContainerSolucoes = styled.section`
    /* background-color: #0005; */

    h2 {
        color: var(--color07);
    }

    .swiper {
        margin-top: 10rem;
        padding-bottom: 4rem;

        .swiper-button-prev,
        .swiper-button-next {
            display: none;
        }

        .swiper-pagination {
            .swiper-pagination-bullet {
                border: solid .2rem var(--color07);
                opacity: 1;
                border-radius: 100%;
                background-color: transparent;
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
            width: 30vw;
            aspect-ratio: 1/1;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img {
                width: 55%;
            }
            h3 {
                text-align: center;
                margin-top: -4rem;
                color: white;
            }
        }
    }
   
`
