import React from "react";

export default class StorePicker extends React.Component{
    render(){
        return (
            <form className="store-selector">
                <h2>Please Enter A Store</h2>
                {/* Comments within JSX land...*/}
                <input type="text" placeholder="Store Name"/>
                <button type="submit">Visit Store &#8594;</button>
            </form>
         );
     }
}