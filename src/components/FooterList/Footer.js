import React, {Component} from 'react';
import './footer.css'

export default class Footer extends Component {
    render(){
        return(
            <footer className="footer">
                <div className="footer_container container">
                    <p className="footer_copyright">© 2019  Brand  All Rights Reserved.</p>
                    <div className="socials">
                        <a href="#" className="social fb"></a>
                        <a href="#" className="social twitter"></a>
                        <a href="#" className="social jo"></a>
                        <a href="#" className="social p"></a>
                        <a href="#" className="social google_plus"></a>
                    </div>
                </div>
            </footer>
        )
    }
}