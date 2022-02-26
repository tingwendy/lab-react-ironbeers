import React from "react";
import beersImage from "../assets/beers.png";
import randomBeerImage from "../assets/random-beer.png";
import newBeerImage from "../assets/new-beer.png";
import { Link } from "react-router-dom";
import AllBeers from "./AllBeers";
import RandomBeer from "./RandomBeer";
import NewBeer from "./NewBeer";


function Home () {
    return (
        <div>
        <h1>Home Page</h1>
            <Link to="/all-beers" element={<AllBeers />}>
            <img className="imagesHome" src={beersImage} alt="beers" />
            <h1>All Beers</h1>
            </Link>
            <Link to="/random-beer" element={<RandomBeer />}>
            <img className="imagesHome" src={randomBeerImage} alt="beers" />
            <h1>Random Beer</h1>
            </Link>
            <Link to="/new-beer" element={<NewBeer />}>
            <img className="imagesHome" src={newBeerImage} alt="beers" />
            <h1>New Beer</h1>
            </Link> 
        </div>
    )
}

export default Home;