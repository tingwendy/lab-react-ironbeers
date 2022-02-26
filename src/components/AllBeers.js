import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import headerImage from "../assets/home-page-image.png"
import axios from "axios";


function AllBeers () {
    const [beers, setAllBeers] = useState([]);

    useEffect(()=> {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response)=> setAllBeers(response.data))
            .catch((err) => console.log(err));
    }, []);

    

    return(
        <div>
        <header>
        <Link to ="/">
            <img className="headerImage" src= {headerImage} alt="header" />
        </Link>
        </header>
        <div>
            All Beers Page
        {beers.map((beer)=> {
            return(
            <div key={beer._id}>
                <Link to={`/beer/${beer._id}`} >
                <img src = {beer.image_url} alt="beer" />
                </Link>
                <h2> {beer.name} </h2>
                <h4> {beer.tagline} </h4>
                <h6> {beer.contributed_by} </h6>
            </div>
        )
    })}
        </div>
        </div>
    )
}

export default AllBeers;