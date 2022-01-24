import styled from 'styled-components';

export const FilterStyle = styled.section`
    width: 30vw;
    height: 100vh;
    padding: 20px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h4 {
        margin-bottom: 10px;
    }
`

export const FilterPrice = styled.div`
    width: 100%;
    height: 50px;
    position: relative;
    display: flex;
    align-items: center;

    p:nth-child(1) {
        position: absolute;
        left: 0;
    }
    p:nth-child(2) {
        position: absolute;
        right: 30%;
    }
`