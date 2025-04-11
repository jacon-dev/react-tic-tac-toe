import { useState } from "react";

export default function Player({initialName, playerSymbol, isActive, onChangeName}) {
    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(initialName)

    function handleEditClick() {
        setIsEditing(editing => !editing)
        if(isEditing){
            onChangeName(playerSymbol, playerName)
        }
    }

    function handlePlayerNameChange(e) {
        setPlayerName(e.target.value)
    }

    return (
        <li className={isActive ? 'active' : undefined}>
              <span className="player">
                  {
                      isEditing
                      ? <input type="text" required value={playerName} onChange={handlePlayerNameChange}/>
                      : <span className="player-name">{playerName}</span>
                  }
                <span className="player-symbol">{playerSymbol}</span>
              </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}