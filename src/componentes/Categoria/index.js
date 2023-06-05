import React from 'react';
import "./Categoria.css"
import Video from "../Video"
import hexToRgba from 'hex-to-rgba';
//colaborador video puesto


const Categoria = (props) => { 
   
    const {colorPrimario, colorSecundario, titulo, id } = props.datos
    const {videos, eliminarVideo, actualizatColor, like} = props
    const obj = {backgroundColor: hexToRgba (colorPrimario,0.6)}
   

    const estiloTitulo = {borderColor:colorPrimario}

    return <> { 
        videos.length > 0 &&
        <section className="categoria" style={obj}>
          <h3 style=  {{estiloTitulo}}  >{titulo}</h3>
          <div className="videos">
            {
                videos.map((video, index)=><Video
                    datos={video}
                    key={index} 
                    colorPrimario={colorPrimario}
                    eliminarVideo = {eliminarVideo}
                    like={like}
                 />)
            }
        </div>
    </section>
}
</>
}

export default Categoria