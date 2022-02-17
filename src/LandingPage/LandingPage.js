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
        getCritter()
    }, [])

    const getCritter = () => {
        let critterArray = Object.keys(critterData);
        let randomCritter = Math.floor(Math.random() * critterArray.length);
        currentCritter = (critterData[critterArray[randomCritter]])
        console.log(currentCritter)
        if (currentCritter !== undefined) {
        return (
            <div>
                <h4 className='details-name'>{currentCritter.name['name-USen']}</h4>
                <div className='critter-details'>
                    <img className='critter-icon details' src={currentCritter['icon_uri']} alt='icon'/> 
                        <div className='details-container'>
                            <h4>Catch Prase:</h4>
                            <p className='catch-phrase'>{currentCritter['catch-phrase']}</p>
                        </div>
                </div>
            </div>
        )
        }
    }


    console.log(currentCritter)

    return (
        <div>
            <h4>Welcome to Critterpedia!</h4>
            <h3 className='critter-of-the-day'>Critter of the day:</h3>
            <div>{critterData !== undefined ? (
                getCritter()
                ):(
                <h4 className="loading">Loading...</h4>
            )}
            </div>
        </div>
    )
}

export default LandingPage