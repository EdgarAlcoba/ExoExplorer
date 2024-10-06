import React from "react";

const ProgressBar = ({ value, max, getColor }) => {
  const percentage = (value / max) * 100;
  const color = getColor(value);

  return (
    <div style={{ position: 'relative' }}>
      {/* Progress bar*/}
      <div style={{
        width: '100%',
        backgroundColor: '#e0e0de',
        borderRadius: '5px',
        height: '20px',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <div style={{
          width: `${percentage}%`,
          backgroundColor: color,
          height: '100%',
        }}>
        </div>
        {/* Text inside */}
        <span style={{
          position: 'absolute',
          width: '100%',
          textAlign: 'center',
          top: '0',
          left: '0',
          color: 'black',
          fontWeight: 'bold',
        }}>
          {value} / {max}
        </span>
      </div>
    </div>
  );
};

// Stat Components
const Stats = ({ HP, Energy, Points, increaseHP, decreaseHP, increaseEnergy, decreaseEnergy, increasePoints }) => {

  const getColorHP = (value) => {
    if (value >= 50) return `rgb(${255 - (value - 50) * 5.1}, 255, 0)`;
    return `rgb(255, ${(value / 50) * 255}, 0)`;
  };

  const getColorEnergy = (value) => {
    if (value <= 50 || value >= 150) return 'red';
    return 'yellow';
  };
  const isPortrait = window.innerHeight > window.innerWidth;

  return (
    <div style={{ border: '2px solid #ccc', padding: '20px', borderRadius: '0 0 10px 0', width: isPortrait ? 'calc(50vw)' : 'calc(25vw)', backgroundColor:"white", display:"flex", flexDirection:"column", textAlign:"center" }}>
      <h3>Ship Status Panel</h3>

      <h4>Ship's Health</h4>
      <ProgressBar value={HP} max={100} getColor={getColorHP} />

      <h4>Energy Levels </h4>
      <ProgressBar value={Energy} max={200} getColor={getColorEnergy} />

      <h4>Scientific Points</h4>
      <div style={{ fontSize: '24px', color: 'blue' }}>
        {Points} SP
      </div>
    </div>
  );
};

export default Stats;
