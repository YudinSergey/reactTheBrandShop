import React from 'react';
import './profitable_item.css'

export default function ProfitableItem(props){
    const {src, name, descr} = props;
    return(
        <div className="profitable_item">
            <div className="profitable_item_image">
                <img src={src} alt="image"></img>
            </div>
            <div className="content">
                <h2>{name}</h2>
                <p>{descr}</p>
            </div>
        </div>
    )
}