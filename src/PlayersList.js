import React from "react";
import Players from "./Players";
import Player from "./Player";

const PlayersList = () => { 
    return (
<>
{Players.map((elem) => (
    <Player{...elem} />
) ) }

</>
    )
}
export default PlayersList;