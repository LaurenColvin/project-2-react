import React from 'react';
import { useState, useEffect } from "react";
let urlBase='https://acnhapi.com/v1/bugs';

const BugsLibrary = (props) => {

    const [bugData, setBugData] = useState({})
    const [singleBug, setSingleBug] = useState({})
    const [caughtAlert, setCaughtAlert] = useState(false)


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

    const handleClick = (event) => {
        event.preventDefault();
        setCaughtAlert(true)
        const caughtCopy = [...props.caught];
        caughtCopy.push(singleBug);
        props.setCaught(caughtCopy);
    };

    useEffect (() => {
        setCaughtAlert(false)
    }, [singleBug])

    return (
        <div>
            <div className='icon-container'>
                {singleBug.id === undefined ? (
                    <div>
                        <h4>Choose your bug!</h4>
                    </div>
                ) : (
                    <div className='critter-details'>
                        <img className='critter-icon details' src={singleBug.icon_uri} alt='icon' onClick={handleClick}/> 
                        <div className='details-container'>
                            <h3>Rarity: <span>{singleBug.availability.rarity}</span></h3>
                            <h3>Sells for: <span>{singleBug.price} bells</span></h3>
                            <h3>Where to find: <span>{singleBug.availability.location}</span></h3>
                        </div>
                    </div>
                )}
                <div>{caughtAlert == true ? (
                            <div className="alert">
                                <h5>This critter has been added to your caught library!</h5>
                            </div>
                            ) : (
                            <div className="alert">
                                <h5>Click the icon to add this critter to your caught library!</h5>
                            </div>
                )}</div>
            </div>
            {name}
        </div>
    )
}

export default BugsLibrary