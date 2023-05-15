import styled from "styled-components";



export const Container = styled.div`
    position: relative;
    
    &:focus-within {

        .name {
            color: #D12A26;
            transition: all .1s linear;
        }

        input {
            color: #D12A26;
            border-color: #D12A26;
            transition: all .1s linear;
        }
    }

    .name {
        position: absolute;
        top: 0px;
        left: 10px;
        padding: 5px 10px;
        font-size: 12px;
        background-color: #FBFAFA;
        color: #ABABAB;
        transition: all .1s linear;
    }

    input {
        width: 100%;
        background: transparent;
        border: 1.5px solid #ABABAB;
        border-radius: 5px;
        outline: none;
        margin-top: 10px;
        padding: 15px 10px;
        font-size: 16px;
        transition: all .1s linear;
    }
`