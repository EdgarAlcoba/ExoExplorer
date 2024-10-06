import React from 'react';
import TypingText from './TypingText';
import text from "../Assets/Texts.json"

function InitialScene({goToPlanetScene}) {
    return (
        <div style={{padding:"1rem"}}>
            <TypingText text={text.Intro+"\n "+text.Rules} speed={40} />
            <button className='continue-button' onClick={goToPlanetScene}>Start the adventure</button>
        </div>
    );
}

export default InitialScene;
