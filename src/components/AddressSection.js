import { MdAddCircle } from "react-icons/md";
import { Address, Container, Content } from "../static/styles/components/section.style"
import useGetAddress from "../hooks/API/useGetAddress";
import { useEffect } from "react";
import { useState } from "react";


export default function AddressSection()
{
    const { getAddress } = useGetAddress()
    const [address, setAddress] = useState([])

    async function findAddress()
    {
        try {
            const response = await getAddress();
            setAddress(() => response);
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        findAddress();
    }, [])

    return (
        <Container>
            <header>
                <h2>Meus Endereços</h2>
                <MdAddCircle size={24} color="#1D1D1D"/>
            </header>

            <Content>
                {
                    address.map((el, i) => (
                        <Address key={i + 1}>
                            <header>
                                <h2>{ el.name }</h2>
                            </header>
                            <div className="texts">
                                <h3>{ el.street }</h3>
                                <h3>{ `N° ${el.number} - ${el.cep}` }</h3>
                                <h3>{ el.neighborhood }</h3>
                                <h3>{ `${el.city} - ${el.state}` }</h3>
                            </div>
                        </Address>
                    ))
                }
            </Content>

        </Container>
    );
}
