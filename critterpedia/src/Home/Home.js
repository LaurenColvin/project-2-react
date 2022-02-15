import React from 'react';
import { useState, useEffect } from "react";
let urlBase='https://acnhapi.com/v1/';

const Home = (props) => {

    const [critterAvailable, setCritterAvailable] = useState(false)
    const [caughtAlert, setCaughtAlert] = useState(false)
    const [critterType, setCritterType] = useState("fish")
    const [currentMonth, setCurrentMonth] = useState("");
    const [currentCritter, setCurrentCritter] = useState("");
    const [critterData, setCritterData] = useState({
             "id": 1,
            "file-name": "seaweed",
            "name": {
            "name-USen": "seaweed",
            "name-EUen": "seaweed",
            "name-EUnl": "zeewier",
            "name-EUde": "Wakame-Alge",
            "name-EUes": "alga wakame",
            "name-USes": "alga wakame",
            "name-EUfr": "wakame",
            "name-USfr": "wakamé",
            "name-EUit": "alga wakame",
            "name-CNzh": "裙带菜",
            "name-TWzh": "裙帶菜",
            "name-JPja": "ワカメ",
            "name-KRko": "미역",
            "name-EUru": "морские водоросли"
            },
            "availability": {
            "month-northern": "10-7",
            "month-southern": "4-1",
            "time": "",
            "isAllDay": true,
            "isAllYear": false,
            "month-array-northern": [
            10,
            11,
            12,
            1,
            2,
            3,
            4,
            5,
            6,
            7
            ],
            "month-array-southern": [
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            1
            ],
            "time-array": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23
            ]
            },
            "speed": "Stationary",
            "shadow": "Large",
            "price": 600,
            "catch-phrase": "I got some seaweed! I couldn't kelp myself.",
            "image_uri": "https://acnhapi.com/v1/images/sea/1",
            "icon_uri": "https://acnhapi.com/v1/icons/sea/1",
            "museum-phrase": "Let it be known that seaweed is a misnomer of the highest order! That is, it is not a noxious weed so much as it is a marine algae most beneficial to life on land and sea. Seaweed, you see, provides essential habitat and food for all manner of marine creatures. And it creates a great deal of the oxygen we land lovers love to breath too, hoo! And yet, I can't help but shudder when the slimy stuff touches my toes during a swim. Hoot! The horror!"
    });

    const typeHandleChange = (event) => {
        event.preventDefault();
        setCritterType(event.target.value);
    };

    const listHandleChange = (event) => {
        event.preventDefault();
        setCurrentMonth(event.target.value);
    };

     const textHandleChange = (event) => {
        event.preventDefault();
        setCurrentCritter(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        let url = urlBase + critterType + "/" + currentCritter.toLowerCase()
        console.log(url);
        fetch(url)
        .then((response) => response.json())
        .then ((data) => setCritterData(data))
        .then ((data) => console.log({data}))
        .catch(() => console.log("oops, error"));
    };

    const handleClick = (event) => {
        event.preventDefault();
        console.log('added to your caught library!')
        setCaughtAlert(true)
        const caughtCopy = [...props.caught];
        caughtCopy.push(critterData);
        props.setCaught(caughtCopy);
    };

    const available = critterData.availability;
    let months = available["month-array-northern"]

    useEffect (() => {
        setCritterAvailable(false)
        setCaughtAlert(false)
        for (let i=0; i < months.length; i++) {
            if ( months[i] == currentMonth) {
                setCritterAvailable(true)
            }
        }
    }, [critterData])


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> Type: </label>
                <select className="search" id="type" onChange={typeHandleChange}>
                        <option  value="fish">Fish</option>
                        <option  value="bugs">Bug</option>
                        <option  value="sea">Sea Creature</option>
                    </select>
                <br/>
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
                <label> Critter: </label>
                <input className="search" type='text' id='critter' onChange={textHandleChange}></input>
                <br/>
                <input className="submit-button" type="submit"></input>
            </form>
            <div className='search-result-container'>
                <div>{critterAvailable == true ? (
                    <div className="search-result">
                        <h4>Yes it is available!</h4>
                        <img className='critter-icon' src={critterData.icon_uri} alt='icon' onClick={handleClick}/>
                        {critterType !== "sea" ? ( <h4>Where to find it:<br/> {available.location}</h4> ):( <h4>Find it in the ocean</h4> )}
                    </div>
                    ) : (
                        <h4>It is not available!</h4>
                )}</div>
                <div>{caughtAlert == true ? (
                    <div className="alert">
                        <h5>This critter has been added to your caught library!</h5>
                    </div>
                    ) : (
                    <div className="alert">
                        <h5>Click to add this critter to your caught library!</h5>
                    </div>
                )}</div>
            </div>
        </div>
    )
}

export default Home