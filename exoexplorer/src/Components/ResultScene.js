import React from 'react';

function ResultScene({ choice, effect, goToPlanetScene }) {
  return (
    <div style={{padding:"1rem"}}>
      <h2 style={{color: "white"}}>{effect}</h2>
      <p style={{color: "white"}}>Now, prepare yourself to visit a new planet.</p>
      <button className='continue-button' onClick={goToPlanetScene}>Continue</button>
    </div>
  );
}

export default ResultScene;