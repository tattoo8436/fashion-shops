import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';

import { Card, Image } from 'antd';

export interface IProps {
    img: typeof import("*.jpg"),
    name: string,
    price: number,
    slug: string
}

const ProductCard = (props: IProps): JSX.Element => {
    return (
        <div className='product-card'>
            <Link to={`/catalog/${props.slug}`}>
                <Card
                    hoverable
                    cover={<Image src={props.img + ''} alt='' />}
                >
                    <span className="product-card__name">{props.name}</span>
                    <div className="product-card__price">
                        <NumericFormat
                            value={props.price}
                            displayType={'text'}
                            thousandSeparator={true}
                        /> đ
                    </div>
                </Card>
            </Link>
        </div>
    )
}

export default ProductCard