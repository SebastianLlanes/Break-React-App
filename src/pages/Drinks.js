import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png'
import '../App.css';


export default function Drinks() {

    const listaDrinks = [
        { drink: 'Fernet Branca más Coca' ,precioChico: '$500', precioCopon: '$900' },
        { drink: 'Fernet Branca Menta',precioChico: '$500', precioCopon: '$900' },
        { drink: 'Mint Tonic Branca Menta',precioChico: '$500', precioCopon: '$900' },
        { drink: 'Carpano Rosso más Pomelo',precioChico: '$500', precioCopon: '$900' },
        { drink: 'Punt e Mes Tonic',precioChico: '$500', precioCopon: '$900' },
        { drink: 'Vodka Sernova regular',precioChico: '$500', precioCopon: '$900' },
        { drink: 'Vodka Sernova Wilde Berris',precioChico: '$500', precioCopon: '$900' },
        { drink: 'Vodka Sernova Fresh Citrus',precioChico: '$500', precioCopon: '$900' },
        { drink: 'Campari más Naranja',precioChico: '$500', precioCopon: '$900' },
        { drink: 'Gin Tonic',precioChico: '$500', precioCopon: '$900' },
        { drink: 'Carpano con Soda',precioChico: '$500', precioCopon: '$900' },
        { drink: 'Sernova tropical pasión',precioChico: '$500', precioCopon: '$900' },
        { drink: 'Sernova appler pear',precioChico: '$500', precioCopon: '$900' },
        
    ]
    return (
      <>
        <header className="drinks-header">
          <img src={Logo} alt="logo" />
        </header>
        <section className="drinks">
          <div className="div-drinks">
            <h1>TRAGOS</h1>
            <p>Vaso chico</p>
            <p>Copón</p>
          </div>
          <ul>
            {/* Mapear el array de opciones y renderizar cada opción como un <li> con su respectivo <span> */}
            {listaDrinks.map((opcion) => (
              <li key={opcion.drink}>
                {opcion.drink}
                <span>{opcion.precioChico}</span>
                <span>{opcion.precioCopon}</span>
              </li>
            ))}
          </ul>
        </section>
          <footer className="drinks-footer">
            <div className="drinks-div-buttons">
            <Link to='/'>
                    <button>Portada</button>
                </Link>
                <Link to='/food'>
                    <button>Comidas</button>
                </Link>
            </div>
          </footer>
        
      </>
    );
}