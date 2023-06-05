//import VideoCard from "../Carousel/VideoCard"
import { Styledh1,Styledh2,StyledCajaTextoBanner,StyledBanner, StyledMagicTrick } from "../UI"
import Categoria from "../Categoria"
import Video from "../Video"
import VideoCard from "../Carrusel/VideoCard"


const Banner=(props)=>{
    return <StyledBanner>
        
        <StyledCajaTextoBanner>
            <Styledh1>TerrorFlix</Styledh1>
            <Styledh2>Web Especializada en Contenido de Terrorifico</Styledh2>
            
        </StyledCajaTextoBanner>
        <StyledMagicTrick>

        {/*<VideoCard  titulo='Video para banner'/>*/}

            </StyledMagicTrick>

    
  
    </StyledBanner>
   
}

export default Banner