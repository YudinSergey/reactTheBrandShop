import React, {Component} from 'react';
import Products from '../../ProductsList/Products';
import './popular_products.css';

export default class PopularProducts extends Component {
    render(){
        return(
            <section className="popular_products container">
                    <h2>Fetured Items</h2>
                    <p>Shop for items based on what we featured in this week</p>
                    <Products quantity="8" minPrice="0" maxPrice="800"/>
                    <a href="#" className="browse_all_product_button button">
                        Browse All Product
                        <img src="img/right_row_for_button.png" alt=""></img>
                    </a>
            </section>
        )
    }
}