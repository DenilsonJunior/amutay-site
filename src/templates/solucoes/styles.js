import styled from "styled-components"

export const ContainerSolucoes = styled.section`
    /* background-color: #0005; */
    padding: 8vw 10.4vw;
    @media (max-width: 720px) {
        padding: 15vw 5vw 5vw;
    }

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

    .accordion-wrapper {
        margin-bottom: 2rem;

        .accordion-item {
            overflow: hidden;

            button {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: .5vw 1vw;
                border-radius: 1vw;
                border: none;
                background-image: linear-gradient(to bottom right, #20A6A2, #1782A5);
                margin: 1vw 0 0;
                position: relative;
                z-index: 1;
                transition: filter 0.3s ease;
                @media (max-width: 720px) {
                    padding: 3vw;
                    margin: 2vw 0 0;
                }

                p, p i {
                    color: white;
                    font-size: 1.5vw;
                    font-weight: 700;
                    font-family: 'Montserrat';
                    @media (max-width: 720px) {
                        font-size: 4.5vw;
                    }
                }

                span {
                    display: inline-block;
                    transition: transform 0.3s ease;

                    img {
                        width: 2vw;
                        @media (max-width: 720px) {
                            width: 5vw;
                        }
                    }
                }
            }

            button:hover {
                filter: brightness(1.1);
                cursor: pointer;
                transform: scale(1);
            }

            .accordion-content {
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.5s ease, padding 0.5s ease;
                background-color: white;
                border-radius: 1vw;
                // margin-top: -1vw;
                padding: 0 2vw;

                p {
                    margin: 0;
                }
            }

            &.open {
                .accordion-content {
                    max-height: 500px; // ajuste conforme necessário
                    padding: 2vw;
                    @media (max-width: 720px) {
                        max-height: 1000px;
                        padding: 5vw;
                    }
                }

                button span {
                    transform: rotate(180deg);
                }
            }
        }
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

        @media (max-width: 720px) {
            margin-top: 8vw;
            padding: 6vw 0;
        }
        h3 {
            text-align: center;
        }
        
        p + p {
            margin-top: 2vw;
        }
    }
   
`
