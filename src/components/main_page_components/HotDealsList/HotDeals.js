import React, {Component} from 'react';
import './hot_deals.css';

export default class HotDeals extends Component {
    render(){
        return(
            <section className="hot_deals container">
                <div className="first_half half">
                    <div className="hot_deal hot_deal_big hot_deal_for_men">
                        <div className="hot_deal_label">
                            <p>hot deal</p>
                            <p>for men</p>
                        </div>
                    </div>
                    <div className="hot_deal hot_deal_little hot_deal_accesories">
                        <div className="hot_deal_label">
                            <p>LUXIROUS & trendy</p>
                            <p>ACCESORIES</p>
                        </div>
                    </div>
                </div>
                <div className="second_half half">
                    <div className="hot_deal hot_deal_little hot_deal_for_woman">
                        <div className="hot_deal_label">
                            <p>30% offer</p>
                            <p>women</p>
                        </div>    
                    </div>
                    <div className="hot_deal hot_deal_big hot_deal_for_kids">
                        <div className="hot_deal_label">
                            <p>new arrivals</p>
                            <p>FOR kids</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}