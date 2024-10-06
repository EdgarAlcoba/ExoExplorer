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
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: "column", textAlign: "center", padding: "1rem" }}>
            <h1 style={{ color: "white" }}>{event.name}</h1>
            <TypingText text={event.description} speed={40}></TypingText>
            <div >
                {event.option1.description === "none" ? <></> :
                    <button className='continue-button' style={{marginRight: "2rem"}} onClick={handleOption1Click}>{event.option1.description}</button>
                }
                <button className='continue-button' onClick={handleOption2Click}>{event.option2.description}</button>
            </div>
        </div>
    );
}

export default EventScene;
