import React from 'react';

export default function Product(props) {
    const {name, price, src} = props;
    console.log({src});
    return(
        <a href="#" className="product">
            <div className="product_image" style={{backgroundImage:'url("'+src+'")'}}>
                <div className="hover_product_image_block">
                    <div className="add_to_cart button">
                        <img src="img/white_basket.png" alt=""></img>Add to Cart
                    </div>
                </div>
            </div>
            <div className="product_indicators">
                <p className="product_name">{name}</p>
                <p className="product_price">${price}</p>
            </div>
        </a>
    )
}