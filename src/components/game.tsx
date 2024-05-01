import React, { useState } from 'react'
import Board from './board'

export type SquareValueType = null | "X" | "O";

type Props = {}

const Game = (props: Props) => {
    const [history, setHistory] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[history.length - 1];
    
    const handlePlay = (nextSquares: SquareValueType[]) => {
        setHistory([...history,nextSquares]);
        setXIsNext((prev) => !prev);
    }
    const jumpTo = (nextMove:number) => {
        //TODO
        setCurrentMove(nextMove);
        setXIsNext(nextMove % 2 === 0);
    }

    const moves = history.map((squares: SquareValueType,_idx:number) => {
        let description;
        if(_idx > 0 ){
            description = 'Go to move #' + moves;
        }
        else{
            description = 'Go to move Game Start';
        }
        return (
            <li key={`move-${_idx}`}>
                <button onClick={() => jumpTo(_idx)}>{description}</button>
            </li>
        )
    })
    return (
        <div className='game'>
            <div className='game-board'>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
            </div>
            <div className='game-info'>
                <ol>{/*TODO*/}</ol>
            </div>
        </div>
    )
}

export default Game