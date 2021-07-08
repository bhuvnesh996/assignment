import React from 'react'
import './Card.css'

function CardDetails({name, email,sex,location,picture,country,city,state}) {
    return (
        <div className="flex flex-row justify-around">
            <div className="flex items-center justify-center w-25">   
                 <img src={picture.medium} alt='Pic' width="60vw" height="70vh" className="br-100"></img>
            </div>
            <div className="flex justify-center flex-column w-75">
                <span className='sex'>{sex+" "}</span>
                <span className='text-name'>{name.title} {name.first+" "+name.last}</span>
                <span className='text-email'>{location.street.number+","} {location.street.name+","}{location.city+","} {location.state}</span>
                <span className='text-email'>{location.timezone.offset+","} {location.timezone.description}</span>
            </div>
        </div>
    )
}

export default CardDetails
