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

    const icons = bugNameArray.map((critter, index) => {

        const handleClick = (event) => {
            event.preventDefault();
            setSingleBug(bugData[bugNameArray[index]])
        };

        let singleData = bugData[bugNameArray[index]]
        let icon = singleData['icon_uri']
        
        return (
            <img key={index} className='critter-icon library' src={icon} alt='icon' onClick={handleClick}/>
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
                    <div>
                        <div className='critter-details'>
                            <img className='critter-icon details' src={singleBug.icon_uri} alt='icon'/> 
                            <div className='library-details'>
                                <h3>Rarity: <span>{singleBug.availability.rarity}</span></h3>
                                <h3>Sells for: <span>{singleBug.price} bells</span></h3>
                                <h3>Where to find: <span>{singleBug.availability.location}</span></h3>
                            </div>
                        </div>
                        <h4 className='details-name'>{singleBug.name['name-USen']}</h4>
                        <div>{caughtAlert == true ? (
                                <div>
                                    <h5 className="alert">This critter has been added to your caught library!</h5>
                                </div>
                            ) : (
                                <div>
                                    <h5 onClick={handleClick}>Add this critter to your caught library!</h5>
                                </div>
                         )}</div>
                    </div>
                )}
            </div>
            <div className="icon-list">
                {icons}
            </div>
        </div>
    )
}

export default BugsLibrary