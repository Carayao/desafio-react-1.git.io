import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './componentes/Header.jsx'
import Cards from './componentes/Cards.jsx'
import Footer from './componentes/Footer.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function App() {
    return (

        <div className='App'>
            <center>
                <Header titulo="Galería de Imágenes con React"></Header>
                <hr></hr>
                <div className='tarjetas'>

                    <Cards imagen="https://cdn.pixabay.com/photo/2021/08/29/13/19/kingfisher-6583229_960_720.jpg" titulo="Martín Pescador" descripcion="Pájaro"></Cards>
                    <Cards imagen="https://cdn.pixabay.com/photo/2017/01/11/19/50/tiger-1972731_960_720.jpg" titulo="Tigre" descripcion="Carnívoro"></Cards>
                    <Cards imagen="https://cdn.pixabay.com/photo/2017/06/07/10/47/elephant-2380009_960_720.jpg" titulo="Bebé Elefante" descripcion="Abrevadero"></Cards>

                </div>

                <hr></hr>
                <Footer texto="Todos los derechos reservados ® " />
                
            </center>
        </div>
    );
}
export default App;

