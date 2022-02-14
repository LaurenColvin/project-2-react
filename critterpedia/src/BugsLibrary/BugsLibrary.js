import React from 'react';
import { useState, useEffect } from "react";
let urlBase='https://acnhapi.com/v1/bugs';

const BugsLibrary = () => {

    const [bugData, setBugData] = useState({})
    const [singleBug, setSingleBug] = useState({})


    useEffect (() => {
        fetch(urlBase)
        .then((response) => response.json())
        .then ((data) => setBugData(data))
        .catch(() => console.log("oops, error"));
    }, [])

    let bugNameArray = Object.keys(bugData);

    const name = bugNameArray.map((critter, index) => {
        const handleClick = (event) => {
            event.preventDefault();
            let url = urlBase + "/" + critter
            fetch(url)
            .then((response) => response.json())
            .then ((data) => setSingleBug(data))
            .catch(() => console.log("oops, error"));
        };

        return (
            <h4 key={index} onClick={handleClick}>{critter}</h4>
        )
    })


    return (
        <div>
        {singleBug.id === undefined ? (
                 <div>
                    <h4>Choose your bug!</h4>
                 </div>
            ) : (
                <img className='critter-icon' src={singleBug.icon_uri} alt='icon'/> 
        )}
        {name}
        </div>
    )
}

export default BugsLibrary