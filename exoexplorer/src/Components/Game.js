import TypingText from "./TypingText";
import React, { useState } from 'react';
import EventScene from './EventScene';
import ResultScene from './ResultScene';
import PlanetScene from './PlanetScene';

import events from "../Assets/Events.json"
import InitialScene from "./InitialScene";

import "./Game.css"
import Stats from "./Stats";


function Game() {
    const [scene, setScene] = useState(0);
    const [choice, setChoice] = useState(null);
    const [consecuence, setConsecuence] = useState(null);
    const [planets, setPlanets] = useState([]);
    const [selectionCount, setSelectionCount] = useState(0);
    const [showStats, setShowStats] = useState(false);

    const goToResultScene = (choice, effect) => {
        setChoice(choice);
        setConsecuence(effect);
        setScene(2);
    };

    const goToPlanetScene = () => {
        const allPlanets = ['Mercurio', 'Venus', 'Tierra', 'Marte', 'Júpiter', 'Saturno'];
        const shuffledPlanets = allPlanets.sort(() => Math.random() - 0.5).slice(0, 4);
        setPlanets(shuffledPlanets);
        setScene(3);
    };

    const handlePlanetChoice = (planet) => {
        if (selectionCount < 9) {
            // Si no se han alcanzado 10 selecciones, sigue al siguiente ciclo
            setSelectionCount((prevCount) => prevCount + 1);
            setScene(4); 
        } else {
            // Si se alcanzan 10 selecciones, muestra la escena final
            setScene(5);
        }
    };

    const goToEventScene = () => {
        setScene(1);
        setChoice(null);
    };

    const toggleStats = (planet) => {
        setShowStats(!showStats);
    }

    return (
        <div className="game-container">
            {scene === 0 || scene === 5? <></>: 
            showStats?
            <>
            <Stats/>
            <button className="stats-button" onClick={toggleStats}>{showStats?"Close Ship Status":"Open Ship Status"}</button></>:
            <button className="stats-button" onClick={toggleStats}>{showStats?"Close Ship Status":"Open Ship Status"}</button>}
            {scene === 0 && <InitialScene planets={planets} goToPlanetScene={goToPlanetScene}/>}
            {scene === 1 && <EventScene event={events.Events[/*Math.floor(Math.random() * events.Events.length)*/0]} goToResultScene={goToResultScene} />}
            {scene === 2 && <ResultScene choice={choice} effect={consecuence} goToPlanetScene={goToPlanetScene} />}
            {scene === 3 && (
                <PlanetScene
                    planets={planets}
                    handlePlanetChoice={handlePlanetChoice}
                    goToEventScene={goToEventScene}
                />
            )}
            {scene === 4 && (
                <div>
                    <h2 style={{color:"white"}}>¡Seleccionaste un planeta!</h2>
                    <button onClick={goToEventScene}>Continuar</button>
                </div>
            )}
            {scene === 5 && <h2>¡Has completado el juego! Gracias por jugar.</h2>}
        </div>
    );
}

export default Game;