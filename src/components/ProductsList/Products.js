import React, {Component} from 'react';
import BrandService from '../../services/brandService';
import './products.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class Products extends Component {
    BrandService = new BrandService();
    state={
        products: []
    }

    componentDidMount(){
        this.updateProducts();
    }

    updateProducts(){
        this.BrandService.getAllProducts()
        .then(this.onProductsLoaded);
    }

    onProductsLoaded = (products)=>{
        this.setState({
            products
        });
        console.log(this.state.products);
    }

    onProductsPages = (products, quantity) =>{
        let subarray = [];
        let size = quantity;
        for (let i = 0; i <Math.ceil(products.length/size); i++){
            let a = i*size;
            let b = a+(+size);
            console.log(a,b);
            subarray[i] = products.slice(a,b);
        }
        return(subarray);
    }

    renderItem(arr, quantity){
        return arr.map((item, i)=>{
            const {id, name, price, src} = item;
            while(i<quantity){
                return(
                    <a key={id} href="#" className="product">
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
        })
    }

    render(){
        const {products, quantity} = this.state;
        let newProducts = [];
        console.log(this.onProductsPages(products, this.props.quantity));
        for(let i=0; i<products.length; i++){
            console.log(+products[i].price);
            if(+products[i].price>=this.props.minPrice&&+products[i].price<=this.props.maxPrice){
                newProducts.push(products[i]);
            }
        }
        let totalArr = this.onProductsPages(newProducts, this.props.quantity);
        console.log(this.props.activePage-1);
        console.log(totalArr[this.props.activePage-1]);
        if(totalArr[this.props.activePage-1]!=undefined){
            newProducts=totalArr[this.props.activePage-1];
        }
        const items = this.renderItem(newProducts,this.props.quantity);
        return(
            <section className="products_section">
                {items}
            </section>
        )
    }
}