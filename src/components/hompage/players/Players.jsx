import React, { use, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";

const Players = ({ playerPromise, setCoin, coin }) => {
  const data = use(playerPromise);
  // console.log(players);
  const [selectedType, setSelectedType] = useState("available");
  console.log(selectedType, "selectedType");
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <div className="container mx-auto my-[60px]">
      <div className="flex justify-between gap-4 items-center mb-[20px]">
        {selectedType === "available" ? (
          <h2 className="font-bold text-3xl">Available Players</h2>
        ) : (
          <h2 className="font-bold text-3xl">
            Selected Players ({selectedPlayers.length}/{data.length})
          </h2>
        )}

        <div>
          <button
            onClick={() => setSelectedType("available")}
            className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""}  rounded-r-none rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""}  rounded-l-none rounded-r-xl`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {selectedType === "available" ? (
        <AvailablePlayers
          data={data}
          setCoin={setCoin}
          coin={coin}
          setSelectedPlayers={setSelectedPlayers}
          selectedPlayers={selectedPlayers}
        />
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          setCoin={setCoin}
          coin={coin}
        />
      )}
    </div>
  );
};

export default Players;
