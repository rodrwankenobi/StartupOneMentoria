import './App.css';
import React, { Component } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import About from './components/About'
import Footer from './components/Footer'
import Login from './components/Login'
/*import Routes from './routes'*/

import {
  Routes,Route, Router,BrowserRouter
} from 'react-router-dom'

function App() {
  return (
      <div class="container">
          <Header/>
          <BrowserRouter>
          <Routes>
              <Route path="/" element={<Form />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
          </Routes>
          </BrowserRouter>
          <Footer />
      </div>
  );
}

export default App;
