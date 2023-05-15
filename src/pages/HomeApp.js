import DefaultLayout from "./Layouts/DefaultLayout";
import { BottomBar, Container, TopBar, Content } from "../static/styles/page/homeApp.style"
import PlanetExpress from "../static/images/planet-express.png"
import { MdHomeFilled, MdPerson } from "react-icons/md"
import AddressSection from "../components/AddressSection";



export default function HomeApp()
{
    return (
        <DefaultLayout>
            <Container>     
                <TopBar>
                    <img src={PlanetExpress} alt="Planet Express Logo" />
                    <h1>Lucas</h1>
                </TopBar>

                <Content>
                    <AddressSection />
                </Content>

                <BottomBar>
                    <MdHomeFilled size={25} color="#D12A26"/>
                    <MdPerson size={25} color="#1D1D1D"/>
                </BottomBar>
            </Container>
        </DefaultLayout>
    )
}