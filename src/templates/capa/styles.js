import styled from "styled-components"

export const ContainerCapa = styled.section`
    position: relative;
    width: 100%;
    aspect-ratio: 1.6 / 1;
    background-image: url(./assets/img/bg1.png);
    background-size: cover;
    /* background-position: bottom; */
    display: flex;
    align-items: center;
    padding-top: 10%;
    @media (max-width: 1000px) {
        aspect-ratio: 1.35 / 1;
    }

    .swiper {
        color: white;
        margin-top: 1%;
        padding-bottom: 3.6%;
        /* padding-bottom: 4rem; */
        /* background-color: #0005; */
        @media (max-width: 1000px) {
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
            font-size: 4.61vw;
            width: 60vw;
            height: 100%;

            @media (max-width: 1000px) {
                font-size: 6.8vw;
                width: 85vw;
            }
        }

        .subtitle {
            font-size: 2.44vw;
            width: 53vw;
            height: 100%;
            display: flex;
            align-items: center;

            @media (max-width: 1000px) {
                width: 85vw;
                font-size: 5.5vw;
            }
        }
    }
`
