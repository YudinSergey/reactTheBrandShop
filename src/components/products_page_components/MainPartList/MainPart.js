import React, {Component} from 'react';
import SideMenuFilter from '../SideMenuFilterList/SideMenuFilter';
import TopFilters from '../TopFiltersList/TopFilter';
import Products from '../../ProductsList/Products';
import BrandService from '../../../services/brandService';
import './main_part.css';
import Paginator from '../PaginatorList/Paginator';
import ViewAllProducts from '../ViewAllProductsList/ViewAllProducts';

export default class MainPart extends Component {
    BrandService = new BrandService();
    state={
        quantityValue: 9,
        minPrice:0,
        maxPrice:800,
        activePage:1,
        pagesCount:0,
    }

    componentDidMount(){
        this.updateProducts();
    }

    onProductPagesStyle = () =>{
        document.querySelector(".products_section").style.paddingTop="48px";
        document.querySelector(".products_section").style.marginBottom="4px";
        for(let i=0; i<document.querySelector(".products_section").children.length; i++){
            document.querySelector(".products_section").children[i].style.width="31%";
        }
    }

    updateProducts(){
        this.BrandService.getAllProducts()
        .then(this.onPagesCount);
    }

    onPagesCount=(products)=>{
        let newProducts = [];
        for(let i=0; i<products.length; i++){
            if(+products[i].price>=this.state.minPrice&&+products[i].price<=this.state.maxPrice){
                newProducts.push(products[i]);
            }
        }
        let pagesCount=Math.ceil(+(newProducts.length)/(+this.state.quantityValue));
        console.log(+pagesCount);
        this.setState({
            pagesCount:pagesCount
        })
        return(pagesCount);
    }

    updateActivePage = (pageNumber) =>{
        console.log("PageNumber:" + pageNumber);
        this.setState({
            activePage:pageNumber
        })
        console.log("active page:" + this.state.activePage);
    }

    updateQuantity = (newQuantity) =>{
        console.log(newQuantity);
        console.log(this.state.quantityValue);
        this.setState({
            quantityValue:newQuantity
        });
        this.updateProducts();
        this.updateActivePage(1);
        console.log(this.state.quantityValue);
    }

    updateMinPrice = (newMinPrice) =>{
        this.setState({
            minPrice:newMinPrice
        });
        this.updateProducts();
        this.updateActivePage(1);
        console.log("MinPrice =" + this.state.minPrice);
    }

    updateMaxPrice = (newMaxPrice) =>{
        this.setState({
            maxPrice:newMaxPrice
        });
        this.updateProducts();
        this.updateActivePage(1);
        console.log(this.state.maxPrice);
    }

    render(){
        console.log(this.state.quantityValue);
        console.log("pagesCount" + this.state.pagesCount);
        return(
            <main className="main_part" onLoad={this.onProductPagesStyle}>
                <div className="main_part_container container">
                    <SideMenuFilter/>
                    <div className="top_filters_and_products">
                        <TopFilters updateQuantity = {this.updateQuantity} updateMinPrice = {this.updateMinPrice} updateMaxPrice = {this.updateMaxPrice}/>
                        <Products quantity={this.state.quantityValue} minPrice={this.state.minPrice} maxPrice = {this.state.maxPrice} onPagesCount={this.onPagesCount} activePage={this.state.activePage}/>
                        <div class="paginator_and_view_all_button">
                            <Paginator pagesCount = {this.state.pagesCount} updateActivePage = {this.updateActivePage}/>
                            <ViewAllProducts updateQuantity = {this.updateQuantity}/>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}