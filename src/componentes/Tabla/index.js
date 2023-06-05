import { useState } from "react"
import "./Tabla.css"
import React from 'react';

function Tabla() {
  const list1 = ['Fantasmas', 'Cementerios', 'Brujas', 'Ovnis', 'Zombies', 'Casas Embrujadas'];
  const list2 = ['Espiritus', 'Exploracion', 'Hechiceras', 'Alienigenas entre nosotros', 'Muertos Vivos', 'Lugares Poseidos'];
  const list3 = ['Editar', 'Editar', 'Editar', 'Editar', 'Editar', 'Editar'];
  const list4 = ['Remover', 'Remover', 'Remover', 'Remover', 'Remover', 'Remover'];
  
  return (
    <>
      
      <table className="Tabla1">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Editar</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          {list1.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
              <td>{list2[index]}</td>
              <td>{list3[index]}</td>
              <td>{list4[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}






export default Tabla;

