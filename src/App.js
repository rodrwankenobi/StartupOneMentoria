import './App.css';
import React, { Component } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Footer from './components/Footer'


function App() {
  return (
    <div class="container">
        <Header/>
        <Form />
        <Footer />
    </div>
  );
}

export default App;
