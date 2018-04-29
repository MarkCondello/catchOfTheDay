import React from "react";
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';


export default class App extends React.Component{
    state = {
        fishes: {},
        order: {}
    }

    addFish = (fish) =>{
       // console.log("Adding a fish!", fish);
        //1. grab a copy of the current fish state
        const NewFish ={...this.state.fishes}
         //2. add our new fish to the fishes variable with a unique id eg `fish${Date.now()}`
        //below we are providing a unique name to newFish and adding the object fish to it.
        NewFish[`fish${Date.now()}`] = fish;
        //3. set the newFish object to state
        this.setState({fishes : NewFish});
    };

    loadSampleFishes = () =>{
        
        this.setState({fishes : sampleFishes});
        console.log("Load samples" );
    }

    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline = {"Fresh Seafood Market"} />
                 </div>
               
                <Order/>  
                <Inventory loadSampleFishes={this.loadSampleFishes} addFish={this.addFish}/>
            </div>
        );
    }
}