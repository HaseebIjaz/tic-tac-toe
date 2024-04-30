"use client"
import React, { useState } from 'react'
import { SquareValueType } from './board';

type Props = {
    value: SquareValueType;
    onSquareClick?: () => void;
}

const Square = (props: Props) => {
    const { value, onSquareClick } = props;

  return (
    <button className='square' onClick={onSquareClick}>{value}</button>
  )
}

export default Square