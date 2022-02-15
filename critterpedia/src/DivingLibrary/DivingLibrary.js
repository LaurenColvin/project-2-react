import React from 'react';
import { useState, useEffect } from "react";
let urlBase='https://acnhapi.com/v1/sea';

const DivingLibrary = (props) => {

    const [seaData, setSeaData] = useState({})
    const [singleSea, setSingleSea] = useState({})
    const [caughtAlert, setCaughtAlert] = useState(false)


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

    const handleClick = (event) => {
        event.preventDefault();
        setCaughtAlert(true)
        const caughtCopy = [...props.caught];
        caughtCopy.push(singleSea);
        props.setCaught(caughtCopy);
    };

    useEffect (() => {
        setCaughtAlert(false)
    }, [singleSea])


    return (
        <div>
            <div className='icon-container'>
                {singleSea.id === undefined ? (
                    <div>
                        <h4>Choose your sea creature!</h4>
                    </div>
                ) : (
                    <div className='critter-details'>
                        <img className='critter-icon details' src={singleSea.icon_uri} alt='icon' onClick={handleClick}/> 
                        <div className='details-container'>
                            <h3>Speed: <span>{singleSea.speed}</span></h3>
                            <h3>Sells for: <span>{singleSea.price} bells</span></h3>
                            <h3>Shadow Size: <span>{singleSea.shadow}</span></h3>
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


export default DivingLibrary