import styled from "styled-components";


export const TopBar = styled.div`
    padding: 15px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    grid-row: 1/2;
    img {
        width: 50px;
        object-fit: cover;
    }

    h1 {
        font-family: 'Inter';
        font-weight: 700;
        font-size: 24px;
        color: #1D1D1D;
    }
`

export const Container = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
`

export const BottomBar = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 12px;
    background: #EFD456;
    grid-row: 3/4;
`

export const Content = styled.div`
    padding: 10px 20px;
    grid-row: 2/3;
`