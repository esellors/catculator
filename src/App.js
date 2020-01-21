import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Calculator from './Components/Calculator';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;
