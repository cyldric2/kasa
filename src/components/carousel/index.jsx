
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import '../../utils/style/carousel.scss'

function Carousel(picture) {
  let [index, setIndex] = useState(0)
    function nextImag() {
        if (index+1 <picture.picture.length) {
            setIndex(index + 1)
        } else {
        setIndex(0)}
        
    }
    function prevImag() {
        if (index > 0  ) {
             setIndex(index - 1)
        } else {
       setIndex(picture.picture.length-1)}
    }
    console.log(index);
    
    return (
        <div className='carousel'>
            <img id='zoneImag' className='logImg' src={picture.picture[index]} alt="logement" />
            <div className='positionement'>
                <p onClick={() => prevImag()}>{<FontAwesomeIcon icon={faChevronLeft} />}</p>
                <p onClick={() => nextImag()}>{<FontAwesomeIcon icon={faChevronRight} />}</p>
            </div>
            <p className='nombreImage'>{index+1 }/{picture.picture.length }</p>
        </div>
    )
}
export default Carousel
