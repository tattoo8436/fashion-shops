import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import Button from './Button';

const HeroSlider = props => {

    const data = props.data;

    const [activeSlide, setActiveSlide] = useState(0);

    const nextSlide = () => {
        const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;
        setActiveSlide(index);
    }

    const preSlide = () => {
        const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1;
        setActiveSlide(index);
    }

    return (
        <div className='hero-slider'>
            {
                data.map((item, index) => (
                    <HeroSliderItem key={index} item={item} active={index === activeSlide} />
                ))
            }
            {
                props.control ? (
                    <div className="hero-slider__control">
                        <div className="hero-slider__control__item" onClick={preSlide}>
                            <i className='bx bx-chevron-left'></i>
                        </div>

                        <div className="hero-slider__control__item">
                            <div className="index">
                                {activeSlide + 1}/{data.length}
                            </div>
                        </div>

                        <div className="hero-slider__control__item" onClick={nextSlide}>
                            <i className='bx bx-chevron-right'></i>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}

HeroSlider.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool
}

const HeroSliderItem = prop => (
    <div className={`hero-slider__item ${prop.active ? 'active' : ''}`}>
        <div className="hero-slider__item__info">
            <div className="hero-slider__item__info__title">
                <span>{prop.item.title}</span>
            </div>

            <div className="hero-slider__item__info__description">
                <span>{prop.item.description}</span>
            </div>

            <div className="hero-slider__item__info__btn">
                <Link to={prop.item.path}>
                    <Button
                        bgColor={prop.item.color}
                        animate={true}
                    >
                        Xem chi tiết
                    </Button>
                </Link>
            </div>
        </div>

        <div className="hero-slider__item__image">
            <img src={prop.item.img} alt="" />
        </div>
    </div>
)

export default HeroSlider