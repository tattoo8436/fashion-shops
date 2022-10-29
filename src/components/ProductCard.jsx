import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';

import Button from './Button';

const ProductCard = props => {
    return (
        <div className='product-card'>
            <Link to={`/catalog/${props.slug}`}>
                <div className="product-card__image">
                    <img src={props.img} alt="" />
                </div>
                <h3 className="product-card__name">{props.name}</h3>
                <div className="product-card__price">
                    <NumericFormat value={props.price} displayType={'text'}
                        thousandSeparator={true}></NumericFormat>đ
                </div>
                <div className="product-card__btn">
                    <Button
                        size="sm"
                        animate={true}
                    >Xem chi tiết</Button>
                </div>
            </Link>
        </div>
    )
}

ProductCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired
}

export default ProductCard