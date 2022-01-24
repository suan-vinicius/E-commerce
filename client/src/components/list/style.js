import styled from 'styled-components';

export const ListSection = styled.section`
    position: absolute;
    bottom: -230%;
    right: 5%;
    width: 25vw;
    height: 50vh;
    background-color: #c8eaf1;
    border-radius: 5px;
    border: 1px solid #06d2e7;
    overflow-y: auto;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        width: 12px;
        color: white
    }

    ::-webkit-scrollbar-track {
        background: #c8eaf1;
      }
      
    ::-webkit-scrollbar-thumb {
        background-color: #c8eaf1;
        border: 2px solid white;
        border-radius: 20px;
    }
`

export const ListItem = styled.div`
    margin: 10px;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;

    p {
        max-width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    img {
        width: 20%;
        height: 100%;
    }
`