import React from 'react';
import TypingText from './TypingText';
import text from "../Assets/Texts.json"

function InitialScene({ planets , goToPlanetScene}) {
    return (
        <>
            <TypingText text={text.Intro} speed={40} />
            <TypingText text={text.Rules} speed = {40} />
            <button onClick={goToPlanetScene}>Start the adventure</button>
        </>
    );
}

export default InitialScene;
