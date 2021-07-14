import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Agenda from './ContenedorPadre'

function cargar(){

  return fetch("http://www.raydelto.org/agenda.php")
  .then(function(resultados){
      return resultados.json();
  }).then(function(resultados){
    return resultados;
  });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Titulo">Agenda de la sociedad secreta ITLA</p>
            <Agenda/>
      </header>
    </div>
  );
}

export default App;
