
import styled from "styled-components"
import { colores } from "../../UI/variables"
import ReactPlayer from 'react-player'




const VideoCard=()=>{
  return <div className="video">

 //
   
   
   <div className='player-wrapper'>

       <ReactPlayer
         className='react-player'
         url="https://youtu.be/7tXKCSk9zZ4"
         width='480px'
         height='360px'
         controls={true}
  />
  </div>
 </div>
}

export default VideoCard
//src="https://youtu.be/lVL-zZnD3VU" 
//{/* <AiFillCloseCircle className="eliminar" onClick={()=>eliminarVideo(id)} />*/}