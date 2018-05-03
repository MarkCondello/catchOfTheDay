import React from "react";
import { formatPrice } from '../helpers';

export default class Order extends React.Component{
    renderOrder = key =>{
        const fish = this.props.fishes[key];
        const count = this.props.orders[key];
        const isAvailable = fish.status === 'available';
        console.log(key, fish, count);

        if(!isAvailable){
         return <li key={key}>Sorry {fish ? fish.name : 'fish'} is not available..</li>
        }  
        return <li key={key}> 
            {count} lbs {fish.name}
            {formatPrice(count * fish.price)}
        </li>
    }

    render(){
        const orderIds = Object.keys(this.props.orders);
         const total = orderIds.reduce((prevTotal, key)=>{
            const fish = this.props.fishes[key];
            const count = this.props.orders[key];
            const isAvailable = fish && fish.status === 'available';
            if(isAvailable){
                return prevTotal + (count * fish.price);
            } else {
                return prevTotal;
            }
        }, 0);
        return(
            <div className="order-wrap">
                <h2>Order</h2>
                <ul className="order">
                    {orderIds.map(this.renderOrder)}
                </ul>
                <div className="total">
                    <strong>{`Total: ${formatPrice(total)}`}</strong>
                </div>
            </div>
        );
    }
}