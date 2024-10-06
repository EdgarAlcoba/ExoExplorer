import React from 'react';

function PlanetEventScene({ planet, goToEventScene, applyEffects }) {
    const handleClick = () => {
        applyEffects(planet.effects);
        goToEventScene();
    }

    const buttonStyle = {
        backgroundColor: 'white',
        color: 'black',
        border: 'none',
        borderRadius: '8px',
        padding: '15px 30px',
        fontSize: '1.2em',
        cursor: 'pointer',
        transition: 'background-color 0.3s, transform 0.3s',
        marginTop: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    };

    const handleMouseEnter = (e) => {
        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        e.target.style.transform = 'scale(1.05)';
    };

    const handleMouseLeave = (e) => {
        e.target.style.backgroundColor = 'white';
        e.target.style.transform = 'scale(1)';
    };
    return (
        <div style={{padding:"1rem"}}>
            <h2 style={{ color: "white" }}>{planet.name}</h2>
            <img src={require(`../Assets/${planet.image}`)} alt={planet.name} style={{ maxHeight: "50vh", maxWidth: "50vw" }} />
            <p style={{ color: "white" }}>{planet.description}</p>
            <p style={{ color: "white" }}>{planet.effectsDescription}</p>
            <button className='continue-button'
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                Continue
            </button>
        </div>
    );
}

export default PlanetEventScene;
