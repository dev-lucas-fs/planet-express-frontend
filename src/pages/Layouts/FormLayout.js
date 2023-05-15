import { TopBar, Container } from "../../static/styles/page/layout/formLayout.style";




export default function FormLayout({ title, name, children })
{
    return (
        <Container>
            <TopBar>{ title }</TopBar>

            <div className="content">

                <p>{ name }</p>

                { 
                    children
                }
            </div>
        </Container>
    )
}