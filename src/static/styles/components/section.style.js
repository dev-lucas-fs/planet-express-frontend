import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2 {
            font-weight: 700;
            font-size: 22px;
            color: #1D1D1D;
        }
    }
`

export const Content = styled.div`
    min-width: 100vw;
    overflow-x: scroll;
    display: flex;
    gap: 10px;
    padding: 10px 50px 20px 0;
`

export const Address = styled.div`
    padding: 15px;
    background: #fff;
    flex: 0 0 70%;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media screen and (min-width: 400px){
        flex: 0 0 300px;
    }

    header {
        h2 {
            color: #D12A26;
            font-size: 18px;
        }
    }
    .texts {
        display: flex;
        flex-direction: column;
        font-weight: 700;
        font-size: 16px;
        color: #1D1D1D;
        
        h3 {
            display: inline-block;
            padding: 2.5px 0;
            white-space: nowrap;
            text-overflow: ellipsis;
            width: calc(95%);
        }
    }
`