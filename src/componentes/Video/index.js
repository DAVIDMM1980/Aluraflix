
import "./Video.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import ReactPlayer from 'react-player'

//colaborador video puesto
    const Video = (props) => {
    const { nombre, descripcion, linkVideo,foto, categoria, id, fav } = props.datos
    const { colorPrimario, eliminarVideo, like } = props

    //condicion ? verdadero :falso

    return <div className="datos">
       
      {/*<AiFillCloseCircle className="eliminar" onClick={()=>eliminarVideo(id)} />*/}
        
         <div className="info">
             <h1>{categoria}</h1>
            <h2>{descripcion}</h2>
            <h3>Editar</h3>
            <section class Name="eliminar" onClick={()=>eliminarVideo(id)}>eliminar</section>
            
         {/*{fav ? <AiFillHeart color="red" onClick={()=> like(id)} />: <AiOutlineHeart onClick={()=> like(id)}/>}*/}
            {/* < AiFillCloseCircle className="eliminar" onClick={()=>eliminarVideo(id)} />*/}
            

        </div>
    </div>
}

export default Video
//< AiFillCloseCircle className="eliminar" onClick={()=>eliminarVideo(id)} />






/*import "./Video.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import ReactPlayer from 'react-player'


//colaborador video puesto
    const Video = (props) => {
    const { nombre, descripcion, linkVideo,foto, categoria, id, fav } = props.datos
    const { colorPrimario, eliminarVideo, like } = props

    //condicion ? verdadero :falso

    return <div className="video">
    
   

        <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
          
        <img src={foto} alt={nombre} />
       
        <div className='player-wrapper'>
  
  <ReactPlayer
    className='react-player'
    url={linkVideo}
    width='320px'
    height='240px'
    controls={true}
/>

</div>
     </div>
         <div className="info">
            <h4>{nombre}</h4>
            <h5>{descripcion}</h5>
           
            {fav ? <AiFillHeart color="red" onClick={()=> like(id)} />: <AiOutlineHeart onClick={()=> like(id)}/>}
            <AiFillCloseCircle className="eliminar" onClick={()=>eliminarVideo(id)} />
           

        </div>
    </div>
}

export default Video*/
/*<img src={linkVideo} alt={nombre} />
{fav ? <AiFillHeart color="red" onClick={()=> like(id)} />: <AiOutlineHeart onClick={()=> like(id)}/>}
*/
//{/**/}
// {/*<AiFillCloseCircle className="eliminar" onClick={()=>eliminarVideo(id)} /> */}
