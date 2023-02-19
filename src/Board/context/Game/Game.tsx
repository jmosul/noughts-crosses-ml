import React, {ReactElement, useState} from 'react';

const starting = '         ';

export enum Token {
    X = 'X',
    O = 'O',
    Blank = ' ',
}

export interface GameInterface {
    currentPlayer: Token.O | Token.X;
    rounds: Array<string>;
    playRound: (cellId: number) => void;
    setPlayer: (player: Token.O | Token.X) => void;
    setRounds: (rounds: Array<string>) => void;
    getCurrentRound: () => string;
    newGame: () => void;
}

const defaultContext: GameInterface = {
    currentPlayer: Token.O,
    rounds: [starting],
    playRound: (cellId: number): void => {},
    setPlayer: (player: Token.O | Token.X): void => {},
    setRounds: (rounds: Array<string>): void => {},
    getCurrentRound: (): string => '',
    newGame: (): void => {},
};

export const GameContext = React.createContext(defaultContext);

interface GameContextProviderProps {
    children: React.ReactNode;
}

const GameContextProvider: React.FC<GameContextProviderProps> = ({children}: GameContextProviderProps) => {
    const [currentPlayer, setPlayer] = useState<Token.O | Token.X>(Token.O);
    const [rounds, setRounds] = useState<Array<string>>([starting]);

    const getCurrentRound = (): string => rounds.at(-1) || starting;

    const swapPlayer = () => setPlayer(currentPlayer === Token.X ? Token.O : Token.X);

    const playRound = (cellId: number) => {
        let round = getCurrentRound();

        const newRounds = rounds;

        round = round.substring(0, cellId) + currentPlayer + round.substring(cellId + 1);

        newRounds.push(round);

        swapPlayer();
        setRounds(newRounds);
    }

    const newGame = () => {
        setRounds([starting]);
        swapPlayer();
    }

    return (
        <GameContext.Provider value={{
            currentPlayer,
            rounds,
            setRounds,
            setPlayer,
            playRound,
            getCurrentRound,
            newGame,
        }}>
            {children}
        </GameContext.Provider>
    );
}

export default GameContextProvider;
