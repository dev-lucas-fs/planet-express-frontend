import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #FBFAFA;
    display: flex;
    flex-direction: column;

    .content {
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
        padding: 15px;

        > p {
            font-family: 'Inter';
            font-weight: 700;
            font-size: 16px;
            color: #1D1D1D;
            padding: 15px 0;
        }

    }
`

export const TopBar = styled.div`
    width: 100%;
    background: #EFD456;
    padding: 20px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
`