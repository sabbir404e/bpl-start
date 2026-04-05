import React, { use, useState } from "react";
import Availablelayers from "../AvailablePlayers/Availablelayers";

const Players = ({ playerPromise, setCoin, coin }) => {
  //   console.log(playerPromise);

  const data = use(playerPromise);
  //   console.log(data);

  const [selectedType, setSelectedType] = useState("available");
  console.log(selectedType);

  return (
    <div className="container mx-auto my-[60px]">
      <div className="flex justify-between items-center">
        {selectedType === "available" ? (<h2 className="font-bold text-xl">Available Players</h2>) : (<h2 className="font-bold text-xl">Selected Players</h2>)}

        <div className="my-[20px]">
          <button
            onClick={() => setSelectedType("available")}
            className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""} rounded-r-none rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""} rounded-l-none rounded-r-xl`}
          >
            Selected (0)
          </button>
        </div>
      </div>

      <Availablelayers data={data} setCoin={setCoin} coin={coin}></Availablelayers>
    </div>
  );
};

export default Players;
