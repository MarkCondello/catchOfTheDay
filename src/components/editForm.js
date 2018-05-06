import React from 'react';

class editForm extends React.Component{
    handleChange = (event) => {
        console.log(event.currentTarget.value,  this.props.index );
        //update that fish
        const updateFish = {
             ...this.props.fish,
            [event.currentTarget.name] : event.currentTarget.value
        }
        //method below is passed down from App.js
         this.props.updateFish(this.props.index, updateFish);
    };

    render() {
        return (
            <div className="fish-edit">
                <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} />
                <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price} />
                <select type="text" name="status" onChange={this.handleChange} value={this.props.fish.status}>
                    <option name="available">Fresh!</option>
                    <option name="unavailable">Sold Out</option>
                </select>   
                <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc}/> 
                <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image} />
            </div>
         );
    }
    
}

export default editForm;