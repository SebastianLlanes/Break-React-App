import React from 'react'
import '../App.css';
import Logo from '../assets/img/logo.png';
// import ButtonHome from '../components/ButtonHome';
// import Footer from '../components/Footer';
// import Header from '../components/Header';
export default function Home() {
    return (
        <div className='home'>
            <div>
                <img src={Logo} alt='logo'/>
            </div>
           <div className='div-botones-portada'> 
                <button>Comidas</button>
                <button>Bebidas</button>
           </div>
        </div>
    )
}

