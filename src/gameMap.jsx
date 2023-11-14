import React [ useState, useEffect ] from 'react';

function GameMap () {
    const X = {walk: false, action: false,};
    const O = {walk: true, action: false,};
    const AO = {walk: true, action: true,};
    const AX = {walk: false, action: true,};

    const FIELD_MAP = [
    // X:0  1  2  3  4  5  6  7  8
        [X, X, X, X, X, X, X, X, X], // y = 0
        [X, O, O, O, O, O, O, O, X], // y = 1
        [X, O, O, O, O, O, O, O, X], // y = 2
        [X, O, O, O, O, O, O, O, X], // y = 3
        [X, O, O, O, AX, O, O, O, X], // y = 4
        [X, O, O, O, O, O, O, O, X], // y = 5
        [X, O, O, O, AO, AO, O, O, X], // y = 6 
        [X, O, O, O, AO, AO, O, O, X], // y = 7
        [X, X, X, X, X, X, X, X, X], // y = 8
    ]

    // useState for the player's current position
    const [playerPosition, setPlayerPosition] = useState({x: 1, y: 1}); 

    // Handle keydown events for player's movement
    const handleKeyDown = (event) => {
        switch(event.key) {
            case 'ArrowUp':
                if (FIELD_MAP[playerPosition.y - 1][playerPosition.x].walk) {
                    setPlayerPosition({x: playerPosition.x, y: playerPosition.y - 1});
                }
                break;
            case 'ArrowDown':
                if (FIELD_MAP[playerPosition.y + 1][playerPosition.x].walk) {
                    setPlayerPosition({x: playerPosition.x, y: playerPosition.y + 1});
                }
                break;
            case 'ArrowLeft':
                if (FIELD_MAP[playerPosition.y][playerPosition.x - 1].walk) {
                    setPlayerPosition({x: playerPosition.x - 1, y: playerPosition.y});
                }
                break;
            case 'ArrowRight':
                if (FIELD_MAP[playerPosition.y][playerPosition.x + 1].walk) {
                    setPlayerPosition({x: playerPosition.x + 1, y: playerPosition.y});
                }
                break;
            default:
                break;
        }
    };

    return (

    )
}
