import React, { useEffect, useState } from 'react';
import './TypingText.css';

function TypingText({ text = '', speed }) {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        let timeoutId;

        const type = () => {
            if (index < text.length) {
                setDisplayedText((prev) => prev + text.charAt(index));
                index++;
                timeoutId = setTimeout(type, speed);
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
                {displayedText}
            </div>
        </div>
    );
}

export default TypingText;
