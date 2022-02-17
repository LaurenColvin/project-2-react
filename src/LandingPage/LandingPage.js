import React from 'react';
import { useState, useEffect } from "react";
import { Route, Link, Routes, Navigate } from "react-router-dom";
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
                <h2 >{currentCritter.name['name-USen']}</h2>
                <div className="random-critter">
                    <img className='icon-random' src={currentCritter['icon_uri']} alt='icon'/> 
                    <h2>Catch Prase:</h2>
                    <p className='catch-phrase'>{currentCritter['catch-phrase']}</p>
                </div>
            </div>
        )
        }
    }


    console.log(currentCritter)

    return (
        <div>
            <h4>Welcome to Critterpedia!</h4>
            <p className='description'> I created this website for all Animal Crossing lovers! Time to catch some bugs, fish and sea creatures with better precision. Explore all the critters of Animal Crossing and search by month to see what is available right now!</p>
            <button><Link to='/home' className='home-button'>Click Here to Search by Month</Link></button>
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