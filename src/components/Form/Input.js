import styled from "styled-components";
import { Container } from "../../static/styles/components/form/input.style";


export default function Input({ name, reference, ...rest }) 
{

    return (
        <Container>
            <span className="name">{ name }</span>
            <input ref={reference} {...rest}/>
        </Container>
    )
}