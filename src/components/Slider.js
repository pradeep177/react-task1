import React, {useState} from 'react'
import './slider.css'
import information from '../data.json'
import Carousel from "react-elastic-carousel";


const breakPoints = [
    { width: 1, itemsToShow: 3 }
  ];
const Slider = () => {
    const [searchTerm, setsearchTerm] = useState("")

    return (
        <>
        <input type="text" 
            className="searchbar"
            placeholder="search...."
            value={searchTerm}
            onChange={event => {setsearchTerm(event.target.value)}} 
        />
      <Carousel breakPoints={breakPoints} outerSpacing={100}>
            {information.filter(val => {
                if(searchTerm === ""){
                    return val;
                }
                else if(val.title.toLowerCase().replace(/_/g, "").includes(searchTerm.toLowerCase().replace(/_/g, ""))) {
                    return val;
                }
                }).map(info => {
                return(
                    <div className='slider' key={info.id}>
                        <h3>{info.title}</h3> 
                        <p>{info.description}</p>
                    </div>    
                )
            })}
      </Carousel>
        </>
    )
}

export default Slider
