import React, { Component } from 'react';
import Form from './components/Form'
import About from './components/About'

import {
  Route,
  Routes
} from "react-router-dom";

export default function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Form />} exact />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}
