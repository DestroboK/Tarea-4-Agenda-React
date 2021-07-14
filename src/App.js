import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Agenda from './ContenedorPadre'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Titulo">Agenda de la sociedad secreta ITLA</p>
        <Agenda/>
        Kelvin Ariel Hernández González, a su orden :)
      </header>
    </div>
  );
}

export default App;
