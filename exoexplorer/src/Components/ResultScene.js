import React from 'react';

function ResultScene({ choice, effect, goToPlanetScene }) {
  return (
    <div>
      <h2 style={{color: "white"}}>Resultado</h2>
      <p style={{color: "white"}}>{effect}</p>
      <p style={{color: "white"}}>Ahora, prepárate para explorar nuevos planetas.</p>
      <button onClick={goToPlanetScene}>Continuar</button>
    </div>
  );
}

export default ResultScene;