import React from 'react';

function PlanetScene({ planets, handlePlanetChoice }) {
  return (
    <div>
      <h2 style={{color:"white"}}>Escena 2: Tu viaje continua</h2>
      <p style={{color:"white"}}>Selecciona el próximo planeta al que vas a viajar</p>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {planets.map((planet) => (
          <button key={planet} onClick={() => handlePlanetChoice(planet)}>
            {planet}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PlanetScene;
