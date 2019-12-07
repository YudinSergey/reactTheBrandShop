import React, {Component} from 'react';
import './main_page_picture.css';

export default class MainPagePicture extends Component {
    render(){
        return(
            <div className="main_page_picture">
                <div className="main_page_picture_container container">
                    <div className="advertising_text">
                        <div className="decorate_element"></div>
                        <div className="text">
                            <p>The brand</p>
                            <p>OF LUXERIOUS <span>FASHION</span></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}