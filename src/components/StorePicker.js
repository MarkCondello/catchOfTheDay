import React from "react";
import { getFunName} from "../helpers";

export default class StorePicker extends React.Component{
    myInput = React.createRef();
    goToStore = (ev) => {
        ev.preventDefault();
        // get the input entered
       let val = this.myInput.value.value;
        //change the page to /store. input entered
        console.log(  this.myInput.value.value);
    }

    render(){
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                {/* Comments within JSX land...*/}
                <input 
                type="text" 
                required 
                placeholder="Store Name" 
                defaultValue={getFunName()}
                ref={ this.myInput}
                />
                <button type="submit" >Visit Store &#8594;</button>
            </form>
         );
     }
}