import { useRef } from "react"
import Input from "../components/Form/Input"
import { PrimaryButton } from "../components/Buttons/PrimaryButton";
import useSignIn from "../hooks/API/useSignIn";
import FormLayout from "./Layouts/FormLayout";
import { Container } from "../static/styles/page/signIn.style"
import { useNavigate } from "react-router-dom";


export default function SignIn()
{
    const { emailRef, passwordRef } = {
        passwordRef: useRef(null),
        emailRef: useRef(null)
    }
    const { signIn } = useSignIn();
    const navigate = useNavigate();

    async function handleSubmit(e) 
    {
        e.preventDefault();
        if(emailRef.current === null)
            return;
        
        const values = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        try {
            const response = await signIn(values)
            localStorage.setItem("user-token", `Bearer ${response.accessToken}`)
            navigate("/app")
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <FormLayout title={"Login"} name={"Informe os dados"}>
            <Container>
                <form onSubmit={handleSubmit}>
                    <Input value="lucasfs@dcc.ufrj.br" name="E-mail" type={"email"} reference={emailRef}/>
                    <Input value="123" name="Password" type={"password"} reference={passwordRef}/>

                    <PrimaryButton>
                        Entrar
                    </PrimaryButton>
                </form>
            </Container>
        </FormLayout>
    )
}