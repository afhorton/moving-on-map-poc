import  { useState, useEffect } from 'react';

function GameMap () {
    const X = {walk: false, action: false,};
    const O = {walk: true, action: false,};
    const AO = {walk: true, action: true,};
    const AX = {walk: false, action: true,};

    const FIELD_MAP = [
    // X:0  1  2  3  4  5  6  7  8
        [O, O, O, O, O, O, O, O, O], // y = 0
        [O, O, O, O, O, O, O, O, X], // y = 1
        [X, O, O, O, O, O, O, O, X], // y = 2
        [X, O, O, O, O, O, O, O, X], // y = 3
        [X, O, O, O, AX, O, O, O, X], // y = 4
        [X, O, O, O, O, O, O, O, X], // y = 5
        [X, O, O, O, AO, AO, O, O, X], // y = 6 
        [X, O, O, O, AO, AO, O, O, X], // y = 7
        [X, X, X, X, X, X, X, X, X], // y = 8
    ]

    // useState for the player's current position
    const [playerPosition, setPlayerPosition] = useState({top: 32, left: 32}); 

    // handle keypress events for player movement
    const handleKeyPress = (event) => {
        let newPosition;
        let X;
        let Y;
    

    switch (event.key) {
        case 'ArrowUp':
            newPosition = playerPosition.top - 32;
            X = (playerPosition.left - (playerPosition.left % 32)) / 32;
            Y = (newPosition - (newPosition % 32)) / 32;

            if (FIELD_MAP[Y][X].walk) {
                setPlayerPosition((prevPosition) => ({...prevPosition, top: newPosition}));
            }
            break;

        case 'ArrowDown':
            newPosition = playerPosition.top + 32;
            X = (playerPosition.left - (playerPosition.left % 32)) / 32;
            Y = (newPosition - (newPosition % 32)) / 32;

            if (FIELD_MAP[Y][X].walk) {
                setPlayerPosition((prevPosition) => ({...prevPosition, top: newPosition}));
            }
            break;
        
        case 'ArrowLeft':
            // newPosition = playerPosition.left - 32; 
            // X = ((playerPosition.left - 32) - ((playerPosition.left - 32) % 32)) / 32;
            // Y = (playerPosition.top - (playerPosition.top % 32)) / 32;

            // if (FIELD_MAP[Y][X].walk) {
            //     setPlayerPosition((prevPosition) => ({...prevPosition, left: newPosition}));
            // }
            // break;
             newPosition = playerPosition.left - 32;
            X = (newPosition - (newPosition % 32)) / 32;
            Y = (playerPosition.top - (playerPosition.top % 32)) / 32;

            if (FIELD_MAP[Y][X].walk) {
                setPlayerPosition((prevPosition) => ({...prevPosition, left: newPosition}));
            }
            break;

        case 'ArrowRight':
            // newPosition = playerPosition.left + 32; 
            // X = ((playerPosition.left + 32) - ((playerPosition.left + 32) % 32)) / 32;
            // Y = (playerPosition.top - (playerPosition.top % 32)) / 32;

            // if (FIELD_MAP[Y][X].walk) {
            //     setPlayerPosition((prevPosition) => ({...prevPosition, left: newPosition}));
            // }
            // break;
            newPosition = playerPosition.left + 32;
               X = (newPosition - (newPosition % 32)) / 32;
            Y = (playerPosition.top - (playerPosition.top % 32)) / 32;

            if (FIELD_MAP[Y][X].walk) {
                setPlayerPosition((prevPosition) => ({...prevPosition, left: newPosition}));
            }
            break;
            
        default:
            break;
    }

    };

   useEffect(
        () => {
            window.addEventListener('keydown', handleKeyPress);
            return () => {
                window.removeEventListener('keydown', handleKeyPress);
            };
        }, []
    );

    return (
        <div>
            {FIELD_MAP.map(
                (row, rowIndex) =>
                (
                <div key={rowIndex}>
                    {row.map((tile, colIndex) =>
                    (
                <div
              key={colIndex}
              style={{
                width: 32,
                height: 32,
                backgroundColor: tile.walk ? 'green' : 'red',
                display: 'inline-block',
              }}
            />
                    ))}
                </div>
       ))}
      <div
        style={{
          position: 'absolute',
          top: playerPosition.top,
          left: playerPosition.left,
          width: 32,
          height: 32,
          backgroundColor: 'blue',
        }}
      />
    </div>
  );
}


export default GameMap;
