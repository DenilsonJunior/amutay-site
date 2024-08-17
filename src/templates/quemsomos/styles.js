import styled from "styled-components"

export const ContainerQuemSomos = styled.section`
    width: 100%;
    padding-bottom: 5vw;
    position: relative;
    
    .fumaca {
        width: 150vw;
        position: absolute;
        top: 25vw;
        left: -25vw;
    }

    .boxtxt1 {
        position: relative;
        z-index: 1;
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
        position: relative;
        z-index: 1;
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
        position: relative;
        z-index: 1;
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
                border: solid .15vw var(--color07);
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
            border-radius: 4rem;
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
        gap: 3.4vw;
        margin: 18.3vw 0 0;
        position: relative;
        z-index: 1;
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
    
    .flexCards {
        position: relative;
        z-index: 1;
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 3vw;
        margin: 10vw 0 0;

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
            border-radius: 4rem;
            box-shadow: 0rem 0.3rem 1rem 0.1rem #0003;

            .pers {
                width: 20vw;
                position: relative;
                margin-top: -10vw;
                filter: drop-shadow(0rem 0.1rem 1rem #0002);
            }

            .boxtext {
                width: 100%;
                padding: 3vw 1.2vw 11vw;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2rem;
                position: relative;

                h3 {
                    color: var(--color07);
                    text-align: center;
                    font-size: 2.2vw;
                    @media (max-width: 1000px) {
                        color: red;
                    }
                }

                p {
                    text-align: center;
                    font-size: 1.51vw;
                    line-height: 2.55vw;
                    margin: 1.5vw 0 0;
                    @media (max-width: 1000px) {
                        color: red;
                    }
                }
            }

            button {
                background-color: var(--color07);
                display: flex;
                align-items: center;
                gap: 1.5vw;
                padding: .8rem 3rem .8rem .8rem;
                border-radius: 3rem;
                border: none;
                position: absolute;
                bottom: 3.5vw;
                box-shadow: 0rem 0.3rem 1rem 0.5rem #0003;
                .box {
                    background-color: white;
                    padding: .8rem 1.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 2.5rem;
                    img {
                        width: 2vw;
                    }
                }
                p {
                    color: white;
                    margin: 0;
                    font-weight: 600;
                    font-size: 1.4vw;
                }
            }
        }
    }
`
