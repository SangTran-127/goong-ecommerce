import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ProductView = props => {

    const product = props.product
    const [imgView, setImgView] = useState(product.image01)
    return (
        <div className="product">
            <div className="product__images">
                <div className="product__images__list">
                    <div className="product__images__list__item">
                        <img src={product.image01} alt="" onClick={() => setImgView(product.image01)} />
                    </div>
                    <div className="product__images__list__item">
                        <img src={product.image02} alt="" onClick={() => setImgView(product.image02)} />
                    </div>
                </div>
                <div className="product__images__main">
                    <img src={imgView} alt="" />
                </div>
            </div>
        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ProductView