import Player from "./components/Player/Player.jsx";
import GameBoard from "./components/Gameboard/GameBoard.jsx";
import Log from "./components/Log/Log.jsx";
import GameOver from "./components/GameOver/GameOver.jsx";
import {useState} from "react";
import {WINNING_COMBINATIONS} from "./winning-combinations.js";

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
    const [players, setPlayers]= useState({
        X : 'Player 1',
        O : 'Player 2'
    })

    let gameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]

    for (const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;
        gameBoard[row][col] = player;
    }

    let winner;
    const draw = gameTurns.length === 9 && !winner;

    for (const combination of WINNING_COMBINATIONS){
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol  = gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol  = gameBoard[combination[2].row][combination[2].column];

        if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
            console.log(firstSquareSymbol);
            winner = players[firstSquareSymbol];
        }
    }

    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurns(prevTurns => {
            let currentPlayer = DeriveActivePlayer(prevTurns);
            return [{square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns];
        })
    }

    function resetGame(){
        setGameTurns([]);
    }

    function handlePlayerNameChange(symbol, newName){
        setPlayers(prevPlayers => {
            return {
                ...prevPlayers,
                [symbol]: newName
            }
        })
    }

  return (
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player initialName="Player 1" playerSymbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange}  />
            <Player initialName="Player 2" playerSymbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange} />
          </ol>
            {(winner || draw) && <GameOver winner={winner} resetGame={resetGame} />}
            <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
        </div>
      <Log gameTurns={gameTurns} />
      </main>
  )
}

export default App
