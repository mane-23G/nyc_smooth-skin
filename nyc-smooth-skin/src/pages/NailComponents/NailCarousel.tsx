import Carousel from 'react-bootstrap/Carousel';
import Nail1 from '../../assets/nailpics/nail1.png';
import Nail2 from '../../assets/nailpics/nail2.png';
import Nail3 from '../../assets/nailpics/nail3.png';
import Nail4 from '../../assets/nailpics/nail4.png';
import Nail5 from '../../assets/nailpics/nail5.png';
import Nail6 from '../../assets/nailpics/nail6.png';



import React from 'react'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'

export function NailCarousel() {
  return (
    <div className='carousel'>
        {/* <img src={Nail1}></img> */}
     
        <img src={Nail4}></img>
        {/* <img src={Nail3}></img> */}
        <img src={Nail5}></img>
        <img src={Nail6}></img>
        

        
    </div>
  )
}
