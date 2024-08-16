import styled from "styled-components"

export const ContainerPorQue = styled.section`
    /* background-color: #0005; */
    padding-top: 18vw;
    padding-bottom: 10vw;
    position: relative;

    .fumaca {
        position: absolute;
        width: 155vw;
        top: 4vw;
        left: -25vw;
    }

    h2 {
        position: relative;
        z-index: 1;
        font-size: 4.6vw;
        margin: 0;
        color: var(--color07);
        @media (max-width: 1000px) {
            color: red;
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
    }

    .boxText1 {
        position: relative;
        z-index: 1;
        margin-top: 15.5vw;
        display: flex;
        flex-direction: column;
        p {
            line-height: 3.3vw;
            margin: 2.5vw 0 0;
            font-size: 2.3vw;
            @media (max-width: 1000px) {
                color: red;
            }
            b {
                font-size: 2.3vw;
            }
        }
    }
    
`
