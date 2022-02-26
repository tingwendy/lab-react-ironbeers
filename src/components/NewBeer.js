import React from "react";
import { Link } from "react-router-dom";
import headerImage from "../assets/home-page-image.png"

function NewBeer () {
    return(
        <div>
         <header>
        <Link to ="/">
            <img className="headerImage" src= {headerImage} alt="header" />
        </Link>
        </header>
            New Beer Page
        </div>
    )
}

export default NewBeer;