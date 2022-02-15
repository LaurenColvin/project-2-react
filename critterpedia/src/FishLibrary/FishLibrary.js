import React from 'react';
import { useState, useEffect } from "react";
let urlBase='https://acnhapi.com/v1/fish';

const FishLibrary = (props) => {

    const [fishData, setFishData] = useState({})
    const [singleFish, setSingleFish] = useState({})
    const [caughtAlert, setCaughtAlert] = useState(false)


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

    const handleClick = (event) => {
        event.preventDefault();
        setCaughtAlert(true)
        const caughtCopy = [...props.caught];
        caughtCopy.push(singleFish);
        props.setCaught(caughtCopy);
    };

    useEffect (() => {
        setCaughtAlert(false)
    }, [singleFish])

    return (
        <div>
            <div className='icon-container'>
                {singleFish.id === undefined ? (
                        <div>
                            <h4>Choose your fish!</h4>
                        </div>
                    ) : (
                        <div className='critter-details'>
                        <img className='critter-icon details' src={singleFish.icon_uri} alt='icon' onClick={handleClick}/> 
                        <div className='details-container'>
                            <h3>Rarity: <span>{singleFish.availability.rarity}</span></h3>
                            <h3>Sells for: <span>{singleFish.price} bells</span></h3>
                            <h3>Shadow Size: <span>{singleFish.shadow}</span></h3>
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

export default FishLibrary