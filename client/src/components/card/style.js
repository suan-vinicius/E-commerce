import styled from "styled-components";

export const SectionCard = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;

    p > b {
        position: absolute;
        top: 30%;
        left: 40%;
    }
`

export const CardStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-itens: center;
    justify-content: space-between;
    width: 200px;
    height: 350px;
    line-height: 1;
    padding: 10px;
    background: linear-gradient(to bottom, #c8eaf1, transparent);
    border: 1px solid #eaedeb;
    border-radius: 5px;
    
    :hover {
        transition: 5ms;
        transform: scale(1.05);
    }

    p:nth-child(1) {
        margin: 0;
    }
    p:nth-child(2) {
        margin: 10px 0 0 0;
        font-size: 1.3rem;
        font-weight: bold;
        color: black;
    }
    p:nth-child(3) {
        margin-top: 0;
        color: #000000cf;
    }
    button {
        width: 100%;
        border: none;
        border-radius: 5px;
        background-color: #c8eaf1;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        :hover {
            background-color: #06d2e7;
        }

    }

`

export const CardImg = styled.div`
    width: 100%;
    height: 50%;
    img {
        width: 100%;
        height: 100%;
    }
`

export const CardDetails = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`