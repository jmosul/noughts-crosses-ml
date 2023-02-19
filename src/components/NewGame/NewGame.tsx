import React, {ReactElement, useContext} from 'react';
import {GameContext, GameInterface} from "../../Board/context/Game/Game";

const NewGame: React.FC = (): ReactElement => {
    const {newGame} = useContext<GameInterface>(GameContext);

    const handleClick = () => newGame();

    return (
        <div className="NewGame">
            <button
                type="button"
                onClick={handleClick}
            >
                New Game
            </button>
        </div>
    );
}

export default NewGame;
