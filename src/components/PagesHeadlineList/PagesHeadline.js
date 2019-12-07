import React from 'react';
import './pages_headline.css';

export default function PagesHeadline (props){
    const {headline, category} = props;
    return(
        <section className="page_headline">
            <div className="page_headline_container container">
                <p className="headline">{headline}</p>
                <p className="path">Home/ {category}/ <span>New Arrivals</span></p>
            </div>
        </section>
    );
}