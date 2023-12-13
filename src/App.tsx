import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navigation";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavouritePage from "./pages/FavouritePage";

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path = '/' element={<HomePage/>}/>
        <Route path = '/favourite' element={<FavouritePage/>}/>
      </Routes>
    </>
  );
}

export default App;
