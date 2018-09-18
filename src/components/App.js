import React from "react";
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

import base from "../base";

export default class App extends React.Component{
    state = {
        fishes: {},
        order: {}
    }

    componentDidMount(){
        //get the current store name
        const {params} = this.props.match;
        //re-instate local storage
        const localStorageRef = localStorage.getItem(params.storeId)
        //console.log(JSON.parse(localStorageRef));
        if(localStorageRef){
            this.setState({order: JSON.parse(localStorageRef)});
        }
        //create firebase object which stores our data
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
     }

     componentDidUpdate(){
         //set the local store to the storeName and the order state object
         localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
     }

    //avoid memory leaks if this comonent is removed
    componentWillUnmount(){
         base.removeBinding(this.ref);
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

    updateFish = (key, updatedFish) =>{
        //grab the current fish state
        const newFishes = {...this.state.fishes};
        //updated state value
        newFishes[key] = updatedFish;
        //set the state
        this.setState({fishes: newFishes});
    };

    loadSampleFishes = () =>{   
        this.setState({fishes : sampleFishes});
        //console.log("Load samples" );
    };

    addToOrder = (key) =>{
        //1. grab a copy of state
        const newOrder = {...this.state.order}
        //2. Either add to order or update in our order eg increment
        newOrder[key] = newOrder[key] + 1 || 1;
        //3. Call setState to udpate state object
        this.setState({order: newOrder})
    };

    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline = {"Fresh Seafood Market"} />
                    {Object.keys(this.state.fishes).map( item => 
                    <Fish 
                        key={item} 
                        index={item}
                        details={this.state.fishes[item]} 
                        addToOrder={this.addToOrder}
                    />)}
                </div> 
                <div>  
                    <Order 
                        fishes = {this.state.fishes}
                        orders = {this.state.order}
                    />  
                </div> 
                <Inventory 
                    loadSampleFishes={this.loadSampleFishes}
                    addFish={this.addFish} 
                    fishes={this.state.fishes}
                    updateFish={this.updateFish}
                />
            </div>
        );
    }
}