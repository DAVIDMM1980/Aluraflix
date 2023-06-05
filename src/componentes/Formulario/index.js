import React from 'react';
import {useState} from 'react';
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
import Tabla from '../Tabla';
import { useLocation } from 'react-router-dom';

import { colores } from "../UI/variables";

import { StyledBox1, StyledBox2,  StyledBox3} from "../UI"

import { Link } from "react-router-dom";

   

const Formulario = (props) => {
  const location = useLocation();

  const [nombre, actualizarNombre] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")
    const [linkVideo, actualizarLinkVideo] = useState("") // mayus
    const [foto, actualizarFoto] = useState("")
    const [categoria, actualizarCategoria] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")
    const { registrarVideo, crearCategoria } = props
    
  
    const manejarEnvio = (e) => {  
        e.preventDefault()
          console.log("Manejar el envio")
        let datosAEnviar = {  
            nombre, 
            descripcion, 
            linkVideo,  
            foto,      
            categoria
        }

        
       registrarVideo(datosAEnviar)
        }

        const manejarNuevoCategoria = (e) => {   
              e.preventDefault()
              crearCategoria({ titulo, colorPrimario: color} )
        }       
  
  switch (location.pathname) {
    case '/nuevo-video':
      return   (
        <section className="formulario">

          <form onSubmit={manejarEnvio}>
            <h2>Nuevo video</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Titulo" 
                required 
                valor = {nombre} 
                actualizarValor = {actualizarNombre}
            />
            <Campo 
                titulo="LinkVideo" 
                placeholder="Link del video"
                 required
                 valor = {linkVideo} 
                 actualizarValor = {actualizarLinkVideo}//may
                 
            />
            <Campo
                titulo="Foto" 
                placeholder="Link imagem del video"
                 required
                 valor = {foto} 
                 actualizarValor = {actualizarFoto}
                 
            />
            <Campo 
                titulo="Descripcion" 
                placeholder="Descripción" 
                required 
                valor = {descripcion} 
                actualizarValor = {actualizarDescripcion}
            /> 
            <ListaOpciones
                valor = {categoria} 
                actualizarCategoria = {actualizarCategoria}
                categorias= {props.categorias}
            />
            {/*<Campo 
                titulo="CodigoSeguridad" 
                placeholder="Código de seguridad" 
                //required 
                /> */} 

       <StyledBox1>
       <StyledBox2>
        <Boton> Guardar </Boton>
        <Boton> limpiar</Boton>
        </StyledBox2>
        <StyledBox3>
        <Link to={'/nueva-categoria'}>
        <Boton colorFondo={colores.cblanco} colorLetra={colores.cRojo} borde={'si'}>
        Nueva Categoria
        </Boton>
        </Link>
        </StyledBox3>
        </StyledBox1>
       
    
       

      
        </form>
        
        </section>
      );
      case '/nueva-categoria':
      return (
        <section className="formulario">
           <form onSubmit={manejarNuevoCategoria}>
            <h2>Nueva categoría</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Nombre" 
                required 
                valor = {titulo} 
                actualizarValor = {actualizarTitulo}
            />
            {/*<Campo 
                titulo="#" 
                placeholder="Vacio" 
                required 
                
            />*/}
           <Campo 
                titulo="Color" 
                placeholder="Color" 
                required 
                valor = {color} 
                actualizarValor = {actualizarColor}
                type="color"
            /> 
            
           {/* <Campo 
                titulo="CodigoSeguridad" 
                placeholder="Código de seguridad" 
                required 
                /> */}

        <StyledBox1>
            <StyledBox2>
          <Boton className="boton1" >Guardar</Boton>
          <Boton className="boton2">Limpiar</Boton>
          </StyledBox2>
        </StyledBox1>
        <Tabla/> 
          
           
        </form>
         
        </section>
      );
  }
}



export default Formulario
          
          
          
          
