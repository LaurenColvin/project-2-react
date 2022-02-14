import React from 'react';
import { useState, useEffect } from "react";
let urlBase='https://acnhapi.com/v1/fish';

const FishLibrary = () => {

    const [fishData, setFishData] = useState({})
    const [singleFish, setSingleFish] = useState({})


    useEffect (() => {
        fetch(urlBase)
        .then((response) => response.json())
        .then ((data) => setFishData(data))
        .catch(() => console.log("oops, error"));
    }, [])

    let fishNameArray = Object.keys(fishData);

    const name = fishNameArray.map((critter, index) => {
        const handleClick = (event) => {
            event.preventDefault();
            let url = urlBase + "/" + critter
            fetch(url)
            .then((response) => response.json())
            .then ((data) => setSingleFish(data))
            .catch(() => console.log("oops, error"));
        };

        return (
            <h4 key={index} onClick={handleClick}>{critter}</h4>
        )
    })


    return (
        <div>
        {singleFish.id === undefined ? (
                 <div>
                    <h4>Choose your fish!</h4>
                 </div>
            ) : (
                <img className='critter-icon' src={singleFish.icon_uri} alt='icon'/> 
        )}
        {name}
        </div>
    )
}

export default FishLibrary