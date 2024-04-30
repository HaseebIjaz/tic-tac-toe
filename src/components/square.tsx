"use client"
import React, { useState } from 'react'

type Props = {
    value?: string;
}

const Square = (props: Props) => {
    const [value, setValue] = useState<string | null>(null);
    const onSquareClick = () => {
        setValue("X");
    }
  return (
    <button className='square' onClick={onSquareClick}>{value}</button>
  )
}

export default Square