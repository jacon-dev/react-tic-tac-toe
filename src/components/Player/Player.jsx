import { useState } from "react";

export default function Player({playerName, playerSymbol}) {
    const [isEditing, setIsEditing] = useState(false, )

    function handleEditClick() {
        setIsEditing(!isEditing)
    }

    return (
        <li>
              <span className="player">
                  {
                      isEditing
                      ? <input type="text" required defaultValue={playerName}/>
                      : <span className="player-name">{playerName}</span>
                  }
                <span className="player-symbol">{playerSymbol}</span>
              </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}