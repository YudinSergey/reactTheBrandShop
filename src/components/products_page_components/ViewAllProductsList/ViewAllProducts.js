import React, {Component} from 'react';
import BrandService from '../../../services/brandService';
import './ViewAllProducts.css';

export default class ViewAllProducts extends Component{
    BrandService = new BrandService();
    state={
        productsLength:0
    }

    componentDidMount(){
        this.updateProducts();
    }

    updateProducts(){
        this.BrandService.getAllProducts()
        .then(this.updateProductsLength);
    }

    updateProductsLength=(products)=>{
        this.setState({
            productsLength:products.length
        })
    }

    viewAllClick=(event)=>{
        event.preventDefault();
        this.props.updateQuantity(this.state.productsLength);
    }

    

    render(){
        return(
            <a id="view_all" href="#" onClick={this.viewAllClick}>View All</a>
        )
    }
}
