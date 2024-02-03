import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Components/VIews/Login';
import Nopage from './Components/VIews/Nopage';
import Layout from './Components/Layout';
import Home from './Components/VIews/Home';
import About from './Components/VIews/About';
import Contact from './Components/VIews/Contact';
import Courses from './Components/VIews/Courses';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='courses' element={<Courses />} />
            <Route path='login' element={<Login />} />
          </Route>
          <Route path='*' element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
