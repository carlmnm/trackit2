import styled from "styled-components"
import logo from "../assets/imgs/logo.png"

export default function MakeLongin() {
    return (
        <Container>
            <Logo>
                <img src={logo} alt="logo" />
            </Logo>
        </Container>
    )
}

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
background-color: powderblue;

`
const Logo = styled.div`
.img{

}
`