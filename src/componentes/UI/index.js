import styled from "styled-components";
import { colores } from "./variables";
import banner from "../../activos/img/terror.jpg"


//Boton varios usus
export const Btn = styled.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  padding: 8px 20px;
//Colores base del boton
  color: ${colores.cNegro};
  background: ${colores.cBlanco};
  border: 1px solid ${colores.cNegro};
  //margin-top: 50px;
  
`;
//h1 estilizado de la pagina
export const Styledh1= styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-style: italic;
    background: transparent;
    color: ${colores.cRojo};
    font-size: 40px;
    margin: 8px;
    text-shadow: 2px 0 0 black, -2px 0 0 black, 0 2px 0 black, 0 -2px 0 black;
`
//h2 estilizado de la pagina
export const Styledh2= styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-style: italic;
    font-weight: 300;
    background: transparent;
    color: ${colores.cBlanco};
    font-size: 24px;
    margin: 8px;
    text-shadow: 1px 0 0 black, -1px 0 0 black, 0 1px 0 black, 0 -1px 0 black;
`
//seccion banner estilizada background-image: url(${banner});
export const StyledBanner= styled.section`
display: flex;
box-sizing: border-box;
background-image: url(${banner});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
height: 500px;
justify-content: space-around;
align-items: center;
border-bottom: 3px solid ${colores.cLacre};
position: relative;
`
//Caja texto para banner
export const StyledCajaTextoBanner= styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    box-sizing: border-box;
    background: ${colores.cGrisClaro};
    position: absolute;
    left:0;
    margin-left: 100px;
`
//Header, Footer
 export const StyledBox = styled.section`
  background-color: ${colores.cNegro};
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  height: 70px;
  align-items: center;
  border-bottom: 2px solid ${colores.cGrisClaro};
  border-top: 2px solid ${colores.cGrisClaro};
`
export const StyledBox1 = styled.section`
  background-color: ${colores.cBlanco};
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  height: 70px;
  align-items: center;
  border-bottom: 2px solid ${colores.cBlanco};
  border-top: 2px solid ${colores.cBlanco};
  gap:10px
 `
export const StyledBox2 = styled.section`
display: flex;
justify-content: start;
gap:10px
`
 export const StyledBox3 = styled.section`
 
 display: flex;
 justify-content: end;
 `

//carrusel y video
 export const StyledBox4 = styled.section`
  position: relative;
 
`

export const StyledBoxBanner = styled.section`
  position: relative;
`

export const StyledBoxVideo = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 70px;
  margin-right: 75px;
`

export const StyledBoxCarrusel = styled.section`
  position: relative;
  bottom: 0;
`

export const StyledBoxCarruselimage = styled.section`
  
{display: flex;
justify-content: center;
&:hover {
    background-color: gray;
    opacity: 0.5;
   
  }}
`
export const StyledBoxCarrusecontainer= styled.section`
{
  box-sizing: border-box;
  margin: 0 auto;
  width: 90%;
  margin-bottom:25px;
  margin-top: 25PX;
 
  gap:20px;
  background-color: darkgrey;
 
}`

export const StyledBoxCarrusecontainer2= styled.section`
{
  margin-bottom:35px;
  margin-top: 35px;

  
 
}`

export const StyledBoxPost_stitle = styled.section`
display: flex;
justify-content: center;
color: red;
font-size: 30px;
text-shadow: 2px 0 0 black, -2px 0 0 black, 0 2px 0 black, 0 -2px 0 black;
}`

export const StyledBoxPost_stitle2 = styled.section`
display: flex;
justify-content: center;
color: black;
font-size: 15px;

}`

export const StyledMagicTrick= styled.div`
  
  @media (max-width: 768px) {
    display: none;
}
`
