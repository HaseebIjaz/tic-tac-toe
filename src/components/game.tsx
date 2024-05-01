"use client";
import React, { useState } from 'react'
import Board from './board'

export type SquareValueType = null | "X" | "O";

type Props = {}

const Game = (props: Props) => {
    const [history, setHistory] = useState<SquareValueType[][]>([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];
    debugger;
    console.log({currentSquares});
    const handlePlay = (nextSquares: SquareValueType[]) => {
        const nextHistory = [...history.slice(0,currentMove+1),nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length-1);
    }
    const jumpTo = (nextMove:number) => {
        setCurrentMove(nextMove);
    }

    const moves = history.map((_: SquareValueType[],_idx:number) => {
        let description;
        if(_idx > 0 ){
            description = 'Go to move #' + _idx;
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