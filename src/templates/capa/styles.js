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

    .imgCapa {
        width: 100%;
        position: absolute;
        top: 0;
        opacity: .1;
    }

    .swiper {
        color: white;
        margin-top: 1%;
        padding-bottom: 3.6%;
        /* padding-bottom: 4rem; */
        /* background-color: #0005; */

        .swiper-button-prev,
        .swiper-button-next {
            display: none;
        }

        .swiper-pagination {
            text-align: left;
            .swiper-pagination-bullet {
                width: .9vw;
                height: .9vw;
                border: solid .15vw white;
                opacity: 1;
                border-radius: 100%;
                background-color: transparent;
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
                color: red;
            }
        }

        .subtitle {
            font-size: 2.44vw;
            width: 53vw;
            height: 100%;
            display: flex;
            align-items: center;

            @media (max-width: 1000px) {
                color: red;
            }
        }
    }
`
