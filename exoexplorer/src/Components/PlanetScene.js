import React from 'react';

function PlanetScene({ planets, handlePlanetChoice }) {
  return (
    <div style={{ padding: "1rem" }}>
      <h2 style={{ color: "white" }}>Select the planet that you want to visit</h2>
      <p style={{ color: "white" }}>Your choice will matter</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {planets.map((planet) => (
          <button style={{
            margin: "5px",
            flex: '1 1 calc(40% - 10px)', // Permite más compresión
            minWidth: '150px' // Ancho mínimo para que no se comprima demasiado
          }} className='continue-button' key={planet.name} onClick={() => handlePlanetChoice(planet)}>
            <div>
              <h4>
                {planet.name}
              </h4>
              <p>
                {planet.summary}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default PlanetScene;
