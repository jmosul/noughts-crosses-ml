import React, {ReactElement} from 'react';
import Cell from "./components/Cell/Cell";
import './Board.css';

const Board: React.FC = (): ReactElement => {
    return (
        <div className="Board">
            <div className="Board__Row">
                <Cell cellId={0} />
                <Cell cellId={1} />
                <Cell cellId={2} />
            </div>
            <div className="Board__Row">
                <Cell cellId={3} />
                <Cell cellId={4} />
                <Cell cellId={5} />
            </div>
            <div className="Board__Row">
                <Cell cellId={6} />
                <Cell cellId={7} />
                <Cell cellId={8} />
            </div>
        </div>
    );
}

export default Board;
