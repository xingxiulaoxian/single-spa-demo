import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

export const RouterInstance = () => {
  return (
    <BrowserRouter basename="/settings">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
} 
