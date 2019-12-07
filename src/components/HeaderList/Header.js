import React, {Component} from 'react';
import Logo from '../Logo';
import {Link} from 'react-router-dom';
import './header.css';


export default class Header extends Component{
    render(){
        return(
            <header className="header">
                <section className="header_container container">
                    <Logo/>
                    <div className="search">
                        <a href="#" className="browse_button button" id="browse_button">
                            Browse
                            <img src="img/arrow_buttom_for_button.png" alt=""></img>
                            <div className="browse_form">
                                <div className="category_section">
                                    <ul>
                                        <li>Women</li>
                                        <li><a href="">Dresses</a></li>
                                        <li><a href="">Tops</a></li>
                                        <li><a href="">Sweaters/Knits</a></li>
                                        <li><a href="">Jackets/Coats</a></li>
                                        <li><a href="">Blazers</a></li>
                                        <li><a href="">Denim</a></li>
                                        <li><a href="">Leggings/Pants</a></li>
                                        <li><a href="">Skirts/Shorts</a></li>
                                        <li><a href="">Accessories</a></li>
                                    </ul>
                                    <ul>
                                        <li>Women</li>
                                        <li><a href="">Tees/Tank tops</a></li>
                                        <li><a href="">Shirts/Polos</a></li>
                                        <li><a href="">Sweaters</a></li>
                                        <li><a href="">Sweatshirts/Hoodies</a></li>
                                        <li><a href="">Jackets/vests</a></li>
                                    </ul>
                                </div>
                            </div>
                        </a>
                        <input id="search_input" type="text" placeholder="Search for item..."></input>
                        <a href="#" id="header_search_button" className="button"></a>
                    </div>
                    <a href="#" id="basket" onMouseOver={this.shsowBasket}>
                        <img src="img/basket.png" alt="Корзина"></img>
                        <div className="mini_basket_form" onMouseLeave={this.hideBasket}>
                            <div className="products_in_basket_section">
                                <div className="product_in_basket">
                                    <div className="product_in_basket_image"></div>
                                    <div className="product_in_basket_information">
                                        <h4 className="product_in_basket_name">Rebox Zane</h4>
                                        <img className="product_in_basket_rating" src="img/rating_stars.png" alt="4.5"></img>
                                        <div className="count_and_price">
                                            <p className="count">1</p>
                                            <p>X</p>
                                            <p>$<span className="price">250</span></p>
                                        </div>
                                    </div>
                                    <a className="delete_product_in_basket button" href="">
                                        <img src="img/delete_button.png" alt=""></img>
                                    </a>
                                </div>
                                <div className="product_in_basket">
                                    <div className="product_in_basket_image"></div>
                                    <div className="product_in_basket_information">
                                        <h4 className="product_in_basket_name">Rebox Zane</h4>
                                        <img className="product_in_basket_rating" src="img/rating_stars.png" alt="4.5"></img>
                                        <div className="count_and_price">
                                            <p className="count">1</p>
                                            <p>X</p>
                                            <p>$<span className="price">250</span></p>
                                        </div>
                                    </div>
                                    <a className="delete_product_in_basket button" href="">
                                        <img src="img/delete_button.png" alt=""></img>
                                    </a>
                                </div>
                            </div>
                            <div className="total_basket_price">
                                <p className="total">TOTAL</p>
                                <p className="total_price_value">$500.00</p>
                            </div>
                            <a className="checkout_button button" href="">CHECKOUT</a>
                            <a className="go_to_cart_button button" href="">GO TO CART</a>
                        </div>
                    </a>
                    <a href="#" className="button" id="my_account_button">My Account</a>
                </section>
                <nav className="nav">
                    <a href="#">home</a>
                    <a href="#">man</a>
                    <a href="#">woman
                    <div className="nav_category_hover_form">
                        <div className="category_section">
                            <ul>
                                <li className="category_name">Women</li>
                                <li><Link to='/products'>Dresses</Link></li>
                                <li><Link to='/products'>Tops</Link></li>
                                <li><Link to='/products'>Sweaters</Link></li>
                                <li><Link to='/products'>Jackets</Link></li>
                                <li><Link to='/products'>Blazers</Link></li>
                                <li><Link to='/products'>Denim</Link></li>
                                <li><Link to='/products'>Leggings</Link></li>
                                <li><Link to='/products'>Skirts</Link></li>
                                <li><Link to='/products'>Accessories</Link></li>
                            </ul>
                        </div>
                        <div className="category_section">
                            <ul>
                                <li className="category_name">Women</li>
                                <li><Link to='/products'>Bags</Link></li>
                                <li><Link to='/products'>Swimwear</Link></li>
                                <li><Link to='/products'>Nightwear</Link></li>
                                <li><Link to='/products'>Shoes</Link></li>
                            </ul>
                            <ul>
                                <li className="category_name">Women</li>
                                <li><Link to='/products'>Purses</Link></li>
                                <li><Link to='/products'>Underwear</Link></li>
                                <li><Link to='/products'>Coats</Link></li>
                            </ul>
                        </div>
                        <div className="category_section">
                            <ul>
                                <li className="category_name">Women</li>
                                <li><Link to='/products'>Knits</Link></li>
                                <li><Link to='/products'>Pants</Link></li>
                                <li><Link to='/products'>Shorts</Link></li>
                                <li><Link to='/products'>Tops</Link></li>
                            </ul>
                            <img className="category_section_img" src="/img/navigation_category_hover_image.png" alt=""></img>
                        </div>
                    </div>
                    </a>
                    <a href="#">kids</a>
                    <a href="#">Accoseriese</a>
                    <a href="#">featured</a>
                    <a href="#">hot deals</a>
                </nav>
            </header>
        )
    }
}

Header.prototype.shsowBasket = ()=>{
    document.querySelector(".mini_basket_form").style.display="block";
}

Header.prototype.hideBasket = ()=>{
    document.querySelector(".mini_basket_form").style.display="none";
}