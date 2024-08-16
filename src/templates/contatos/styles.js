import styled from "styled-components"

export const ContainerContatos = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    .redes {
        display: flex;
        gap: 2rem;
        margin-bottom: 5rem;
        a {
            width: 3vw;
            img {
                width: 100%;
            }
        }
    }

    p {
        text-align: center;
    }
`
