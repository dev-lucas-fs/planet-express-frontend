import { useNavigate } from "react-router-dom"
import { PrimaryButton } from "../components/Buttons/PrimaryButton"
import PlanetExpress from "../static/images/planet-express.png"
import { Container } from "../static/styles/page/home.style.js"


export default function Home()
{
    const navigate = useNavigate()

    return (
        <Container>
            <img src={PlanetExpress} alt="Logo do Site"/>

            <p>Entre ou crie uma conta para continuar</p>

            <div className="buttons">
                <PrimaryButton onClick={() => navigate("/sign-in")}>Entrar com o e-mail</PrimaryButton>
            </div>

        </Container>
    )
}