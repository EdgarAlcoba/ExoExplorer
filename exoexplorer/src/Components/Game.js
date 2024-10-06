import React, { useEffect, useState } from 'react';
import EventScene from './EventScene';
import ResultScene from './ResultScene';
import PlanetScene from './PlanetScene';

import events from "../Assets/Events.json"
import InitialScene from "./InitialScene";

import "./Game.css"
import Stats from "./Stats";
import planetJson from "../Assets/Planets.json"
import text from "../Assets/Texts.json"
import TypingText from './TypingText';
import PlanetEventScene from './PlanetEventScene';


function Game() {
    const [scene, setScene] = useState(0);
    const [choice, setChoice] = useState(null);
    const [consecuence, setConsecuence] = useState(null);
    const [planets, setPlanets] = useState([]);
    const [selectionCount, setSelectionCount] = useState(0);
    const [showStats, setShowStats] = useState(false);
    const [hp, setHp] = useState(100);
    const [energy, setEnergy] = useState(100);
    const [points, setPoints] = useState(0);
    const [planetCount, setPlanetCount] = useState(4);
    const [isGameOver, setIsGameOver] = useState(false);
    const [allPlanets, setAllPlanets] = useState([]);
    const [actualPlanet, setActualPlanet] = useState(null);

    useEffect(() => {
        setAllPlanets(planetJson.Planets);
    }, []);

    const goToResultScene = (choice, effect) => {
        if (!isGameOver) {
            setChoice(choice);
            setConsecuence(effect);
            setScene(2);
        } else {
            setScene(6)
        }
    };

    const goToPlanetScene = () => {
        if (!isGameOver) {
            const shuffledPlanets = allPlanets.sort(() => Math.random() - 0.5).slice(0, planetCount);
            setPlanetCount(4);
            setPlanets(shuffledPlanets);
            setScene(3);
        } else {
            setScene(6)
        }
    };

    const handlePlanetChoice = (planet) => {
        setActualPlanet(planet);
        if (!isGameOver) {
            if (selectionCount < 9) {
                setSelectionCount((prevCount) => prevCount + 1);
                setScene(4);
            } else {
                setScene(5);
            }
        } else {
            setScene(6)
        }
    };

    const goToEventScene = () => {
        if (!isGameOver) {
            setScene(1);
            setChoice(null);
        } else {
            setScene(6)
        }
    };

    const toggleStats = () => {
        setShowStats(!showStats);
    }

    const applyEffects = (effects) => {
        const newHP = hp + effects.life;
        const newEnergy = energy + effects.energy;
        const newPoints = points + effects.points;
        let newPlanetCount = 4 ;
        if(effects.exoplanets){
            newPlanetCount = planetCount + effects.exoplanets;
        }
        console.log('newPlanetCount', newPlanetCount, planetCount, effects.exoplanets)
        if (newHP > 100) {
            newHP = 100;
        }
        setHp(newHP);
        setEnergy(newEnergy);
        setPoints(newPoints);
        setPlanetCount(newPlanetCount);
        if (newHP <= 0 || newEnergy <= 0 || newEnergy >= 200) {
            setIsGameOver(true);
            setScene(6);
        }
    }

    const getEvent = () => {
            const shuffledEvents = events.Events.sort(() => Math.random() - 0.5);
            return shuffledEvents[0];
    }


    return (
        <div className="game-container">
            {scene === 0 || scene === 5 || scene === 6 ? <></> :
                showStats ?
                    <>
                        <Stats HP={hp} Energy={energy} Points={points} />
                        <button className="stats-button" onClick={toggleStats}>{showStats ? "Close Ship Status" : "Open Ship Status"}</button>
                    </>
                    :
                    <button className="stats-button" onClick={toggleStats}>{showStats ? "Close Ship Status" : "Open Ship Status"}</button>
            }
            {scene === 0 && <InitialScene planets={planets} goToPlanetScene={goToPlanetScene} />}
            {scene === 1 && <EventScene event={getEvent()} goToResultScene={goToResultScene} applyEffects={applyEffects} />}
            {scene === 2 && <ResultScene choice={choice} effect={consecuence} goToPlanetScene={goToPlanetScene} />}
            {scene === 3 && (
                <PlanetScene
                    planets={planets}
                    handlePlanetChoice={handlePlanetChoice}
                    goToEventScene={goToEventScene}
                />
            )}
            {scene === 4 && (
                <PlanetEventScene planet={actualPlanet} goToEventScene={goToEventScene} applyEffects={applyEffects}/>
            )}
            {scene === 5 && <><TypingText text={text.Win} speed={40}/><h1 style={{padding:"1rem", color:"white"}}>Final Score: {points} SP</h1></>}
            {scene === 6 && <><TypingText text="Game over" speed={40}/><h1 style={{padding:"1rem", color:"white"}}>Final Score: {points} SP</h1></>}
        </div>
    );
}

export default Game;