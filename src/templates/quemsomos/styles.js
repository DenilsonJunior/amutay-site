import styled from "styled-components"

export const ContainerQuemSomos = styled.section`
    width: 100%;
    /* padding: 10rem 15rem; */
    /* background-color: #0005; */

    .boxtxt1 {
        margin-bottom: 15rem;
        h2 {
            margin-bottom: 2rem;
            color: var(--color07);
        }
    }

    .boxtxt2 {
        margin-bottom: 5rem;
    }

    .swiper {
        margin-bottom: 20rem;
        padding-bottom: 3rem;
        /* background-color: var(--color08);
        border-radius: 2rem; */

        .swiper-button-prev,
        .swiper-button-next {
            top: calc(50% - 3.5rem);
            width: 4rem;
            height: 4rem;
            &::after {
                content: '';
                background-image: url(./assets/img/arrow1.png);
                background-size: contain;
                width: 100%;
                height: 100%;
            }
        }
        .swiper-button-prev {
            transform: rotateY(180deg);
        }
        
        .cardSlide {
            width: 85%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2rem 5rem 4rem;
            background-color: var(--color08);
            border-radius: 2rem;
            box-shadow: 0rem 0.3rem 0.5rem 0.1rem #0003;
            
            .imgSlide {
                width: 40rem;
                max-width: 80%;
            }
            p {
                text-align: center;
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
