import React, { useState } from 'react';
import { FaRegUser} from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, coin, setCoin}) => {
  console.log(selectedPlayers, "selectedPlayers");

  const handleDeleteSelectedPlayer = (player) => {

      console.log(setSelectedPlayers, "setSelectedPlayers");

      const filteredPlayers = selectedPlayers.filter(
        (selectedPlayers => selectedPlayers.playerName!== player.playerName)
      );
      console.log(filteredPlayers, "setSelectedPlayers");
      setSelectedPlayers(filteredPlayers);

      setCoin(coin + player.price);
  }

  return (

    <div className='space-y-5'>
       {selectedPlayers.length === 0 ? 
       
       <div className='h-[400px] flex items-center justify-center flex-col'>
         <h2 className='font-semibold text-xl'>No players selected yet</h2>
         <p>Got to Available tab to select players</p>
       </div>
       
       : selectedPlayers.map((player, index) => {
         return (<div key={index} className='flex items-center gap-6 justify-between p-10 rounded-2xl border'>
          <div className='flex items-center rounded-md'>
             <img src={player.playerImage} alt={player.playerImage} className='h-[75px] w-auto'/>
             </div>

             <div>
               <h2 className='flex items-center gap-2 font-semibold text-2xl'><FaRegUser/> {player.playerName}</h2>
               <p>{player.playerType}</p>
             </div>
          
          <button className='btn bg-red-200' onClick={() => handleDeleteSelectedPlayer(player)}><RiDeleteBin6Line /></button>
         </div>)
       })}
    </div>
  );
};

export default SelectedPlayers;