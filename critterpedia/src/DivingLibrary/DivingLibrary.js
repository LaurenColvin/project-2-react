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

    const icons = seaNameArray.map((critter, index) => {

        const handleClick = (event) => {
            event.preventDefault();
            setSingleSea(seaData[seaNameArray[index]])
        };

        let singleData = seaData[seaNameArray[index]]
        let icon = singleData['icon_uri']
        
        return (
            <img key={index} className='critter-icon library' src={icon} alt='icon' onClick={handleClick}/>
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
                    <div>
                        <div className='critter-details'>
                            <img className='critter-icon details' src={singleSea.icon_uri} alt='icon'/> 
                            <div className='details-container'>
                                <h3>Speed: <span>{singleSea.speed}</span></h3>
                                <h3>Sells for: <span>{singleSea.price} bells</span></h3>
                                <h3>Shadow Size: <span>{singleSea.shadow}</span></h3>
                            </div>
                        </div>
                        <h4>{singleSea['file-name']}</h4>
                        <div>{caughtAlert == true ? (
                                <div className="alert">
                                    <h5>This critter has been added to your caught library!</h5>
                                </div>
                            ) : (
                                <div className="alert">
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


export default DivingLibrary