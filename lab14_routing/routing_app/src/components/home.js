import React from "react";
import homeimage from '../images/home.jpg'

const Home = function(){
    return(
        <>
        <h1 className="TITLE">WELCOME TO REACT ROUTING BY ADELEKE ATUNBI</h1>
        <figure className="imgcontainer">
            <img src={homeimage}/>
        </figure>
        </>
    )
}

export default Home;