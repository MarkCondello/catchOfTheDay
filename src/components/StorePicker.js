import React from "react";
import { getFunName} from "../helpers";

export default class StorePicker extends React.Component{
    myInput = React.createRef();
    goToStore = (ev) => {
        ev.preventDefault();
        // get the input entered
       let storeName = this.myInput.value.value;
        //change the page to /store. input entered
        this.props.history.push(`/store/${storeName}`);
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