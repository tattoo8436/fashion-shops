import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';

import { Card } from 'antd';

const ProductCard = props => {
    return (
        <div className='product-card'>
            <Link to={`/catalog/${props.slug}`}>
                <Card
                    hoverable
                    cover={<img src={props.img} alt='' />}
                >
                    <span className="product-card__name">{props.name}</span>
                    <div className="product-card__price">
                        <NumericFormat
                            value={props.price}
                            displayType={'text'}
                            thousandSeparator={true}>
                        </NumericFormat>đ
                    </div>
                </Card>
            </Link>
        </div>
    )
}

ProductCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
}

export default ProductCard