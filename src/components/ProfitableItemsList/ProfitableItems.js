import React, {Component} from 'react';
import ProfitableItem from '../ProfitableItemList/ProfitableItem';
import './profitable_items.css';

export default class ProfitableItems extends Component {
    render(){
        return(
            <section className="profitable_items">
               <ProfitableItem name="Free Delivery" descr="Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models." src="img/free_delivery_img.png"/>
               <ProfitableItem name="Sales & discounts" descr="Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models." src="img/sales_img.png"/> 
               <ProfitableItem name="Quality assurance" descr="Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models." src="img/quality_assurance_img.png"/> 
            </section>
        );
    }
}