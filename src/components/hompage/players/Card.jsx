import React, { useState } from "react";
import { FaUser, FaFlag } from "react-icons/fa";

const Card = ({ player, setCoin, coin }) => {
  const [isSelected, setIsSelected] = useState(false);
 
  const handleChoicePlayer = () => {

    let newCoin = coin - player.price;
    if(newCoin >=0){
        setCoin(coin - player.price);
    }
    else{
        alert("Not enough coin to purches this player");
        return;
    }

    alert(`${player.playerName} is selected`);
    setIsSelected(true);
  };

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={player.playerImage} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <FaUser /> {player.playerName}
        </h2>
        <div className="flex justify-between gap-2 items-center">
          <FaFlag />
          <p>{player.PlayerCountry}</p>
          <button className="btn">{player.playerType}</button>
        </div>
        <div className="divider"></div>
        <h2 className="font-bold">Rating: {player.rating}</h2>
        <div className="flex justify-between gap-4 font-bold">
          <p>{player.batingStyle}</p>
          <p className="text-right">{player.bowlingStyle}</p>
        </div>
        <div className="card-actions justify-between items-center">
          <p className="font-semibold">Price: ${player.price}</p>
          <button
            className="btn"
            onClick={handleChoicePlayer}
            disabled={isSelected}
          >
            {isSelected ? "Selected" : "Choice Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
