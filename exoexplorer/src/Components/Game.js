import TypingText from "./TypingText";
import text from "../Assets/Texts.json"

function Game() {

    return (
        <>
            <TypingText text={text.Intro} speed={50} />
        </>
    );
}

export default Game;