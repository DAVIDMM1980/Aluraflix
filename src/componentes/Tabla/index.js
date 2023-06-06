import {useState} from 'react';
 import {v4 as uuid} from 'uuid';
 //import './App.css';
 import Categoria from "../Categoria";
 import Formulario from "../Formulario";
 import { Link } from "react-router-dom";
 //import "./NuevoVideoMenu.css"
   
 
 
 function Tabla() {
 
 const [categorias, actualizarCategorias] = useState([ 
       {
       id: uuid(),
       titulo: "Asesinos",
       colorPrimario: "white",
       colorSecundario: "#D9F7E9"
       },
       {     
       id: uuid(),
       titulo: "Vampiros",
       colorPrimario: "white",
       colorSecundario: "#E8F8FF"
       },
       {     
       id: uuid(), 
       titulo: "Monstruos",
       colorPrimario: "white",
       colorSecundario: "#F0F8E2"
       },
       {     
       id: uuid(),
       titulo: "Demonios",
       colorPrimario: "white",
       colorSecundario: "#FDE7E8"
       },
       {     
       id: uuid(),
       titulo: "Casas Embrujadas",
       colorPrimario: "white",
       colorSecundario: "#FAE9F5"
       },
       {     
       id: uuid(),
       titulo: "Cementerios",
       colorPrimario: "white",
       colorSecundario: "#FFF5D9"
       },
       {     
       id: uuid(),
       titulo: "Zombies",
       colorPrimario:"white",
       colorSecundario: "#FFEEDF"
       
       }
       ])
             
 
 
       
       
 
 
 
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  
  const [videos, actualizarVideos] = useState([
 
 
 
   
       {
 
       id: uuid(),
       categoria: "Asesinos",
       linkVideo: "https://youtu.be/qgb4mzau-34"  ,
       foto: "https://github.com/harlandlohora.png",
       nombre: "Harland Lohora",
       descripcion: "Peliculas Asesinos"
       ,fav: true
     },
     
 
     { id: uuid(),
       categoria: "Vampiros",
       linkVideo: "https://youtu.be/k0pgLOTj0zw",
       foto: "https://github.com/harlandlohora.png",
       nombre: "Genesys Rondón",
       descripcion: "Peliculas Vampiros"
       ,fav: false
     },
 
    
 
     { id: uuid(),
       categoria: "Monstruos",
       linkVideo: "https://youtu.be/qgb4mzau-34",
       foto: "https://github.com/harlandlohora.png",
       nombre: "Jeanmarie Quijada",
       descripcion: "Peliculas Monstruos"
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
    
    {window.location.pathname === "/nueva-categoria"
      ? categorias.map((categoria) => (
          <Categoria className="datos" datos={categoria} key={categoria.titulo}
            videos={videos.filter((video) => video.categoria === categoria.titulo)}
            eliminarVideo={eliminarVideo}
            //actualizatColor={actualizatColor}
            like={like}
          />
        ))
      : null}
  </div>
);


   }
 
 
 export default Tabla
 