import React from 'react';
import { useState, useEffect } from "react";
let urlBase='https://acnhapi.com/v1/sea';

const DivingLibrary = () => {

    const [seaData, setSeaData] = useState({})
    const [singleSea, setSingleSea] = useState({})


    useEffect (() => {
        fetch(urlBase)
        .then((response) => response.json())
        .then ((data) => setSeaData(data))
        .catch(() => console.log("oops, error"));
    }, [])

    let seaNameArray = Object.keys(seaData);

    const name = seaNameArray.map((critter, index) => {
        const handleClick = (event) => {
            event.preventDefault();
            let url = urlBase + "/" + critter
            fetch(url)
            .then((response) => response.json())
            .then ((data) => setSingleSea(data))
            .catch(() => console.log("oops, error"));
        };

        return (
            <h4 key={index} onClick={handleClick}>{critter}</h4>
        )
    })


    return (
        <div>
        {singleSea.id === undefined ? (
                 <div>
                    <h4>Choose your sea creature!</h4>
                 </div>
            ) : (
                <img className='critter-icon' src={singleSea.icon_uri} alt='icon'/> 
        )}
        {name}
        </div>
    )
}


export default DivingLibrary