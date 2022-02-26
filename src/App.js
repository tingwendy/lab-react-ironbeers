import './App.css';
import React from 'react';
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetails from './components/BeerDetails';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all-beers" element={<AllBeers />} />
      <Route path="/random-beer" element={<RandomBeer />} />
      <Route path="/new-beer" element={<NewBeer />} />
      <Route path="/beer/:beerId" element={<BeerDetails />} />
    </Routes>
    </div>
  );
}

export default App;
