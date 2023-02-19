import React, {ReactElement, useContext, useEffect, useState} from 'react';
import './Cell.css';
import {GameContext, GameInterface, Token} from "../../context/Game/Game";

interface CellProps {
    cellId: number
}

const Cell: React.FC<CellProps> = ({cellId}: CellProps): ReactElement => {
    const [cellState, setCellState] = useState<string>(Token.Blank);
    const {getCurrentRound, playRound, currentPlayer} = useContext<GameInterface>(GameContext)

    useEffect(
        () => {
            setCellState(getCurrentRound().at(cellId) || Token.Blank)
        }, [currentPlayer]
    );

    const handleClick = () => {
        if (cellState === ' ') {
            playRound(cellId);
        }
    };

    return (
        <button
            className="Cell"
            type="button"
            onClick={handleClick}
            disabled={cellState !== ' '}
        >
            {cellState}
        </button>
    );
}

export default Cell;
