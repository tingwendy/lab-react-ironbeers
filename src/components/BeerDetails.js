import React from "react";
import { Link, useParams } from "react-router-dom";
import headerImage from "../assets/home-page-image.png";
import axios from "axios";
import {useEffect, useState} from "react";


function BeerDetails () {
    const [beer, setBeer] = useState({});
    const {beerId} = useParams();

    useEffect(()=> {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then((response)=> setBeer(response.data))
            .catch((err) => console.log(err));
    });

    return(
        <div>
         <header>
        <Link to ="/">
            <img className="headerImage" src= {headerImage} alt="header" />
        </Link>
        </header>
            Beer Details Page
            <div>
                <img src={beer.image_url} alt={beer.name} />
            <h1>{beer.name}</h1>
            <p>{beer.tagline}</p>
            <p>First Brewed On: {beer.first_brewed}</p>
            <p>Attenuation Level: {beer.attenuation_level}</p>
            <p>Description: {beer.description}</p>
            <p>Contributed By: {beer.contributed_by}</p>
            </div>
        </div>
    )
}

export default BeerDetails;