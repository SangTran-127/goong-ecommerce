import React, { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from "./Button"
const GoongSlider = props => {

    const { data } = props

    const timeOut = props.timeOut ? props.timeOut : 3000;

    const [activeSlide, setActiveSlide] = useState(0);

    const nextSlide = useCallback(() => {
        const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;
        setActiveSlide(index)
    }, [activeSlide, data])
    const prevSlide = () => {
        const index = activeSlide - 1 < 0 ? 0 : activeSlide - 1;
        setActiveSlide(index)
    }
    useEffect(() => {
        console.log('ren der ne');
        if (props.auto) {
            const slideAuto = setInterval(() => {
                nextSlide();
            }, timeOut);
            return () => {
                clearInterval(slideAuto);
            }
        }
    }, [nextSlide, timeOut, props])
    return (
        <div className="goong-slider">
            {
                data.map((item, index) => (
                    <GoongSliderItem key={index} item={item} active={index === activeSlide} />
                ))
            }
            {
                props.control ? (
                    <div className="goong-slider__control">
                        <div className="goong-slider__control__item" onClick={prevSlide}>
                            <i className="bx bx-chevron-left"></i>
                        </div>
                        <div className="goong-slider__control__item">
                            <div className="index">
                                {activeSlide + 1}/{data.length}
                            </div>
                        </div>
                        <div className="goong-slider__control__item" onClick={nextSlide}>
                            <i className="bx bx-chevron-right"></i>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}

GoongSlider.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number,

}

const GoongSliderItem = props => (
    <div className={`goong-slider__item ${props.active ? 'active' : ''}`}>
        <div className="goong-slider__item__info">
            <div className={`goong-slider__item__info__title color-${props.item.color}`}>
                <span>{props.item.title}</span>
            </div>
            <div className="goong-slider__item__info__description">
                <span>{props.item.description}</span>
            </div>
            <div className="goong-slider__item__info__btn">
                <Link to={props.item.path}>
                    <Button
                        backgroundColor={props.item.color}
                        icon="bx bx-cart"
                        animate
                        size="sm"
                    >Xem chi tiết</Button>
                </Link>
            </div>
        </div>
        <div className="goong-slider__item__image">
            <div className={`shape bg-${props.item.color}`}></div>
            <img src={props.item.img} alt="" />
        </div>
    </div >
)
export default GoongSlider