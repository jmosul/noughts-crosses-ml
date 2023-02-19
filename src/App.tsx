import React from 'react';
import './App.css';
import Board from "./Board/Board";
import GameContextProvider from "./Board/context/Game/Game";
import NewGame from "./components/NewGame/NewGame";

function App() {
    return (
        <div className="App">
            <GameContextProvider>
                <header className="App-header">
                    <Board/>
                    <NewGame />
                </header>
            </GameContextProvider>
        </div>
    );
}

export default App;
