import { useRef } from "react"
import Input from "../components/Form/Input"
import { PrimaryButton } from "../components/Buttons/PrimaryButton";
import FormLayout from "./Layouts/FormLayout";
import { Container } from "../static/styles/page/signIn.style"
import { useNavigate } from "react-router-dom";
import useSignUp from "../hooks/API/useSignUp";


export default function SignUp()
{
    const { emailRef, passwordRef, nameRef, cpfRef, dataNascimentoRef } = {
        passwordRef: useRef(null),
        emailRef: useRef(null),
        nameRef: useRef(null),
        cpfRef: useRef(null),
        dataNascimentoRef: useRef(null)
    }
    const { signUp } = useSignUp();
    const navigate = useNavigate();

    async function handleSubmit(e) 
    {
        e.preventDefault();
        
        if(emailRef.current === null || passwordRef.current === null || nameRef.current === null || cpfRef.current === null || dataNascimentoRef.current === null)
            return;

        const values = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            name: nameRef.current.value,
            cpf: cpfRef.current.value,
            dataNascimento: dataNascimentoRef.current.value,
        }

        console.log(values)

        try {
            const response = await signUp(values)

            navigate("/sign-in")
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <FormLayout title={"Cadastro"} name={"Informe seus dados"}>
            <Container>
                <form onSubmit={handleSubmit}>
                    <Input value="Lucas" name="Nome" type={"text"} reference={nameRef}/>
                    <Input value="lucasfs@dcc.ufrj.br" name="E-mail" type={"email"} reference={emailRef}/>
                    <Input value="123" name="Password" type={"password"} reference={passwordRef}/>
                    <Input value="12591267731" name="CPF" type={"text"} reference={cpfRef}/>
                    <Input value="2000-09-11" name="Data de nascimento" type={"date"} reference={dataNascimentoRef}/>

                    <PrimaryButton>
                        Criar conta
                    </PrimaryButton>
                </form>
            </Container>
        </FormLayout>
    )
}