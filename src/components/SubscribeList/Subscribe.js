import React, {Component} from 'react';
import './subscribe.css';

export default class Subscribe extends Component{
    render(){
        return(
            <section className="subscribe_block">
                <div className="subscribe_block_background"></div>
                <div className="subscribe_container container">
                    <div className="half_to_comment">
                        <div className="comment">
                            <img className="photo" src="img/autor_photo.png" alt="avatar"></img>
                            <div className="comment_text">
                                <p className="comment_content">“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                                a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
                                <p className="author_name">Bin Burhan</p>
                                <p className="author_from">Dhaka, Bd</p>
                            </div>
                        </div>
                        <div className="slider">
                            <a href="#" className="slider_item"></a>
                            <a href="#" className="slider_item active_item"></a>
                            <a href="#" className="slider_item"></a>
                        </div>
                    </div>
                    <div className="half_to_subscribe_field">
                        <div className="half_to_subscribe_field_headline">
                            <h4>Subscribe</h4>
                            <p>FOR OUR NEWLETTER AND PROMOTION</p>
                        </div>
                        <div className="subscribe_field">
                            <input type="text" placeholder="Enter Your Email"></input>
                            <a href="#" className="subscribe_button button">Subscribe</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}