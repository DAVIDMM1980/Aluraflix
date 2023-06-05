import {useState} from 'react';
 import {v4 as uuid} from 'uuid';
 //import './App.css';
 import Categoria from "../Categoria";
 import Formulario from "../Formulario";
 
   
 
 
 function NuevoVideoMenu() {
 
 const [categorias, actualizarCategorias] = useState([ 
       {
       id: uuid(),
       titulo: "Aliens",
       colorPrimario: "#57C278",
       colorSecundario: "#D9F7E9"
       },
       {     
       id: uuid(),
       titulo: "Fantasmas",
       colorPrimario: "#82CFFA",
       colorSecundario: "#E8F8FF"
       },
       {     
       id: uuid(), 
       titulo: "Monstruos",
       colorPrimario: "#A6D157",
       colorSecundario: "#F0F8E2"
       },
       {     
       id: uuid(),
       titulo: "Demonios",
       colorPrimario: "#E06B69",
       colorSecundario: "#FDE7E8"
       },
       {     
       id: uuid(),
       titulo: "Casas Embrujadas",
       colorPrimario: "#DB6EBF",
       colorSecundario: "#FAE9F5"
       },
       {     
       id: uuid(),
       titulo: "Cementerios",
       colorPrimario: "#FFBA05",
       colorSecundario: "#FFF5D9"
       },
       {     
       id: uuid(),
       titulo: "Zombies",
       colorPrimario: "#FF8A29",
       colorSecundario: "#FFEEDF"
       
       }
       ])
             
 
 
       
       
 
 
 
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  
  const [videos, actualizarVideos] = useState([
 
 
 
   
       {
 
       id: uuid(),
       categoria: "Fantasmas",
       linkVideo: "https://youtu.be/qgb4mzau-34"  ,
       foto: "https://github.com/harlandlohora.png",
       nombre: "Harland Lohora",
       descripcion: "Instructor"
       ,fav: true
     },
     {
 
       id: uuid(),
       categoria: "Fantasmas",
       linkVideo: "https://youtu.be/qgb4mzau-34"  ,
       foto: "https://github.com/harlandlohora.png",
       nombre: "Harland Lohora",
       descripcion: "Instructor"
       ,fav: true
     },
     {
 
       id: uuid(),
       categoria: "Fantasmas",
       linkVideo: "https://youtu.be/qgb4mzau-34"  ,
       foto: "https://github.com/harlandlohora.png",
       nombre: "Harland Lohora",
       descripcion: "Instructor"
       ,fav: true
     },
 
     { id: uuid(),
       categoria: "Demonios",
       linkVideo: "https://youtu.be/k0pgLOTj0zw",
       foto: "https://github.com/harlandlohora.png",
       nombre: "Genesys Rondón",
       descripcion: "Desarrolladora de software e instructora"
       ,fav: false
     },
 
     { id: uuid(),
       categoria: "Demonios",
       linkVideo: "https://youtu.be/k0pgLOTj0zw",
       foto: "https://github.com/harlandlohora.png",
       nombre: "Genesys Rondón",
       descripcion: "Desarrolladora de software e instructora"
       ,fav: false
     },
 
     { id: uuid(),
       categoria: "Demonios",
       linkVideo: "https://youtu.be/k0pgLOTj0zw",
       foto: "https://github.com/harlandlohora.png",
       nombre: "Genesys Rondón",
       descripcion: "Desarrolladora de software e instructora"
       ,fav: false
     },
 
     { id: uuid(),
       categoria: "Casas Embrujadas",
       linkVideo: "https://youtu.be/qgb4mzau-34",
       foto: "https://github.com/harlandlohora.png",
       nombre: "Jeanmarie Quijada",
       descripcion: "Instructora en Alura Latam"
       ,fav: true
     },
     
     { id: uuid(),
       categoria: "Casas Embrujadas",
       linkVideo: "https://youtu.be/qgb4mzau-34",
       foto: "https://github.com/harlandlohora.png",
       nombre: "Jeanmarie Quijada",
       descripcion: "Instructora en Alura Latam"
       ,fav: true
     },
 
     { id: uuid(),
       categoria: "Casas Embrujadas",
       linkVideo: "https://youtu.be/qgb4mzau-34",
       foto: "https://github.com/harlandlohora.png",
       nombre: "Jeanmarie Quijada",
       descripcion: "Instructora en Alura Latam"
       ,fav: true
     },
 
 ])
 
 //Tenario --> condicion? seMuestra : noseMuestra
 //condicion && seMuestra
   const cambiarMostrar = () => {
     actualizarMostrar( !mostrarFormulario)}
 
 //registar video
 const registrarVideo = (video) => {
       console.log ("Nuevo video",video)
       actualizarVideos([...videos,video] )
 }
 
 //Eliminar video
 const eliminarVideo = (id) => {
       console.log ("Eliminar video", id)
       const nuevosVideos = videos.filter(video=> video.id !==id)
     actualizarVideos( nuevosVideos)
 }
 
 
 
 //Actualizar color de categoria
 
 const actualizatColor = (color, id) => {
       console.log ("Actualizar",color, id)
       const categoriaActualizados = categorias.map((categoria) =>{
          if (categoria.id === id) {
             categoria.colorPrimario = color}
 
          return categoria
       })
       actualizarCategorias(categoriaActualizados)
 }
 
 //Crear categoria
 const crearCategoria = (nuevoCategoria) => {
       console.log (nuevoCategoria)
 actualizarCategorias ([...categorias, { ...nuevoCategoria, id: uuid()}] )
 }
 
 const like = (id) => {
    const videosActualizados = videos.map ((video) => {
       if (video.id === id){
             video.fav = !video.fav 
 }
       return video
 })
 actualizarVideos(videosActualizados)//nuevo 
 }
 
 return (
   
   <div>
 
      
       {mostrarFormulario &&  <Formulario 
             categorias= {categorias.map((categoria)=>  categoria.titulo)}
             registrarVideo= {registrarVideo}
             crearCategoria= {crearCategoria}
             />}
       
       
 
       
   </div>
   );
   }
 
 
 export default NuevoVideoMenu
 
 








  
  
 
 
    

 
 
 
 
  






  


/*
 import {useState} from 'react';
 import {v4 as uuid} from 'uuid';
 //import './App.css';
 import Categoria from "../Categoria";
 import Formulario from "../Formulario";
 
   
 
 
 function NuevoVideoMenu() {
 
 const [categorias, actualizarCategorias] = useState([ 
       {
       id: uuid(),
       titulo: "Aliens",
       colorPrimario: "#57C278",
       colorSecundario: "#D9F7E9"
       },
       {     
       id: uuid(),
       titulo: "Fantasmas",
       colorPrimario: "#82CFFA",
       colorSecundario: "#E8F8FF"
       },
       {     
       id: uuid(), 
       titulo: "Monstruos",
       colorPrimario: "#A6D157",
       colorSecundario: "#F0F8E2"
       },
       {     
       id: uuid(),
       titulo: "Demonios",
       colorPrimario: "#E06B69",
       colorSecundario: "#FDE7E8"
       },
       {     
       id: uuid(),
       titulo: "Casas Embrujadas",
       colorPrimario: "#DB6EBF",
       colorSecundario: "#FAE9F5"
       },
       {     
       id: uuid(),
       titulo: "Cementerios",
       colorPrimario: "#FFBA05",
       colorSecundario: "#FFF5D9"
       },
       {     
       id: uuid(),
       titulo: "Zombies",
       colorPrimario: "#FF8A29",
       colorSecundario: "#FFEEDF"
       }
       ])
             
 
 
       
       
 
 
 
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [videos, actualizarVideos] = useState([
 
 
 
   
       {
 
       id: uuid(),
       categoria: "Fantasmas",
       linkVideo: "https://youtu.be/qgb4mzau-34"  ,
       foto: "https://github.com/harlandlohora.png",
       nombre: "Harland Lohora",
       descripcion: "Instructor"
       ,fav: true
     },
     {
 
       id: uuid(),
       categoria: "Fantasmas",
       linkVideo: "https://youtu.be/qgb4mzau-34"  ,
       foto: "https://github.com/harlandlohora.png",
       nombre: "Harland Lohora",
       descripcion: "Instructor"
       ,fav: true
     },
     {
 
       id: uuid(),
       categoria: "Fantasmas",
       linkVideo: "https://youtu.be/qgb4mzau-34"  ,
       foto: "https://github.com/harlandlohora.png",
       nombre: "Harland Lohora",
       descripcion: "Instructor"
       ,fav: true
     },
 
     { id: uuid(),
       categoria: "Demonios",
       linkVideo: "https://youtu.be/k0pgLOTj0zw",
       foto: "https://github.com/harlandlohora.png",
       nombre: "Genesys Rondón",
       descripcion: "Desarrolladora de software e instructora"
       ,fav: false
     },
 
     { id: uuid(),
       categoria: "Demonios",
       linkVideo: "https://youtu.be/k0pgLOTj0zw",
       foto: "https://github.com/harlandlohora.png",
       nombre: "Genesys Rondón",
       descripcion: "Desarrolladora de software e instructora"
       ,fav: false
     },
 
     { id: uuid(),
       categoria: "Demonios",
       linkVideo: "https://youtu.be/k0pgLOTj0zw",
       foto: "https://github.com/harlandlohora.png",
       nombre: "Genesys Rondón",
       descripcion: "Desarrolladora de software e instructora"
       ,fav: false
     },
 
     { id: uuid(),
       categoria: "Casas Embrujadas",
       linkVideo: "https://youtu.be/qgb4mzau-34",
       foto: "https://github.com/harlandlohora.png",
       nombre: "Jeanmarie Quijada",
       descripcion: "Instructora en Alura Latam"
       ,fav: true
     },
     
     { id: uuid(),
       categoria: "Casas Embrujadas",
       linkVideo: "https://youtu.be/qgb4mzau-34",
       foto: "https://github.com/harlandlohora.png",
       nombre: "Jeanmarie Quijada",
       descripcion: "Instructora en Alura Latam"
       ,fav: true
     },
 
     { id: uuid(),
       categoria: "Casas Embrujadas",
       linkVideo: "https://youtu.be/qgb4mzau-34",
       foto: "https://github.com/harlandlohora.png",
       nombre: "Jeanmarie Quijada",
       descripcion: "Instructora en Alura Latam"
       ,fav: true
     },
 
 ])
 
 //Tenario --> condicion? seMuestra : noseMuestra
 //condicion && seMuestra
   const cambiarMostrar = () => {
     actualizarMostrar( !mostrarFormulario)}
 
 //registar video
 const registrarVideo = (video) => {
       console.log ("Nuevo video",video)
       actualizarVideos([...videos,video] )
 }
 
 //Eliminar video
 const eliminarVideo = (id) => {
       console.log ("Eliminar video", id)
       const nuevosVideos = videos.filter(video=> video.id !==id)
     actualizarVideos( nuevosVideos)
 }
 
 
 
 //Actualizar color de categoria
 
 const actualizatColor = (color, id) => {
       console.log ("Actualizar",color, id)
       const categoriaActualizados = categorias.map((categoria) =>{
          if (categoria.id === id) {
             categoria.colorPrimario = color}
 
          return categoria
       })
       actualizarCategorias(categoriaActualizados)
 }
 
 //Crear categoria
 const crearCategoria = (nuevoCategoria) => {
       console.log (nuevoCategoria)
 actualizarCategorias ([...categorias, { ...nuevoCategoria, id: uuid()}] )
 }
 
 const like = (id) => {
    const videosActualizados = videos.map ((video) => {
       if (video.id === id){
             video.fav = !video.fav 
 }
       return video
 })
 actualizarVideos(videosActualizados)//nuevo 
 }
 
 return (
   
   <div>
 
      
       {mostrarFormulario &&  <Formulario 
             categorias= {categorias.map((categoria)=>  categoria.titulo)}
             registrarVideo= {registrarVideo}
             crearCategoria= {crearCategoria}
             />}
       
       
 
 {
   categorias.map((categoria) => <Categoria
     datos={categoria}
     key={categoria.titulo}
     videos={videos.filter(video => video.categoria === categoria.titulo)}
     eliminarVideo={eliminarVideo}
     //actualizatColor={actualizatColor}
     like = {like}
     />
     )
   }  
   </div>
   );
   }
 
 
 export default NuevoVideoMenu
 
 






 return (
   <div>
    {mostrarFormulario &&  <Formulario 
             categorias= {categorias.map((categoria)=>  categoria.titulo)}
             registrarVideo= {registrarVideo}
             crearCategoria= {crearCategoria}
             />}
       
 
 
       
  </div> );
  */
