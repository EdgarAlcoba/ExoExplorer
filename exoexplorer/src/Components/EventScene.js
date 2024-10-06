import React from 'react';
import TypingText from './TypingText';

function EventScene({ event, goToResultScene, applyEffects }) {
    const handleOption1Click = () => {
        if (event.option1.description !== "none") {
            applyEffects(event.option1.effects);
            goToResultScene(event.option1.description, event.option1.effects.effects_description);
        }
    };

    const handleOption2Click = () => {
        applyEffects(event.option2.effects);
        goToResultScene(event.option2.description, event.option2.effects.effects_description);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: "column", textAlign: "center" }}>
            <h2 style={{color: "white"}}>{event.name}</h2>
            <TypingText text={event.description} speed={40}></TypingText>
            {event.option1.description === "none" ? <></> :
                <button onClick={handleOption1Click}>{event.option1.description}</button>
            }
            <button onClick={handleOption2Click}>{event.option2.description}</button>
        </div>
    );
}

export default EventScene;
