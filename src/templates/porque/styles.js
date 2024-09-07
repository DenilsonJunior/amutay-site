import styled from "styled-components"

export const ContainerPorQue = styled.section`
    /* background-color: #0005; */
    position: relative;
    padding: 8vw 0 0;

    .anima1, .anima3 {
        transform: translateY(30rem);
        opacity: 0;
    }
    .anima2 {
        transform: scale(.1);
        opacity: .1;
    }
    @media (max-width: 720px) {
        .anima1, .anima2, .anima3 {
            transform: none;
            opacity: 1;
        }
    }

    .fumaca {
        position: absolute;
        width: 155vw;
        top: 4vw;
        left: -35vw;
        @media (max-width: 720px) {
            width: 170vw;
        }
    }
    .fumaca1 {
        top: 3vw;
        animation: fumaca2 120s infinite;
    }
    .fumaca2 {
        top: 5vw;
        animation: fumaca1 120s infinite;
    }
    @keyframes fumaca1 {
        0% {
            left: -35vw;
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
            left: -35vw;
        }
    }

    .blockVideo {
        padding: 0 10.4vw;
        h2 {
            position: relative;
            z-index: 1;
            /* font-size: 4.6vw; */
            font-size: 3vw;
            margin: 0;
            /* color: var(--color07); */
            color: white;
            @media (max-width: 720px) {
                font-size: 6vw;
            }
        }
    
        video {
            position: relative;
            z-index: 1;
            width: 100%;
            border-radius: 2rem;
            margin-top: 2.5vw;
            border-radius: 4rem;
            box-shadow: 0rem 0.3rem 1rem 0.1rem #0003;
            @media (max-width: 720px) {
                border-radius: 1rem;
            }
        }
    }


    .newBG {
        background-color: red;
        margin-top: -25vw;
        padding: 30vw 10.4vw 8vw;
        position: relative;
        background-image: url(./assets/img/mato2.jpg);
        background-size: cover;
        background-position: bottom;
        .boxText1 {
            position: relative;
            z-index: 1;
            /* margin-top: 5vw; */
            display: flex;
            flex-direction: column;
            background-color: white;
            padding: 3vw 4vw;
            border-radius: 2.5vw;
            box-shadow: 0rem 0.3rem 1rem 0.1rem #0003;
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
    }

    
`
