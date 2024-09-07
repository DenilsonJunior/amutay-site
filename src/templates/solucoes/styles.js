import styled from "styled-components"

export const ContainerSolucoes = styled.section`
    /* background-color: #0005; */
    padding-top: 8.2vw;
    padding-bottom: 8.2vw;

    .anima0, .anima1, .anima2 {
        transform: translateY(30rem);
        opacity: 0;
    }
    @media (max-width: 720px) {
        .anima1, .anima2 {
            transform: none;
            opacity: 1;
        }
    }

    h2 {
        /* font-size: 4.6vw; */
        font-size: 3vw;
        margin: 0;
        color: var(--color07);
        @media (max-width: 720px) {
            font-size: 6vw;
        }
    }

    p {
        margin-top: 2vw;
    }

    .swiper {
        margin-top: 6vw;
        padding-bottom: 3.5vw;
        @media (max-width: 720px) {
            margin-top: 10vw;
            padding-bottom: 3.5vw;
        }

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
            @media (max-width: 720px) {
                width: 90vw;
            }
            
            img {
                width: 60%;
                margin-top: -5vw;
            }
            h3 {
                text-align: center;
                margin-top: -2.5vw;
                color: white;
                font-size: 2vw;
                @media (max-width: 720px) {
                    font-size: 4.4vw;
                }
            }
        }
    }

    .boxText1 {
        position: relative;
        z-index: 1;
        margin-top: 5vw;
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 3vw 4vw;
        border-radius: 2.5vw;
        box-shadow: 0rem 0.3rem 1rem 0.1rem #0003;
        @media (max-width: 720px) {
            margin-top: 8vw;
            padding: 6vw;
        }
        p {
            /* line-height: 3.3vw; */
            line-height: 1.4;
            margin: 0;
            /* font-size: 2.3vw; */
            font-size: 1.8vw;
            @media (max-width: 720px) {
                line-height: 5vw;
                font-size: 4.2vw;
            }
            b {
                /* font-size: 2.3vw; */
                font-size: 1.9vw;
                @media (max-width: 720px) {
                    font-size: 4.2vw;
                }
            }
        }
        p + p {
            margin-top: 2vw;
        }
    }
   
`
