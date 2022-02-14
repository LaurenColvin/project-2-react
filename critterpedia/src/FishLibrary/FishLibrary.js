import React from 'react';
import { useState, useEffect } from "react";
let urlBase='https://acnhapi.com/v1/fish';

const FishLibrary = () => {

    const [fishData, setFishData] = useState({})
    // const [singleFish, setSingleFish] = useState({})

    useEffect (() => {
        fetch(urlBase)
        .then((response) => response.json())
        .then ((data) => setFishData(data))
        .catch(() => console.log("oops, error"));
    }, [])

    let fishNameArray = Object.keys(fishData);

    const icon = fishNameArray.map((critter, index) => {
        let url = urlBase + "/" + critter
        let currentFish = {}
        fetch(url)
            .then((response) => response.json())
            .then ((data) => currentFish = data)
            // .then ((data) => setSingleFish(data))
            .catch(() => console.log("oops, error"));

        return (
            <img key={index} className='critter-icon' src={currentFish.icon_uri} alt='icon'/>
        )
    })


    return (
        <div>
        Fish Library
        <br/>
        {icon}
        </div>
    )
}

export default FishLibrary