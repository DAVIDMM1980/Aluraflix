import "./Footer.css"
import logo from "../../activos/img/logo1.png";
import styled from "styled-components"

const StyledLogo = styled.img`
height:65px;
width: 100px;
`

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <StyledLogo src={logo} alt="org"/>
       
        <strong>Desarrollado por DMM</strong>
    </footer>
}

export default Footer
//"../../activos/img/imagen1.svg"
//<img src='/img/imagen1.svg' alt='org' />
// <img src={logo} alt='org' />
