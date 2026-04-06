import React from "react";
import Card from "../players/Card";

const AvailablePlayers = ({
  data,
  setCoin,
  coin,
  selectedPlayers,
  setSelectedPlayers
}) => {
  //   console.log(data, "players");

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((player) => {
          return (
            <Card key={player.playerName}
              player={player}
              setCoin={setCoin}
              coin={coin}
              selectedPlayers={selectedPlayers}
              setSelectedPlayers={setSelectedPlayers}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};

export default AvailablePlayers;
