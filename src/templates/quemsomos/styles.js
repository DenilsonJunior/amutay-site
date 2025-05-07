import styled from "styled-components"

export const ContainerQuemSomos = styled.section`
    width: 100%;
    padding-bottom: 5vw;
    position: relative;
    
    .fumaca {
        width: 180vw;
        position: absolute;
        top: 25vw;
        left: -40vw;
        @media (max-width: 720px) {
            top: 62vw;
        }
    }

    .fumaca1 {
        top: 0vw;
        animation: fumaca2 40s infinite;
        @media (max-width: 720px) {
            top: 55vw;
        }
    }
    .fumaca2 {
        top: 5vw;
        animation: fumaca1 40s infinite;
        @media (max-width: 720px) {
            top: 80vw;
        }
    }
    @keyframes fumaca1 {
        0% {
            left: -80vw;
        }
        100% {
            left: 0vw;
        }
    }
    @keyframes fumaca2 {
        0% {
            left: 0vw;
        }
        100% {
            left: -80vw;
        }
    }

    .anima1, .anima2, .anima4 {
        transform: translateY(30rem);
        opacity: 0;
    }
    .anima3 {
        transform: scale(.1);
        opacity: 0;
    }
    .card1 {
        transform: translateX(-70%) translateY(20rem);
        opacity: 0;
    }
    .card2 {
        transform: translateX(70%) translateY(20rem);
        opacity: 0;
    }
    
    @media (max-width: 720px) {
        .anima1, .anima2, .anima3, .anima4, .card1, .card2 {
            transform: none;
            opacity: 1;
        }
    }

    .boxtxt1 {
        padding: 0 10.4vw;
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media (max-width: 720px) {
            padding: 0 5vw;
            flex-direction: column;
        }

        .box-text {
            width: 30vw;
            @media (max-width: 720px) {
                width: 100%;
            }

            h2 {
                /* font-size: 4.6vw; */
                font-size: 3vw;
                margin: 5% 0 3%;
                color: var(--color07);
                @media (max-width: 720px) {
                    font-size: 6vw;
                    margin: 0% 0 5%;
                }
            }
        }

        .box-img {
            width: 45vw;
            @media (max-width: 720px) {
                width: 100%;
            }
            img {
                width: 100%;
            }
        }
    }

    .boxtxt1b {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2vw;
        padding: 4vw 0;
        background-color: #F2FBFC;
        margin-top: 3vw;
        position: relative;
        @media (max-width: 720px) {
            padding: 10vw 0 15vw;
            gap: 1vw;
        }

        .flexIcons {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 11.4vw;
            @media (max-width: 720px) {
                margin-top: 5rem;
                flex-wrap: wrap;
                gap: 4rem;
                padding: 0 5vw;
            }

            img {
                height: 5.5vw;
                @media (max-width: 720px) {
                    height: 12vw;
                    width: 100%;
                    object-fit: contain;
                }
            }
        }
    }

    .boxtxt2 {
        background-image: url(./assets/img/imgnova06.png);
        background-attachment: fixed !important;
        background-size: cover;
        background-position: center;
        position: relative;
        z-index: 1;
        width: 100%;
        padding: 10vw 10.4vw;
        filter: none;
        overflow: auto;
        @media (max-width: 720px) {
            padding: 10vw 5vw;
        }
        p {
            color: white;
            font-weight: 500;
        }
    }

    .boxtext2b {
        padding: 5vw 10.4vw 0;
        @media (max-width: 720px) {
            padding: 10vw 5vw 0;
        }
    }

    .swiper {
        position: relative;
        z-index: 1;
        margin: 5vw auto 0;
        padding-bottom: 0;
        
        height: 31vw;
        @media (max-width: 720px) {
            padding-bottom: 9vw;
            height: auto;
        }

        .swiper-slide {
            // opacity: 0;
        }

        .swiper-button-prev,
        .swiper-button-next {
            opacity: 1;
            top: calc(50% - 2.5vw);
            width: 2.5vw;
            height: 2.5vw;
            @media (max-width: 720px) {
                top: calc(50% - 2.5vw);
                width: 5vw;
                height: 5vw;
                display: none;
            }
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

        .swiper-wrapper {
            display: flex;
            align-items: center;

            .swiper-slide-active {
                .cardSlide {
                    transform: scale(1);
                    transition-duration: .3s;
                    p {
                        font-weight: 600;
                    }
                }
            }
        }

        .swiper-pagination {
            display: none;
            .swiper-pagination-bullet {
                border: solid .15vw var(--color07);
                &.swiper-pagination-bullet-active {
                    background-color: var(--color07);
                }
            }
        }
        
        .cardSlide {
            width: 100%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 2vw;
            align-items: center;
            padding: 0;
            transform: scale(0.7);
            
            
            @media (max-width: 720px) {
                border-radius: 1rem;
                width: 95%;
                padding: 2.5vw 2vw 5.1vw;
            }
            
            .imgSlide {
                width: 41%;
            }
            p {
                text-align: center;
                /* font-size: 1.93vw; */
                font-size: 1.6vw;
                font-weight: 400;
                @media (max-width: 720px) {
                    font-size: 4.2vw;
                }
            }
        }
    }

    .boxtxt3 {
        display: flex;
        flex-direction: column;
        gap: 2vw;
        margin: 3vw 0 0;
        position: relative;
        z-index: 1;
        padding: 0 10.4vw;
        @media (max-width: 720px) {
            padding: 0vw 5vw;
        }
        h2 {
            /* font-size: 4.6vw; */
            font-size: 3vw;
            margin: 0;
            color: var(--color07);
            @media (max-width: 720px) {
                font-size: 6vw;
                margin: 10% 0 5%;
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
        padding: 0 10.4vw;
        margin-bottom: -4vw;

        @media (max-width: 720px) {
            flex-direction: column;
            gap: 15vw;
            padding: 10vw 5vw 0;
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
            @media (max-width: 720px) {
                border-radius: 1rem;
            }

            .pers {
                width: 20vw;
                position: relative;
                margin-top: -10vw;
                filter: drop-shadow(0rem 0.1rem 1rem #0002);
                @media (max-width: 720px) {
                    width: 40vw;
                    margin-top: -20VW;
                }
            }

            .boxtext {
                width: 100%;
                padding: 3vw 1.2vw 11vw;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2rem;
                position: relative;
                @media (max-width: 720px) {
                    padding: 3vw 1.2vw 20vw;
                }

                h3 {
                    color: var(--color07);
                    text-align: center;
                    font-size: 2.2vw;
                    @media (max-width: 720px) {
                        font-size: 5vw;
                    }
                }

                p {
                    text-align: center;
                    /* font-size: 1.8vw; */
                    /* font-size: 1.4vw; */
                    /* line-height: 2.55vw; */
                    /* line-height: 1.4; */
                    margin: 1.5vw 0 0;
                    @media (max-width: 720px) {
                        /* line-height: 5vw; */
                        /* font-size: 4vw; */
                    }
                }
            }

            a {
                background-color: var(--color07);
                display: flex;
                align-items: center;
                padding: .8rem 1rem;
                border-radius: 3rem;
                border: none;
                position: absolute;
                bottom: 3.5vw;
                box-shadow: 0rem 0.3rem 1rem 0.5rem #0003;
                text-decoration: none;
                transition-duration: .3s;
                @media (max-width: 720px) {
                    padding: .8rem 1rem;
                }

                &:hover {
                    transform: scale(1.03);
                }
                .box {
                    background-color: white;
                    padding: .8rem 1.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 2.5rem;
                    @media (max-width: 720px) {
                        padding: .4rem 1.2rem;
                    }
                    img {
                        width: 2vw;
                        @media (max-width: 720px) {
                            width: 4vw;
                        }
                    }
                }
                p {
                    color: white;
                    margin: 0;
                    font-weight: 600;
                    font-size: 1.4vw;
                    @media (max-width: 720px) {
                        line-height: 5vw;
                        font-size: 4vw;
                    }
                }
            }
        }
    }
`
