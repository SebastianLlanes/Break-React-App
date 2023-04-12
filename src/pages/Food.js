import React from 'react';
// import { useState, useEffect } from 'react';
import Logo from '../assets/img/logo.png'
import '../App.css';

export default function Food() {
    // Almacena la categoría actual
var categoriaActual = '';

// Agrega un evento de desplazamiento (scroll)
window.addEventListener('scroll', function() {
  // Obtén la altura de la ventana
  var windowHeight = window.innerHeight;

  // Obtén la posición de los elementos de categoría
  var categoriaPapasFritas = document.getElementById("papasFritas").getBoundingClientRect();
  var categoriaHamburguesas = document.getElementById("hamburguesas").getBoundingClientRect();
  var categoriaSandwiches = document.getElementById("sandwiches").getBoundingClientRect();
  var categoriaMinutas = document.getElementById("minutas").getBoundingClientRect();
  var categoriaPicadas = document.getElementById("picadas").getBoundingClientRect();
  var categoriaPizzas = document.getElementById("pizzas").getBoundingClientRect();

  // Determina la nueva categoría en función de la posición del elemento visible en la ventana
  var nuevaCategoria = '';
  if (categoriaPapasFritas.top >= 0 && categoriaPapasFritas.top <= windowHeight) {
    nuevaCategoria = 'Papas Fritas';
  } else if (categoriaHamburguesas.top >= 0 && categoriaHamburguesas.top <= windowHeight) {
    nuevaCategoria = 'Hamburguesas';
  } else if (categoriaSandwiches.top >= 0 && categoriaSandwiches.top <= windowHeight) {
    nuevaCategoria = 'Sandwiches';
  } else if (categoriaMinutas.top >= 0 && categoriaMinutas.top <= windowHeight) {
    nuevaCategoria = 'Minutas';
  } else if (categoriaPicadas.top >= 0 && categoriaPicadas.top <= windowHeight) {
    nuevaCategoria = 'Picadas';
  } else if (categoriaPizzas.bottom >= 0 && categoriaPizzas.top <= windowHeight) {
    nuevaCategoria = 'Pizzas';
  }

  // Verifica si la nueva categoría es diferente a la categoría actual
  if (nuevaCategoria !== categoriaActual) {
    // Actualiza el contenido del div de la etiqueta flotante con la nueva categoría
    var categoriaUsuarioElemento = document.getElementById("categoriaUsuario");
    categoriaUsuarioElemento.innerHTML = nuevaCategoria;

    // Actualiza la categoría actual con la nueva categoría
    categoriaActual = nuevaCategoria;
  }
});

 const listaPapasFritas = [
        { sabor: 'Clásicas', precio: '$500' },
        { sabor: 'Cheddar y Bacon', precio: '$550' },
        { sabor: 'Provenzal', precio: '$570' },
        { sabor: 'Puerro y Bacon', precio: '$590' },
        { sabor: 'Roquefort', precio: '$520' }
    ];
     // Crear un array de objetos con las opciones de hamburguers y sus precios
    const listaHamburguers = [
        { tipo: 'Gratinada', description: '(Carne, queso mozzarella)', precio: '$1000'},
        { tipo: 'Completa', description: '(Carne, lechuga, tomate, jamon, queso y huevo)', precio: '$1800'},
        { tipo: 'Break', description: '(Carne, bacon, roquefort ó cheddar)', precio: '$2000'},
        { tipo: 'Doble Break', description: '(Doble carne, bacon, roquefort ó cheddar)', precio: '$2200'},
    ]
    // Crear un array de objetos con las opciones de sandwiches y sus precios
    const listaSandwiches = [
        { tipo: 'Milanesa de pollo', preciogratinado: '$1000', preciocompleto: '$1200'},
        { tipo: 'Milanesa de carne', preciogratinado: '$1200', preciocompleto: '$1500'},
        { tipo: 'Súper pancho gratinado', description: '(sale con lluvia de papas)', preciocompleto: '$1200'},
        
    ]
    // Crear un array de objetos con las opciones de minutas y sus precios
    const listaMinutas = [
        { tipo: 'Milanesa', preciocarne: '$1800', preciopollo: '$1200'},
        { tipo: 'Milanesa a caballo', preciocarne: '$2200', preciopollo: '$2000'},
        { tipo: 'Milanesa a la pizza', preciocarne: '$2500', preciopollo: '$2200'},
        { tipo: 'Bastones de mozzarella', description: '(7 unidades)', preciopollo: '$1200'},
        
    ]
    // Crear un array de objetos con las opciones de pizzas y sus precios
    const listaPizzas = [
        { tipo: 'Mozzarella', description: '(salsa tomate, aceitunas y queso mozzarella)', precioocho: '$1800', preciocuatro: '$1000'},
        { tipo: 'Provenzal', description: '(salsa tomate, queso mozzarella, ajo y perejil)', precioocho: '$1800', preciocuatro: '$1000'},
        { tipo: 'Roquefort', description: '(salsa tomate, queso mozzarella y queso roquefort)', precioocho: '$1800', preciocuatro: '$1200'},
        { tipo: 'Rúcula', description: '(salsa tomate, queso mozzarella, hojas de rúcula y hebras de queso fresco)', precioocho: '$1800', preciocuatro: '$1200'},
        { tipo: 'Especial', description: '(salsa tomate, queso mozzarella, huevo y jamón cocido)', precioocho: '$1800', preciocuatro: '$1200'},
        { tipo: 'Nevada', description: '(salsa tomate, queso mozzarella y huevo)', precioocho: '$1800', preciocuatro: '$1200'},
        { tipo: 'Pollo', description: '(salsa tomate, queso mozzarella y trozos de pollo a la crema)', precioocho: '$1800', preciocuatro: '$1200'},
        { tipo: 'Napolitana', description: '(salsa tomate, queso mozzarella y rodajas de tomate)', precioocho: '$1800', preciocuatro: '$1200'},
        { tipo: 'Break', description: '(salsa tomate, queso mozzarella, papas fritas, huevos fritos y kétchup)', precioocho: '$1800', preciocuatro: '$1200'},
        
    ]
    return ( 
        <>
            <header className='food-header'>   
                    <img src={Logo} alt='logo'/>
            </header>
            <div id="categoriaUsuario"></div>

            <section className='food'>
                <div id='papasFritas' className='food-div-papas'>
                    <h2>PAPAS FRITAS</h2>
                    <ul>
                        {/* Mapear el array de opciones y renderizar cada opción como un <li> con su respectivo <span> */}
                        {listaPapasFritas.map(opcion => (
                            <li key={opcion.sabor}>
                                {opcion.sabor}
                                <span>{opcion.precio}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div id='hamburguesas' className='food-div-hamburguer'>
                    <h2>HAMBURGUESAS</h2>
                    <h4>(Sale con papas)</h4>
                    <ul>
                        {/* Mapear el array de opciones y renderizar cada opción como un <li> con su respectivo <span> */}
                        {listaHamburguers.map(opcion => (
                            <li key={opcion.tipo}>
                                {opcion.tipo}
                                <span>{opcion.precio}</span>
                                <p>{opcion.description}</p>                                
                            </li>
                        ))}
                    </ul>
                </div>
                <div id='sandwiches' className='food-div-sandwich'>
                    <h2>SÁNDWICH ESPECIAL</h2>
                    <div>
                        <h4>(Sale con papas)</h4>
                        <p>Gratinado</p>
                        <p>Completo</p>
                    </div>
                    <ul>
                        {/* Mapear el array de opciones y renderizar cada opción como un <li> con su respectivo <span> */}
                        {listaSandwiches.map(opcion => (
                            <li key={opcion.tipo}>
                                {opcion.tipo}                              
                                <span>{opcion.preciogratinado}</span>
                                <span>{opcion.preciocompleto}</span> 
                                <p>{opcion.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div id='minutas' className='food-div-minutas'>
                    <h2>MINUTAS/PLATOS</h2>
                   <div> 
                        <h4>(Sale con papas o ensalada)</h4>
                        <p>Carne</p>
                        <p>Pollo</p>
                    </div>
                    <ul>
                        {/* Mapear el array de opciones y renderizar cada opción como un <li> con su respectivo <span> */}
                        {listaMinutas.map(opcion => (
                            <li key={opcion.tipo}>
                                {opcion.tipo}                                                            
                                <span>{opcion.preciocarne}</span>
                                <span>{opcion.preciopollo}</span>
                                <p>{opcion.description}</p> 
                            </li>
                        ))}
                    </ul>
                    
                </div>
                <div id='picadas' className='food-div-picadas'>
                    <h2>PICADAS</h2>
                    <ul>
                        <li>Milanesa de pollo, papas fritas, salamín, jamón cocido y dados de queso.</li>
                        <li>Para dos</li> <span>$1900</span>
                        <li>Para cuatro</li> <span>$3400</span>
                    </ul>
                    
                </div>
                <div id='pizzas' className='food-div-pizzas'>
                    <h2>PIZZAS</h2>
                   <div> 
                        <p>8 porciones</p>
                        <p>4 porciones</p>
                    </div>
                    <ul>
                        {/* Mapear el array de opciones y renderizar cada opción como un <li> con su respectivo <span> */}
                        {listaPizzas.map(opcion => (
                            <li key={opcion.tipo}>
                                {opcion.tipo}                                
                                <span>{opcion.precioocho}</span>
                                <span>{opcion.preciocuatro}</span>
                                <p>{opcion.description}</p>
                            </li>
                        ))}
                    </ul>
                    
                </div>
                
            </section>
            <footer className='food-footer'>
                <div className='food-div-buttons'>
                    <button>Portada</button>
                    <button>Bebidas</button>
                </div>
            </footer>
        </>
    )
}
