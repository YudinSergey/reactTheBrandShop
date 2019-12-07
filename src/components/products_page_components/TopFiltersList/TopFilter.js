import React, {Component} from 'react';
import BrandService from '../../../services/brandService';
import './top_filter.css';

export default class TopFilters extends Component{

    changeMinPriceBackground = (event) =>{
        let n = event.target.value;
        event.target.style.backgroundImage = '-webkit-linear-gradient(left ,#f0f0f0 0%,#f0f0f0 '+n/3.9+'%,#f16d7f '+n/3.9+'%, #f16d7f 100%)';
        document.querySelector("#min_price_value").textContent="$"+n;
        this.props.updateMinPrice(n);
    }

    changeMaxPriceBackgriund = (event) =>{
        let n = event.target.value-400;
        event.target.style.backgroundImage = '-webkit-linear-gradient(left ,#f16d7f 0%,#f16d7f '+n/4+'%,#f0f0f0 '+n/4+'%, #f0f0f0 100%)';
        document.querySelector("#max_price_value").textContent="$"+event.target.value;
        this.props.updateMaxPrice(event.target.value);
    }

    showSortOrShowFilterVariants = (event)=>{
        event.preventDefault();
        event.target.parentElement.children[1].style.display="block";
    }

    chooseSortOrShowFilterVariant = (event)=>{
        if(event.target.parentElement.classList.contains('sort_by_filter_variant')||event.target.parentElement.classList.contains('show_filter_variant')){
            event.preventDefault();
            event.target.parentElement.parentElement.parentElement.children[0].textContent = event.target.textContent;
            event.target.parentElement.parentElement.style.display="none"; 
            if(event.target.parentElement.classList.contains('show_filter_variant')){
                console.log(event.target.textContent.replace(/0/,""));
                this.props.updateQuantity(event.target.textContent.replace(/0/,""));
            }
        }
    }

    render(){
        return (
            <section className="top_filters">
                <div className="top_filter_block tranding_filter">
                    <h4 className="top_filter_headline">Trending now</h4>
                    <div className="trending_filter_items">
                        <a href="#">Bohemian</a>
                        <a href="#">Floral</a>
                        <a href="#">Lace</a>
                        <a href="#">Floral</a>
                        <a href="#">Lace</a>
                        <a href="#">Bohemian</a>
                    </div>
                </div>
                <div className="top_filter_block size_filter">
                    <h4 className="top_filter_headline">Size</h4>
                    <div className="size_filter_items">
                        <input type="checkbox" className="size-checkbox" id="XXS"></input>
                        <label for="XXS">XXS</label>
                        <input type="checkbox" className="size-checkbox" id="XS"></input>
                        <label for="XS">XS</label>
                        <input type="checkbox" className="size-checkbox" id="S"></input>
                        <label for="S">S</label>
                        <input type="checkbox" className="size-checkbox" id="M"></input>
                        <label for="M">M</label>
                        <input type="checkbox" className="size-checkbox" id="L"></input>
                        <label for="L">L</label>
                        <input type="checkbox" className="size-checkbox" id="XL"></input>
                        <label for="XL">XL</label>
                        <input type="checkbox" className="size-checkbox" id="XXL"></input>
                        <label for="XXL">XXL</label>
                    </div>
                </div>
                <div className="top_filter_block price_filter">
                    <h4 className="top_filter_headline">Price</h4>
                    <div className="price_items">
                        <input id="min_price_filter" type="range" min="0" max="399" step="1" onMouseMove={this.changeMinPriceBackground} onClick={this.changeMinPriceBackground}></input>
                        <input id="max_price_filter" type="range" min="400" max="800" step="1" onMouseMove={this.changeMaxPriceBackgriund} onClick={this.changeMaxPriceBackgriund}></input>
                        <span id="min_price_value">$50</span>
                        <span id="max_price_value">$400</span>
                    </div>
                </div>
                <div className="sort_by_and_quality_filter">
                    <div className="sort_by">
                        <div className="filter_name">Sort By</div>
                        <div className="sort_by_filter_body">
                            <a href="#" id="sort_by_filter_value" onClick={this.showSortOrShowFilterVariants}>Name</a>
                            <ul className="sort_by_filter_variants" onClick={this.chooseSortOrShowFilterVariant}>
                                <li className="sort_by_filter_variant"><a href="#">Name</a></li>
                                <li className="sort_by_filter_variant"><a href="#">Price</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="show">
                        <div className="filter_name">Show</div>
                        <div className="show_filter_body">
                            <a href="#" id="show_filter_value" onClick={this.showSortOrShowFilterVariants}>09</a>
                            <ul className="show_filter_variants" onClick={this.chooseSortOrShowFilterVariant}>
                                <li className="show_filter_variant"><a href="#">03</a></li>
                                <li className="show_filter_variant"><a href="#">06</a></li>
                                <li className="show_filter_variant"><a href="#">09</a></li>
                                <li className="show_filter_variant"><a href="#">12</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}