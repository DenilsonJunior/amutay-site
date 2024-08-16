import styled from "styled-components"

export const ContainerQuemSomos = styled.section`
    width: 100%;

    .boxtxt1 {
        h2 {
            font-size: 4.6vw;
            margin: 5% 0 .8%;
            color: var(--color07);
            @media (max-width: 1000px) {
                color: red;
            }
        }
        p {
            font-size: 2.1vw;
            line-height: 3.12vw;
            @media (max-width: 1000px) {
                color: red;
            }

            b {
                font-size: 2.34vw;
            }
        }
    }

    .boxtxt2 {
        margin: 19vw 0 0;

        p {
            font-size: 2.5vw;
            line-height: 4vw;
            font-weight: 600;
            @media (max-width: 1000px) {
                color: red;
            }
        }
    }

    .swiper {
        margin: 7vw 0 0;
        padding-bottom: 2vw;

        .swiper-button-prev,
        .swiper-button-next {
            top: calc(50% - 2.5vw);
            width: 2.5vw;
            height: 2.5vw;
            &::after {
                content: '';
                background-image: url(./assets/img/arrow1.png);
                background-size: contain;
                background-repeat: no-repeat;
                width: 100%;
                height: 100%;
                border-radius: 100%;
                box-shadow: 0rem 0.3rem .6rem 0.1rem #0003;
            }
        }
        .swiper-button-prev {
            transform: rotateY(180deg);
        }

        .swiper-pagination {
            .swiper-pagination-bullet {
                width: .9vw;
                height: .9vw;
                border: solid .15vw var(--color07);
                opacity: 1;
                border-radius: 100%;
                background-color: transparent;
                &.swiper-pagination-bullet-active {
                    background-color: var(--color07);
                }
            }
        }
        
        .cardSlide {
            width: 85%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2.5vw 5vw 5.1vw;
            background-color: var(--color08);
            border-radius: 2rem;
            box-shadow: 0rem 0.3rem 1rem 0.1rem #0003;
            
            .imgSlide {
                width: 41%;
            }
            p {
                text-align: center;
                font-size: 1.93vw;
                @media (max-width: 1000px) {
                    color: red;
                }
            }
        }
    }

    .boxtxt3 {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-bottom: 10rem;
        p {
            font-size: 1.9rem;
            b {
                font-size: 1.9rem;
            }
        }
    }
    
    .flexCards {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 2rem;

        @media (max-width: 1000px) {
            flex-direction: column;
            gap: 6rem;
        }

        .card {
            background-color: white;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            margin-top: 7.5rem;
            border-radius: 1.5rem;
            box-shadow: 0rem 0.3rem 0.5rem 0.1rem #0003;

            .pers {
                width: 20rem;
                position: relative;
                margin-top: -10rem;
                filter: drop-shadow(0rem 0.1rem 1rem #0002);
            }

            .boxtext {
                width: 100%;
                padding: 2rem 2rem 8rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2rem;
                position: relative;

                h3 {
                    color: var(--color07);
                    text-align: center;
                }

                p {
                    text-align: center;
                }
            }

            button {
                background-color: var(--color07);
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: .7rem 2rem .7rem .7rem;
                border-radius: 1.8rem;
                border: none;
                position: absolute;
                bottom: 2rem;
                box-shadow: 0rem 0.3rem 0.5rem 0.1rem #0003;
                .box {
                    background-color: white;
                    padding: .4rem .6rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 1rem;
                    img {
                        width: 2rem;
                    }
                }
                p {
                    color: white;
                    margin: 0;
                    font-weight: bold;
                }
            }
        }
    }
`
