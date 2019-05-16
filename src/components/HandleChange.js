import React from "react";
import './Button.css';
import HocFunction from "./HocFunction.js";

class HandleChange extends React.Component {

    render() {
        const {increment, count, decrement} = this.props;
        return (
            <div>
                <button class="increment" onClick = {increment}>+</button>
                <span class="count">{count}</span>
                <button class="decrement" onClick = {decrement}>-</button>
            </div>
        )
    }
}

export default HocFunction(HandleChange);
