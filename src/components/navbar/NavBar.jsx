import React from 'react';
import dollerImg from "../../assets/dollar_1.png";

const NavBar = ({coin}) => {
    return (
        <div className="navbar bg-base-100 shadow-sm container mx-auto">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">BPL</a>
  </div>
   <div>
      <ul className='mr-100 text-xl flex justify-between items-center gap-4'>
        <li><a href="">Home</a></li>
        <li><a href="">Fixture</a></li>
        <li><a href="">Teams</a></li>
        <li><a href="">Schedules</a></li>
      </ul>
   </div>
  <div className="flex-none">
    <button className="btn flex justify-between items-center gap-2 font-bold text-xl">
      {coin} Coins
      <img src={dollerImg} alt="" />
    </button>
  </div>
</div>
    );
};

export default NavBar;