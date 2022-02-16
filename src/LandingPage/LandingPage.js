import React from 'react';
import { useState, useEffect } from "react";
let urlBase='https://acnhapi.com/v1/';

const LandingPage = () => {

    const [critterData, setCritterData] = useState({});
    const [critterAvailable, setCritterAvailable] = useState(false)

    let currentCritter = {};

    useEffect (() => {
        let critters = ['fish', 'bugs', 'sea']
        let random = Math.floor(Math.random() * critters.length);
        let critter = critters[random]

        let url = urlBase + critter
        console.log(url)
        fetch(url)
        .then((response) => response.json())
        .then ((data) => setCritterData(data))
        .catch(() => console.log("oops, error"));
    }, [])

    useEffect (() => {
        let critterArray = Object.keys(critterData);
        let randomCritter = Math.floor(Math.random() * critterArray.length);
        currentCritter = critterData[critterArray[randomCritter]]
        console.log(critterData[critterArray[randomCritter]])
    }, [critterData])

    console.log(currentCritter['catch-phrase'])

    return (
        <div>
            <h4>Welcome to Critterpedia!</h4>
            <h1>Critter of the day:</h1>
            <div>{currentCritter == undefined ? (
                <div>
                    <div className='critter-details'>
                        <img className='critter-icon details' src={currentCritter['icon_uri']} alt='icon'/> 
                            <div className='details-container'>
                                <h4>{currentCritter['catch-phrase']}</h4>
                            </div>
                    </div>
                    <h4 className='details-name'>{currentCritter.name['name-USen']}</h4>
                </div>
                ):(
                <h4>Loading...</h4>
            )}
            </div>
        </div>
    )
}

export default LandingPage