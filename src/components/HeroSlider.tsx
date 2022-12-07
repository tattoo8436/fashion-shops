import React, {  } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { Carousel, Button } from 'antd';

const HeroSlider = (props: any) => {

    const data = props.data;

    return (
        <Carousel autoplay autoplaySpeed={2000}>
            {
                data.map((item: any, index: any) => {
                    return (
                        <div className='hero-slider' key={index}>
                            <div className="hero-slider__item">
                                <div className="hero-slider__item__info">
                                    <div className="hero-slider__item__info__title">
                                        <span>{item.title}</span>
                                    </div>

                                    <div className="hero-slider__item__info__description">
                                        <span>{item.description}</span>
                                    </div>

                                    <div className="hero-slider__item__info__btn">
                                        <Link to={item.path}>
                                            <Button type='primary' size='large'>Xem chi tiết</Button>
                                        </Link>
                                    </div>
                                </div>

                                <div className="hero-slider__item__image">
                                    <img src={item.img} alt="" />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </Carousel>
    )
}

HeroSlider.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool
}

export default HeroSlider