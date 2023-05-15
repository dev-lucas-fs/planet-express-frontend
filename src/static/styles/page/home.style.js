import styled from "styled-components";


export const Container = styled.div`
    height: 100vh;
    background: #FBFAFA;
    display: grid;
    grid-template-rows: 1fr auto auto;
    padding: 10px 10px 10vh 10px;

    img {
        max-height: 200px;
        height: 30vw;
        grid-row: 1/2;
        align-self: center;
        justify-self: center;
    }

    p {
        grid-template-rows: 2/3;
        text-align: center;
        padding: 10px;
        font-weight: bold;
        font-size: 16px;
        color: #1D1D1D;

    }

    .buttons {
        grid-template-rows: 3/4;
    }
`