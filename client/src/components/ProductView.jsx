import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../components/Button'
import numberWithCommas from '../utils/numberWithCommas'
const ProductView = props => {

    const product = props.product
    const [imgView, setImgView] = useState(product.image01)
    const [expand, setExpand] = useState(false)
    const [color, setColor] = useState(null)
    const [size, setSize] = useState(null)
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
                <div className={`product-description ${expand ? `expand` : ``}`}>
                    <div className="product-description__title">
                        Chi tiết sản phẩm
                    </div>
                    <div className="product-description__content" dangerouslySetInnerHTML={{ __html: product.description }} />
                    {/* thằng này thay cho innerHTML trong DOM để tránh xss */}
                    <div className="product-description__toggle">
                        <Button size="sm" onClick={() => setExpand(!expand)}>
                            {expand ? "Thu gọn" : "Xem thêm"}
                        </Button>
                    </div>
                </div>
            </div>
            <div className="product__info">
                <h1 className="product__info__title">{product.title}</h1>
                <div className="product__info__item">
                    <span className="product__info__item__price">
                        {numberWithCommas(product.price)}
                    </span>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Màu sắc
                    </div>
                    <div className="product__info__item__list">
                        {product.colors.map((item, index) =>
                            <div key={index} className="product__info__item__list__item">
                                <div className={`circle bg-${item}`}></div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Kích thước
                    </div>
                    <div className="product__info__item__list">
                        {product.size.map((item, index) =>
                            <div key={index} className="product__info__item__list__item">
                                <div className="product__info__item__list__item__size">{item}</div>

                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    )
}

ProductView.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ProductView