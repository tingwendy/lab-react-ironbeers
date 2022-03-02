import React, {useState} from "react";
import { Link } from "react-router-dom";
import headerImage from "../assets/home-page-image.png"
import axios from "axios";


function NewBeer () {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirstBrewed] = useState("");
    const [brewers_tips, setBrewersTips] = useState("");
    const [attenuation_level, setAttenuationLevel] = useState(0);
    const [contributed_by, setContributedBy] = useState("");

    function addingNewBeer (e) {
        e.preventDefault();
       
        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", {
                name: name, 
                tagline: tagline,
                description: description,
                first_brewed: first_brewed,
                brewers_tips: brewers_tips,
                attenuation_level: attenuation_level,
                contributed_by: contributed_by,
            })
            .then((results)=> {
                console.log("new beer:", results.data)
            })
            .catch((err) => console.log(err));
    }

    return(
        <div>
         <header>
        <Link to ="/">
            <img className="headerImage" src= {headerImage} alt="header" />
        </Link>
        </header>
            <h1>Add A New Beer</h1>
                <form onSubmit={addingNewBeer}>
                    <label>Name:</label>
                    <input 
                        name="name" 
                        type="text"
                        value={name} 
                        onChange={(e)=> setName(e.target.value)}     
                    />
                    <label>Tagline:</label>
                    <input 
                        name="tagline" 
                        value={tagline} 
                        type="text"
                        onChange={(e)=> setTagline(e.target.value)}     
                    />
                    <label>Description:</label>
                    <input 
                        name="description" 
                        value={description} 
                        type="text"
                        onChange={(e)=> setDescription(e.target.value)}     
                    />
                    <label>First Brewed:</label>
                    <input 
                        name="first_brewed" 
                        value={first_brewed} 
                        type="text"
                        onChange={(e)=> setFirstBrewed(e.target.value)}     
                    />
                    <label>Brewer's Tips:</label>
                    <input 
                        name="brewers_tips" 
                        value={brewers_tips} 
                        type="text"
                        onChange={(e)=> setBrewersTips(e.target.value)}     
                    />
                    <label>Attenuation Level:</label>
                    <input 
                        name="attenuation_level" 
                        value={attenuation_level} 
                        type="number"
                        onChange={(e)=> setAttenuationLevel(e.target.value)}     
                    />
                    <label>Contributed By:</label>
                    <input 
                        name="contributed_by" 
                        value={contributed_by} 
                        type="text"
                        onChange={(e)=> setContributedBy(e.target.value)}     
                    />
                    <button type="submit">Submit New Beer</button>
                </form>
        </div>
    )
}

export default NewBeer;