import React, {Component} from 'react';
import Logo from '../Logo';
import './about_company.css';

export default class AboutCompany extends Component{
    render(){
        return(
            <section className="about_company_block container">
                <div className="information_half">
                    <Logo/>
                    <p className="about_company_information">Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships. </p>
                    <p className="about_company_information">Efficiently plagiarize 24/365 action items and focused infomediaries.
            Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.</p>
                </div>
                <div className="navigation_half">
                    <ul>
                        <li>COMPANY</li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">How It Works</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <ul>
                        <li>INFORMATION</li>
                        <li><a href="#">Tearms & Condition</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">How to Buy</a></li>
                        <li><a href="#">How to Sell</a></li>
                        <li><a href="#">Promotion</a></li>
                    </ul>
                    <ul>
                        <li>SHOP CATEGORY</li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Child</a></li>
                        <li><a href="#">Apparel</a></li>
                        <li><a href="#">Brows All</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}