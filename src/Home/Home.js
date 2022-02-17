import React from 'react';
import { useState, useEffect } from "react";
let urlBase='https://acnhapi.com/v1/';

const Home = (props) => {

    const [critterAvailable, setCritterAvailable] = useState(false)
    const [caughtAlert, setCaughtAlert] = useState(false)
    const [header, setHeader] = useState(false)
    const [critterType, setCritterType] = useState("fish")
    const [currentMonth, setCurrentMonth] = useState("1");
    const [currentCritter, setCurrentCritter] = useState({});
    const [critterData, setCritterData] = useState({});

    let availableArray = [];

    const typeHandleChange = (event) => {
        event.preventDefault();
        setCritterAvailable(false);
        setCritterType(event.target.value);
    };

    const listHandleChange = (event) => {
        event.preventDefault();
        setCritterAvailable(false);
        setCurrentMonth(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setCritterAvailable(false);
        setHeader(true);
        availableArray = [];
        let url = urlBase + critterType 
        fetch(url)
        .then((response) => response.json())
        .then ((data) => setCritterData(data))
        .catch(() => console.log("oops, error"));
    };

    let critterNameArray = Object.keys(critterData);

    const icons = critterNameArray.map((critter, index) => {

        let singleData = critterData[critterNameArray[index]]
        let availability = singleData.availability
        let months = availability['month-array-northern']

        for (let i=0; i < months.length; i++) {
            if ( months[i] == currentMonth) {
                const availableCopy = [...availableArray];
                availableCopy.push(singleData);
                availableArray = availableCopy
            }
        }
    })

    const iconsAvailable = availableArray.map((critter, index) => {
        let icon = critter['icon_uri']
        let name = critter.name['name-USen']
        
        const handleClick = (event) => {
            event.preventDefault();
            setCurrentCritter(availableArray[index])
            console.log(availableArray[index])
            setCritterAvailable(true);
            setCaughtAlert(false);
        };

        return (
            <div>
                <img key={index} className='critter-icon library' src={icon} alt='icon' onClick={handleClick}/>
                <p className='search-name'>{name}</p>
            </div>
        )

    })

    const handleClick = (event) => {
        event.preventDefault();
        console.log('added to your caught library!')
        setCaughtAlert(true)
        const caughtCopy = [...props.caught];
        caughtCopy.push(currentCritter);
        props.setCaught(caughtCopy);
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='type'>
                    <label> Type: </label>
                    <select className="search" id="type" onChange={typeHandleChange}>
                            <option  value="fish">Fish</option>
                            <option  value="bugs">Bug</option>
                            <option  value="sea">Sea Creature</option>
                        </select>
                    <br/>
                </div>
                <div className='month'>
                    <label> Month: </label>
                        <select className="search" id="month" onChange={listHandleChange}>
                            <option  value="1">January</option>
                            <option  value="2">Feburary</option>
                            <option  value="3">March</option>
                            <option  value="4">April</option>
                            <option  value="5">May</option>
                            <option  value="6">June</option>
                            <option  value="7">July</option>
                            <option  value="8">August</option>
                            <option  value="9">September</option>
                            <option  value="10">October</option>
                            <option  value="11">November</option>
                            <option  value="12">December</option>
                        </select>
                    <br/>
                </div>
                <input className="submit-button" type="submit"></input>
            </form>
                <div className='search-result-container'>
                    <div>{critterAvailable == true ? (
                        <div className="search-result">
                            <h4 className='details-name'>{currentCritter.name['name-USen']}</h4>
                            <div className='critter-details'>
                                    <img className='critter-icon details' src={currentCritter['icon_uri']} alt='icon'/> 
                                    <div className='details-container'>
                                        {critterType !== "sea" ? ( <h3 className='search-details'>Rarity: <br/><span>{currentCritter.availability.rarity}</span></h3> ):( <h3 className='search-details'>Shadow size: <br/><span>{currentCritter.shadow}</span></h3> )}
                                        {critterType !== "sea" ? ( <h3 className='search-details'>Find it:<br/> <span>{currentCritter.availability.location}</span></h3> ):( <h3 className='search-details'>Speed: <br/><span>{currentCritter.speed}</span></h3> )}
                                    </div>
                                </div>
                            <div>{caughtAlert == true ? (
                                <div>
                                    <h5 className="alert">This critter has been added to your caught library!</h5>
                                </div>
                                ) : (
                                <div>
                                    <h5 onClick={handleClick}>Click to add this critter to your caught library!</h5>
                                </div>
                            )}</div>
                        </div>
                        ) : (
                            <div>
                            {critterAvailable == false ? (<h4 className='search-by-month'>Search for critters by month!</h4>):(<h4>Click on the icon for more info!</h4>)}
                            </div>
                    )}</div>
                </div>
                <div className="icon-list">
                    {iconsAvailable}
                </div>
        </div>
    )
}

export default Home