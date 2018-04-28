import React from "react";
import { getFunName} from "../helpers";

export default class StorePicker extends React.Component{
    render(){
        return (
            <form className="store-selector">
                <h2>Please Enter A Store</h2>
                {/* Comments within JSX land...*/}
                <input type="text" placeholder="Store Name" defaultValue={getFunName()}/>
                <button type="submit">Visit Store &#8594;</button>
            </form>
         );
     }
}