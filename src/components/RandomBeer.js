import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import headerImage from "../assets/home-page-image.png"
import axios from "axios";

function RandomBeer () {
    const [beer, setBeer] = useState({});

    useEffect(()=> {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then((response)=> setBeer(response.data))
            .catch((err) => console.log(err));
    }, []);

    return(
        <div>
          <header>
        <Link to ="/">
            <img className="headerImage" src= {headerImage} alt="header" />
        </Link>
        </header>
            Random Beer Page
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

export default RandomBeer;