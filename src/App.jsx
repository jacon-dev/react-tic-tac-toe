import Player from "./components/Player/Player.jsx";
import GameBoard from "./components/Gameboard/GameBoard.jsx";
import {useState} from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState('X')

    function handleUpdateActivePlayer() {
      setActivePlayer(() => activePlayer === 'X' ? 'O' : 'X')
    }

  return (
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player initialName="Player 1" playerSymbol="X" activePlayer={activePlayer === 'X'} />
            <Player initialName="Player 2" playerSymbol="O" activePlayer={activePlayer === 'O'} />
          </ol>
            <GameBoard setActivePlayer={handleUpdateActivePlayer} />
        </div>
      </main>
  )
}

export default App
