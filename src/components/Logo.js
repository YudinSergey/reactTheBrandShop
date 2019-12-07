import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Logo extends Component{
    render(){
        return(
            <Link to='/' className="logo">
                <img src="img/logo.png" alt="Логотип"></img>
                <p>bran</p>
                <p>d</p>
            </Link>
        )
    }
}