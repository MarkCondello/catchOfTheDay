import React from "react";
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';


export default class App extends React.Component{
    state = {
        fishes: {},
        order: {}
    }

    addFish = (fish) =>{
       // console.log("Adding a fish!", fish);
        //1. grab a copy of the current fish state
        const fishes ={...this.state.fishes}
         //2. add our new fish to the fishes variable with a unique id eg `fish${Date.now()}`
        //below we are providing a unique name to newFish and adding the object fish to it.
         fishes[`fish${Date.now()}`] = fish;
        //3. set the newFish object to state
        this.setState({fishes : fishes});
    };

    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline = {"Fresh Seafood Market"} />
                 </div>
               
                <Order/>  
                <Inventory addFish={this.addFish}/>
            </div>
        );
    }
}