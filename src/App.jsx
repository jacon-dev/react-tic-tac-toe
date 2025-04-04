import Player from "./components/Player/Player.jsx";
import GameBoard from "./components/Gameboard/GameBoard.jsx";
import {useState} from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState('X')

    function handleSelectSquare() {
      setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X')
    }

  return (
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player initialName="Player 1" playerSymbol="X" isActive={activePlayer === 'X'} />
            <Player initialName="Player 2" playerSymbol="O" isActive={activePlayer === 'O'} />
          </ol>
            <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
        </div>
      </main>
  )
}

export default App
