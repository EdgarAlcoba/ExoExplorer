import React from 'react';

function PlanetEventScene({ planet, goToEventScene, applyEffects }) {
    const handleClick = () => {
        applyEffects(planet.effects);
        goToEventScene();
    }
    return (
        <div>
            <h2 style={{ color: "white" }}>{planet.name}</h2>
            <p style={{ color: "white" }}>{planet.description}</p>
            <p style={{ color: "white" }}>{planet.effectsDescription}</p>
            <button onClick={handleClick}>Continuar</button>
        </div>
    );
}

export default PlanetEventScene;
