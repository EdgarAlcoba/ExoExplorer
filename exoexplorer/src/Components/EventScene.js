import React from 'react';
import TypingText from './TypingText';

function EventScene({ event, goToResultScene }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: "column", textAlign: "center" }}>
            <h2 style={{color: "white"}}>{event.name}</h2>
            <TypingText text={event.description} speed={40}></TypingText>
            {event.option1.description === "none" ? <></> :
                <button onClick={() => goToResultScene(event.option1.description, event.option1.effects.effects_description)}>{event.option1.description}</button>
            }
            <button onClick={() => goToResultScene(event.option2.description, event.option2.effects.effects_description)}>{event.option2.description}</button>
        </div>
    );
}

export default EventScene;
