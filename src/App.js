
import Global from "./Global";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./paginas/Home";
import Error404 from "./paginas/Error404";
import NuevoVideo1 from "./paginas/NuevoVideo1";
import NuevaCategoria1 from "./paginas/NuevaCategoria1";
import { useState,useEffect } from "react";





function App() {

 /* const [arregloVideos, setVideo]=useState([
    {
      video : "https://www.youtube.com/embed/PhlIUq8RSuA",
      nombre : 'Video1',
      imagen : '',
      categoria : 'Nuevo',
      descripcion : '',
      seguridad : ''
    },
    {
      video : "https://www.youtube.com/embed/T6U-MFw2SDA",
      nombre : 'Video2',
      imagen : '',
      categoria : 'Nuevo',
      descripcion : '',
      seguridad : ''
    },
    {
      video : "https://www.youtube.com/embed/uGBFS9HzVwc",
      nombre : 'Video3',
      imagen : '',
      categoria : 'Nuevo',
      descripcion : '',
      seguridad : ''
    },
    {
      video : "https://www.youtube.com/embed/q-rdZqtS75M",
      nombre : 'Video4',
      imagen : '',
      categoria : 'Nuevo',
      descripcion : '',
      seguridad : ''
    },
    {
      video : "https://www.youtube.com/embed/iHCHDyFVURQ",
      nombre : 'Video5',
      imagen : '',
      categoria : 'Nuevo',
      descripcion : '',
      seguridad : ''
    },
    {
      video : "https://www.youtube.com/embed/JtYuQgvChyQ",
      nombre : 'Video6',
      imagen : '',
      categoria : 'Nuevo',
      descripcion : '',
      seguridad : ''
    },
    {
      video : "https://www.youtube.com/embed/5D62qG1GbJA",
      nombre : 'Video7',
      imagen : '',
      categoria : 'Nuevo',
      descripcion : '',
      seguridad : ''
    },
    {
      video : "https://www.youtube.com/embed/9f7ZUIovff8",
      nombre : 'Video8',
      imagen : '',
      categoria : 'Nuevo',
      descripcion : '',
      seguridad : ''
    },
    {
      video : "https://www.youtube.com/embed/T6U-MFw2SDA",
      nombre : 'Video9',
      imagen : '',
      categoria : 'Nuevo',
      descripcion : '',
      seguridad : ''
    }
  ])*/
  
  return (
    <Router>
     <Global />
     <Header />
     <Routes>
     <Route path='/' element={<Home/>} />
     {/*<Route path='/' element={<Home arregloVideos={arregloVideos}/>} />*/}
       <Route path='/nuevo-video' element={<NuevoVideo1/>}/>
       <Route path='/nueva-categoria' element={<NuevaCategoria1/>} />
       <Route path='*' element={<Error404/>} />
      
     </Routes>
     <Footer/>
 
    </Router>
    
   );
 }
 
  
  export default App;
  //<Route path='/' element={<Home/>} />
  //{/**/}
  //<Route path='/' element={<Home arregloVideos={arregloVideos}/>} />