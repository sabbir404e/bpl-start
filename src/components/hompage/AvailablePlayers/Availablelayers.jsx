import React from "react";
import Card from "../players/Card";

const Availablelayers = ({ data, setCoin, coin }) => {
//   console.log(data, "players");

  return (
    <div>
      <div className="md:grid grid-cols-2 lg:grid grid-cols-3 gap-4">
        {data.map((player) => {
          return <Card player={player} setCoin={setCoin} coin={coin}></Card>;
        })}
      </div>
    </div>
  );
};

export default Availablelayers;
