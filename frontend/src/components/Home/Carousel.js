import '../../css/Home/Carousel.css'
import React, {useState} from 'react'
import {ReactComponent as ChevLeft} from '../../assets/svg/chevron-left.svg'
import {ReactComponent as ChevRight} from '../../assets/svg/chevron-right.svg'

import carouselone from '../../assets/png/ocean-course.jpg'
import carouseltwo from '../../assets/png/golfer-driver.jpg'
import carouselthree from '../../assets/png/golf-putting-green.jpg'


function Carousel() {

    const data = 
    [
        {
            image: carouselone, 
            heading: 'About',
            text: 'golflog is a project that allows users to track where and when they play, how they score and what shots they hit on a course.',
        },
        {
            image: carouseltwo, 
            heading: 'What we do',
            text: 'We use your golf data to create analysis and insights relevant to how you play overall and course to course.'
        },
        {
            image: carouselthree, 
            heading: 'How you Improve',
            text: 'Use our data to help improve your game and track your progress as you strive to become a better golfer.'
        }
    ];

    const nextSlide = () => {
        setSlide( (slide + 1) % data.length );
    }

    const previousSlide = () => {
        let nextSlide = slide - 1;
        if(nextSlide < 0){
            setSlide(data.length - 1);
        } else {
            setSlide(nextSlide);
        }
    }

    const [slide, setSlide] = useState(0);

    return (
        <div className="carousel-slider-container">
            <div className="carousel-slider">
                <div className="carousel-slider-track"
                    style={{ transform: `translateX(-${slide * 100}%)`}}>

                    {data.map((slide, index) => {
                        return(
                            <div key={index} className="slide slide-image"
                                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.35)), url(${slide.image})` }}>
                                <div className="slide-content">
                                    <h2>{slide.heading}</h2>
                                    <p className="slide-text">{slide.text}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>

                <div className="carousel-buttons-container">
                    <button className="left-chevron" 
                            onClick={previousSlide}>
                        <ChevLeft fill="white" width={25} height={25}/>
                    </button>

                    <button className="right-chevron"
                            onClick={nextSlide}>
                        <ChevRight fill="white" width={25} height={25}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Carousel
