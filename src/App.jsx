import { Suspense, useState } from 'react';
import './App.css';
import Banner from './components/hompage/banner/Banner';
import Players from './components/hompage/players/Players';
import NavBar from './components/navbar/NavBar';

const fetchPlayer = async() => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {

  const playerPromise = fetchPlayer();
  const [coin, setCoin] = useState(5000);

  return (
    <>
     <NavBar coin={coin}></NavBar>
     <Banner></Banner>
     <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
       <Players playerPromise={playerPromise} setCoin={setCoin} coin={coin}></Players>
     </Suspense>
    </>
   
  )
}

export default App
