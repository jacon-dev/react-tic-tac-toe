import Player from "./components/Player/Player.jsx";
import GameBoard from "./components/Gameboard/GameBoard.jsx";
import Log from "./components/Log/Log.jsx";
import {useState} from "react";

function App() {
    const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X')

    function handleSelectSquare(rowIndex, colIndex) {
      setActivePlayer((currentActivePlayer) => (currentActivePlayer === 'X' ? 'O' : 'X'))
        setGameTurns(prevTurns => {
            let currentPlayer = 'X'
            if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
                currentPlayer = 'O'
            }
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
