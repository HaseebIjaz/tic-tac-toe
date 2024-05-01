"use client";
import React, { useState } from 'react'
import Square from './square';
import { SquareValueType } from './game';


type Props = {
    squares: SquareValueType[];
    xIsNext: boolean;
    onPlay: (squares: SquareValueType[]) => void
}

const Board = (props: Props) => {
    const { squares,xIsNext,onPlay } = props;

    const numberOfSquares = 9;
    const board = new Array(9).fill("X");
    const numberOfRows = new Array(numberOfSquares / 3).fill(0);

    const calculateWinner = (squares: SquareValueType[]): SquareValueType => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; ++i) {
            const [a, b, c] = lines[i];
            if (squares[a] === squares[b] && squares[b] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const handleClick = (i: number) => {
        if (squares[i] || calculateWinner(squares)) return;

        const nextSquares = squares.slice();

        if (xIsNext === true) {
            nextSquares[i] = "X";
        }
        else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    }
    else {
        status = "Next Player: " + (xIsNext ? "X" : "O");
    }

    return (
        <>
            <div className='status'>{status}</div>
            {

                numberOfRows.map((_, rowIdx) => {
                    return <div className="board-row" key={`${rowIdx}`}>
                        {
                            numberOfRows.map((_, colIdx) => {
                                return (<Square key={`sqr-${rowIdx + colIdx + 1}`} value={squares[(rowIdx * 3) + colIdx]} onSquareClick={() => handleClick((rowIdx * 3) + colIdx)} />);
                            })
                        }
                    </div>
                })
            }
        </>
    )
}

export default Board