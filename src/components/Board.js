import React, { useState, useEffect, useContext } from 'react';
import StyledBoard from './Board.styles';
import StyledSquare from './Square.styles';
import '../App.css';
import { ThemeContext } from '../App';

function Board() {
    const [position, setPosition] = useState({x: 0, y: 0});
    const currentPositionCoord = Object.values(position).join("");  
    const context = useContext(ThemeContext);

    // define desired board size
    const boardSize = 36;
    const squareRootOfBoard = Math.sqrt(boardSize); 
    const endRowSquareIndex = squareRootOfBoard - 1;

    // generate board
    const coordList = [];

    for (let i = 0; i < squareRootOfBoard; i++) {
      for (let j = 0; j < squareRootOfBoard; j++) {
        coordList.push(`${i}${j}`);
      }
    }

    function generateStyledSquareFromCoords(coord, currentPositionCoord, context) {
      const foxClass = currentPositionCoord === coord ? "fox" : "";
      return <StyledSquare 
        className={`square ${foxClass}`} 
        key={coord} 
        theme={context.squareBackground} 
        data-square-coord={coord}
      />
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
    }, [position, context]);

    return (
      <StyledBoard boardSize={squareRootOfBoard}>
        {coordList.map(coord => generateStyledSquareFromCoords(coord, currentPositionCoord, context))}
      </StyledBoard>
    );
  }
  
export default Board;
  