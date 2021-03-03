import React, { useState, useEffect } from 'react';
import '../App.css'

function Board() {
    const [position, setPosition] = useState({x: 0, y: 0});
    const coordSum = Object.values(position)[0] + Object.values(position)[1];
    const isValidCoord = coordSum >= 0 && coordSum <= 4;

    function handleKeyDown(event) {
        if (event.key === 'ArrowUp'
          && position["x"] - 1 >= 0 
          && position["x"] - 1 <= 2) {
            setPosition({
              ...position,
              x: Number(Number(position["x"]) - 1)
            })
        } else if (event.key === 'ArrowDown'
          && position["x"] + 1 >= 0 
          && position["x"] + 1 <= 2) {
            setPosition({
                ...position,
                x: Number(Number(position["x"]) + 1)
              })
        } else if (event.key === 'ArrowRight'
          && position["y"] + 1 >= 0 
          && position["y"] + 1 <= 2) {
            setPosition({
                ...position,
                y: Number(Number(position["y"]) + 1)
              })
        } else if (event.key === 'ArrowLeft'
          && position["y"] - 1 >= 0 
          && position["y"] - 1 <= 2) {
            setPosition({
                ...position,
                y: Number(Number(position["y"]) - 1)
              })
        }
    }

    useEffect(() => {   
        window.addEventListener('keydown', handleKeyDown);
        console.log(position);
        // cleanup component
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
    },);

    useEffect(() => {  
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
      <div className="board">
        <div className="square" data-square-coord="00">
        </div>
        <div className="square" data-square-coord="01">
        </div>
        <div className="square" data-square-coord="02">
        </div>
        <div className="square" data-square-coord="10">
        </div>
        <div className="square" data-square-coord="11">
        </div>
        <div className="square" data-square-coord="12">
        </div>
        <div className="square" data-square-coord="20">
        </div>
        <div className="square" data-square-coord="21">
        </div>
        <div className="square" data-square-coord="22">
        </div>
      </div>
    );
  }
  
export default Board;
  