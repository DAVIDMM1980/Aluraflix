import styled from "styled-components"
import { Link } from "react-router-dom"
import logo from "../../activos/img/logo1.png";
//C:\Users\joker\react_challenge_alura\src\activos\img\imagen1.png


const StyledLogo = styled.img`
height:65px;
width: 100px;
`

const Logo=()=>{
    return <Link to={`/`}>
         <StyledLogo src={logo} alt="terrorflix"/>
    </Link>
}

export default Logo