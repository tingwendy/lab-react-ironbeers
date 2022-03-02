import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import headerImage from "../assets/home-page-image.png"
import axios from "axios";


function AllBeers () {
    const [beers, setAllBeers] = useState([]);
    const [searchBeers, setSearchBeers] = useState([...beers]);

    useEffect(()=> {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response)=> {
                setSearchBeers(response.data);
                setAllBeers(response.data);
            })
            .catch((err) => console.log(err));
    }, []);

    function searchBeer (e) {
        let search = e.target.value;

        let beerResult = beers.filter((beer) => {
            return beer.name.toLowerCase().includes(search.toLowerCase());
        })
        setSearchBeers(beerResult);
    }

    

    return(
        <div>
        <header>
        <Link to ="/">
            <img className="headerImage" src= {headerImage} alt="header" />
        </Link>
        </header>
        <div>
         <h1>All Beers</h1> 
         <h3>Search for a beer: </h3>  
         <input type="text" onChange={(e)=> searchBeer(e)}/>
        {searchBeers.map((beer, i)=> {
            return(
            <div key={i}>
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