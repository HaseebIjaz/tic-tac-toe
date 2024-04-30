import React from 'react'
import Square from './square';

type Props = {}

const Board = (props: Props) => {

    const numberOfSquares = 9;
    const board = new Array(9).fill("X");
    const numberOfRows = new Array(numberOfSquares / 3).fill(0);
  
  return (
    <>
      {

        numberOfRows.map((_,rowIdx) => {
          return <div className="board-row" key={`${rowIdx}`}>
            {
              numberOfRows.map((_,colIdx) => {
                return (<Square key={`sqr-${rowIdx+colIdx+1}`}/>);
              })
            }
          </div>
        })
      }
      </>
  )
}

export default Board