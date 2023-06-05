/*import Banner from "../componentes/Banner";
import Carrusel from "../componentes/Carrusel/Carrusel";
import { colores } from "../componentes/UI/variables";
import styled from "styled-components";

const StyledHome= styled.div`
    background: ${colores.cNegro};
`

const Home=({arregloVideos})=>{
  
    return <main>
        <Banner />
        <StyledHome>
        <Carrusel arregloVideos={arregloVideos} tituloCarrusel={'Lo mas visto'}/>
          <Carrusel arregloVideos={arregloVideos} tituloCarrusel={'Nuevos'}/>
          <Carrusel arregloVideos={arregloVideos} tituloCarrusel={'Para ti'}/>
        </StyledHome>
    </main>
}

export default Home*/

import MyCarousel from "../componentes/Carrusel/Slider"


const Home = () => {
  return (
    <main>
    
      <MyCarousel/> 
     
    </main>
  )
}

export default Home

//<Banner/>
//< ListPosts/> <ListCategories/><MyCarousel/>
