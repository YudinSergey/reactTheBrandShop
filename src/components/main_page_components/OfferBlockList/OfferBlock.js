import React, {Component} from 'react';
import ProfitableItems from '../../ProfitableItemsList/ProfitableItems';
import './offer_block.css';

export default class OfferBlock extends Component {
    render(){
        return(
            <section className="offer_block container">
                <div className="title_part">
                    <div className="title_part_background_block"></div>
                    <p>30%<span>offer</span></p>
                    <p>for women</p>
                </div>
                <ProfitableItems/>
            </section>
        )
    }
}