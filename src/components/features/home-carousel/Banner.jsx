import React from 'react'
import { CarouselWrap } from './Carousel'

const Banner = ({ massage, item, index }) => {
    return (
        <CarouselWrap massage={massage}>
            <div className="carousel">
                <img className="banner-massage" key={index} src={item.image} alt="Banner Carousel" />
                <h1 style={item.style} className="carousel-title" dangerouslySetInnerHTML={{ __html: item.quote }}></h1>
            </div>
        </CarouselWrap>
    )
}

export default Banner