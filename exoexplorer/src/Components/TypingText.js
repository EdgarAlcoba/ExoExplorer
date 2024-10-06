import React, { useEffect, useState } from 'react';
import './TypingText.css';

function TypingText({ text = '', speed }) {
    const [displayedText, setDisplayedText] = useState('');
    const textParts = text.split('\n'); // Divide el texto en partes usando saltos de línea

    useEffect(() => {
        let index = 0;
        let timeoutId;

        const type = () => {
            if (index < textParts.length) {
                const currentPart = textParts[index];
                let charIndex = 0;

                const typeCurrentPart = () => {
                    if (charIndex < currentPart.length) {
                        setDisplayedText((prev) => prev + currentPart.charAt(charIndex));
                        charIndex++;
                        timeoutId = setTimeout(typeCurrentPart, speed);
                    } else {
                        // Avanza al siguiente fragmento después de un breve retraso
                        index++;
                        setDisplayedText((prev) => prev + '\n'); // Agrega un salto de línea
                        timeoutId = setTimeout(type, speed); // Llame a la función principal nuevamente
                    }
                };

                typeCurrentPart(); // Comienza a escribir la parte actual
            }
        };

        if (text && text.length > 0) {
            type();
        }

        return () => clearTimeout(timeoutId);
    }, [text, speed]);

    return (
        <div className='dialog-box'>
            <div className="typing-text">
                {displayedText.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
        </div>
    );
}

export default TypingText;
