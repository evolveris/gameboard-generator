import React, { useState, useEffect } from 'react';
import StyledBoard from './Board.styles';
import StyledSquare from './Square.styles';
import '../App.css';

function Board() {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [isValidCoord, setIsValidCoord] = useState(true);
    const coordSum = Object.values(position)[0] + Object.values(position)[1];

    // define desired board size
    const boardSize = 100;
    const squareRootOfBoard = Math.sqrt(boardSize); 
    const endRowSquareIndex =squareRootOfBoard - 1;

    // generate board
    const coordList = [];

    for (let i = 0; i < squareRootOfBoard; i++) {
      for (let j = 0; j < squareRootOfBoard; j++) {
        coordList.push(`${i}${j}`);
      }
    }
    
    function handleKeyDown(event) {
        if (event.key === 'ArrowUp'
          && position["x"] - 1 >= 0 
          && position["x"] - 1 <= endRowSquareIndex) {
            setPosition({
              ...position,
              x: Number(Number(position["x"]) - 1)
            })
        } else if (event.key === 'ArrowDown'
          && position["x"] + 1 >= 0 
          && position["x"] + 1 <= endRowSquareIndex) {
            setPosition({
                ...position,
                x: Number(Number(position["x"]) + 1)
              })
        } else if (event.key === 'ArrowRight'
          && position["y"] + 1 >= 0 
          && position["y"] + 1 <= endRowSquareIndex) {
            setPosition({
                ...position,
                y: Number(Number(position["y"]) + 1)
              })
        } else if (event.key === 'ArrowLeft'
          && position["y"] - 1 >= 0 
          && position["y"] - 1 <= endRowSquareIndex) {
            setPosition({
                ...position,
                y: Number(Number(position["y"]) - 1)
              })
        }
    }

    useEffect(() => {   
        window.addEventListener('keydown', handleKeyDown);
        // cleanup component
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
    },);

    useEffect(() => {
        setIsValidCoord(coordSum >= 0 && coordSum <= (Math.sqrt(boardSize) * 2))
        console.log(isValidCoord);
        if (isValidCoord) {
            if (document.querySelector(".fox")) {
                document.querySelector(".fox").classList.remove("fox");
            }
            const value = Object.values(position).join("");
            if (document.querySelector(`[data-square-coord="${value}"]`) !== null) {
              document.querySelector(`[data-square-coord="${value}"]`).classList.add("fox");
            }
        }
    }, [position]);

    return (
      <StyledBoard boardSize={squareRootOfBoard}>
        {coordList.map(
          coord => <StyledSquare className="square" key={coord} data-square-coord={coord}></StyledSquare>
        )}
      </StyledBoard>
    );
  }
  
export default Board;
  