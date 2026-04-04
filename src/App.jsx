import { Suspense } from 'react';
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

  return (
    <>
     <NavBar></NavBar>
     <Banner></Banner>
     <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
       <Players playerPromise={playerPromise}></Players>
     </Suspense>
    </>
   
  )
}

export default App
