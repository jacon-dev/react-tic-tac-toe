import Player from "./components/Player/Player.jsx";
import GameBoard from "./components/Gameboard/GameBoard.jsx";
import Log from "./components/Log/Log.jsx";
import {useState} from "react";

function DeriveActivePlayer(gameTurns){
    let currentPlayer = 'X'
    if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
        currentPlayer = 'O'
    }
    return currentPlayer;
}

function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const activePlayer = DeriveActivePlayer(gameTurns);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurns(prevTurns => {
            let currentPlayer = DeriveActivePlayer(prevTurns);
            return [{square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns];
        })
    }

  return (
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player initialName="Player 1" playerSymbol="X" isActive={activePlayer === 'X'} />
            <Player initialName="Player 2" playerSymbol="O" isActive={activePlayer === 'O'} />
          </ol>
            <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
        </div>
      <Log gameTurns={gameTurns} />
      </main>
  )
}

export default App
