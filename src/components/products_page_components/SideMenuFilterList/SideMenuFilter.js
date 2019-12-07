import React, {Component} from 'react';
import BrandService from '../../../services/brandService';
import './side_menu_filter.css'

export default class SideMenuFilter extends Component {
    BrandService = new BrandService();
    state={
        categoryes:[],
        brands:[],
        designers:[]
    }

    componentDidMount(){
        this.updateCategoryes();
        this.updateBrands();
        this.updateDesignres();
    }

    updateCategoryes(){
        this.BrandService.getAllCategoryes()
        .then(this.onCategoryesLoaded);
    }

    onCategoryesLoaded = (categoryes)=>{
        this.setState({
            categoryes
        });
        console.log(this.state.categoryes);
    }

    updateBrands = () =>{
        this.BrandService.getAllBrands()
        .then(this.onBrandsLoaded);
    }

    onBrandsLoaded = (brands) =>{
        this.setState({
            brands
        });
        console.log(this.state.brands);
    }

    updateDesignres = () =>{
        this.BrandService.getAllDesigners()
        .then(this.onDesignersLoaded);
    }

    onDesignersLoaded = (designers) =>{
        this.setState({
            designers
        });
        console.log(this.state.designers);
    }

    renderItems = (arr) =>{
        return(
            arr.map(item=>{
                const {id, name} = item;
                return(
                    <li key={id}><a href="#">{name}</a></li>
                )
            })
        )
    }

    showCategory = (event) =>{
        event.preventDefault();
        document.querySelector('.category_list').style.display="block";
        document.querySelector('.category_filter').classList.add('active_side_menu_filter');
    }

    hideCategory = () =>{
        document.querySelector('.category_list').style.display="none";
        document.querySelector('.category_filter').classList.remove('active_side_menu_filter');
    }

    showBrands = (event) =>{
        event.preventDefault();
        document.querySelector('.brand_list').style.display="block";
        document.querySelector('.brand_filter').classList.add('active_side_menu_filter');
    }

    hideBrands = () =>{
        document.querySelector('.brand_list').style.display="none";
        document.querySelector('.brand_filter').classList.remove('active_side_menu_filter');
    }

    showDesigners = (event) =>{
        event.preventDefault();
        document.querySelector('.designer_list').style.display="block";
        document.querySelector('.designer_filter').classList.add('active_side_menu_filter');
    }

    hideDesigners = () =>{
        document.querySelector('.designer_list').style.display="none";
        document.querySelector('.designer_filter').classList.remove('active_side_menu_filter');
    }

    render(){
        const {categoryes, brands, designers} = this.state;
        const categoryItems = this.renderItems(categoryes);
        const brandItems = this.renderItems(brands);
        const designerItems = this.renderItems(designers);
        return(
            <div className="side_menu">
                <div className="category_filter_block filter_block">
                    <a href="#" className="category_filter side_menu_filter" onClick={this.showCategory}>
                    <div className="decorate_element"></div>
                    Category
                    </a>
                    <ul className="category_list filter_list" onMouseLeave={this.hideCategory}>
                        {categoryItems}
                    </ul>
                </div>
                <div className="brand_filter_block filter_block">
                    <a href="#" className="brand_filter side_menu_filter" onClick={this.showBrands}>
                    <div className="decorate_element"></div>
                    Brand
                    </a>
                    <ul className="brand_list filter_list" onMouseLeave={this.hideBrands}>
                        {brandItems}
                    </ul>
                </div>
                <div className="designer_filter_block filter_block" onClick={this.showDesigners}>
                    <a href="#" className="designer_filter side_menu_filter">
                    <div className="decorate_element"></div>
                    Designer
                    </a>
                    <ul className="designer_list filter_list" onMouseLeave={this.hideDesigners}>
                        {designerItems}
                    </ul>
                </div>
            </div>
        )
    }
}