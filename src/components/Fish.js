import React from "react";
import {formatPrice} from '../helpers';

export default class Fish extends React.Component{
    
    render(){
        {console.log(this.props.details.name)}
        const {image, name, price, desc , status} = this.props.details;
        return(
            <li className="menu-fish">
                <img src={image} alt={name} />
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button>ADD TO CART</button>
            </li>
        );
    }
}