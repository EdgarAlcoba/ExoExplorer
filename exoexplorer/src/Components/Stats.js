import React from "react";

const ProgressBar = ({ value, max, getColor }) => {
  const percentage = (value / max) * 100;
  const color = getColor(value);

  return (
    <div style={{ margin: '10px 0', position: 'relative', width: '300px' }}>
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

  // HP color
  const getColorHP = (value) => {
    if (value >= 50) return `rgb(${255 - (value - 50) * 5.1}, 255, 0)`;
    return `rgb(255, ${(value / 50) * 255}, 0)`;
  };

  // Energy color
  const getColorEnergy = (value) => {
    if (value <= 50 || value >= 150) return 'red';
    return 'yellow';
  };

  return (
    <div style={{ border: '2px solid #ccc', padding: '20px', borderRadius: '10px', width: '400px' }}>
      <h2>Ship Status Panel</h2>

      <h3>Ship's Health</h3>
      <ProgressBar value={HP} max={100} getColor={getColorHP} />

      <h3>Energy Levels </h3>
      <ProgressBar value={Energy} max={200} getColor={getColorEnergy} />

      <h3>Scientific Points</h3>
      <div style={{ fontSize: '24px', margin: '10px 0', color: 'blue' }}>
        {Points} SP
      </div>
    </div>
  );
};

export default Stats;
