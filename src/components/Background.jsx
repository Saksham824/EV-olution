import React from 'react'
import './Background.css'
import video1 from '../assets/video1.mp4'
import car1 from '../assets/car1.jpg'
import car2 from '../assets/car2.jpg'
import car3 from '../assets/car3.jpg'
import car4 from '../assets/car4.jpg'

const Background = ({playStatus, heroCount}) => {
  if(playStatus){
    return (
        <video className='background fade-in' autoPlay loop muted>
            <source src={video1} type='video/mp4'/>
        </video>
    )
  }
  else if(heroCount===0){
    return <img src={car1} className='background fade-in'/>
  }
  else if(heroCount===1){
    return <img src={car2} className='background fade-in'/>
  }
  else if(heroCount===2){
    return <img src={car3} className='background fade-in'/>
  }
  else if(heroCount===3){
    return <img src={car4} className='background'/>
  }
}

export default Background
