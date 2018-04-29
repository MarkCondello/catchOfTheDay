import React from "react";

export default class AddFishForm extends React.Component{
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    createFish = (event) =>{
        event.preventDefault();
        const fish = {
            name: this.nameRef.value.value,
            price: parseFloat(this.priceRef.value.value),
            status: this.statusRef.value.value,
            desc: this.descRef.value.value,
            image: this.imageRef.value.value,
         }
         this.props.addFish(fish);

        this.nameRef.value.value = "";
        this.priceRef.value.value = "";
        this.statusRef.value.value = "";
        this.descRef.value.value = "";
        this.imageRef.value.value = "";
      }

    render(){
        return(
            <form className="fish-edit" onSubmit={this.createFish}> 
                <input type="text" placeholder="First Name" name="name" ref={this.nameRef}/>
                <input type="text" placeholder="Fish Price" name="price" ref={this.priceRef}/>
                <select name="status" ref={this.statusRef}>
                    <option name="available">Fresh!</option>
                    <option name="unavailable">Sold Out</option>
                </select>
                <textarea  placeholder="Fish Desc" name="desc" ref={this.descRef}/>
                <input type="image" placeholder="Fish Image" name="image" ref={this.imageRef}/>  
                <button type="submit">+ ADD FISH</button> 
            </form>
        );
    }
}