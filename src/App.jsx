import { useEffect, useState } from 'react'
import './App.css'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {

  let heroData = [
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give into",text2:"your passions"},
    {text1:"Feel the flow",text2:"and ride"},
  ] 

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(() => {
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 5000);
  },[])

  return (
    <>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero setPlayStatus={setPlayStatus} heroData={heroData[heroCount]} heroCount={heroCount} setHeroCount={setHeroCount} playStatus={playStatus}/>
    </>
  )
}

export default App
