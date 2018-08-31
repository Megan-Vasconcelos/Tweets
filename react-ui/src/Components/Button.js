import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component {
   
    render() {
        return (
        <div className="images">
            <Link to={'/tweets/HillaryClinton'} >
                <img 
                src='/images/hillarypopart-mod.png'
                alt="Hillary Clinton button" 
                />
            </Link>
            <Link to={'/tweets/realDonaldTrump'} >
                <img 
                className="image2" 
                src='/images/donald-trump-pop-art-mod.png'
                alt="Donald Tump button" />            
            </Link>
        </div>
        )
    }
}


export default Button;