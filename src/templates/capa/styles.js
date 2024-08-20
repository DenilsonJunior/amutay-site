import styled from "styled-components"

export const ContainerCapa = styled.section`
    position: relative;
    width: 100%;
    aspect-ratio: 1.6 / 1;
    background-image: url(./assets/img/bg1.png);
    background-size: cover;
    background-position: center bottom;
    max-height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 10%;
    @media (max-width: 720px) {
        aspect-ratio: 1.35 / 1;
    }

    img.logo {
        width: 4.5vw;
        filter: drop-shadow(0px 1px 2px #333);
        position: absolute;
        top: 2vw;
        left: 4vw;

        @media (max-width: 720px) {
            width: 9vw;
        }
    }

    .swiper {
        color: white;
        margin-top: 1%;
        padding-bottom: 3.6%;
        /* padding-bottom: 4rem; */
        /* background-color: #0005; */
        /* animation: capaslide 1s linear; */
        @keyframes capaslide {
            0% {
                transform: translateX(-100%);
            }
            100% {
                transform: translateY(0%);
            }
        }
        @media (max-width: 720px) {
            padding-bottom: 10%;
        }

        .swiper-button-prev,
        .swiper-button-next {
            display: none;
        }

        .swiper-pagination {
            text-align: left;
            .swiper-pagination-bullet {
                border: solid .15vw white;
                &.swiper-pagination-bullet-active {
                    background-color: white;
                }
            }
        }

        .swiper-wrapper {
            display: flex;
            align-items: center;
        }

        .title {
            /* font-size: 4.61vw; */
            font-size: 3.8vw;
            width: 50vw;
            height: 100%;

            @media (max-width: 720px) {
                font-size: 6.8vw;
                width: 85vw;
            }
        }

        .subtitle {
            /* font-size: 2.44vw; */
            font-size: 2.8vw;
            width: 53vw;
            height: 100%;
            display: flex;
            align-items: center;

            @media (max-width: 720px) {
                width: 85vw;
                font-size: 5.5vw;
            }
        }
    }
`
