import styled from 'styled-components';

export const HeaderStyle = styled.header`
    position: absolute;
    width: 100vw;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #c8eaf1;
    position: relative;

    input {
        outline: none;
        width: 30%;
        height: 25%;
        border: none;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
        border-left: none;
    }
`

export const IconSearch = styled.div`
    width: 30px;
    height: 27%;
    background-color: white;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    border-right: none;
    display: flex;
    align-items: center;
`