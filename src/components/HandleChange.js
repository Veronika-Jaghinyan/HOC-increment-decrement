import React from "react";
import './Button.css';
import HocFunction from "./HocFunction.js";

class HandleChange extends React.Component {

    render() {
        const {increment, count, decrement} = this.props;
        return (
            <div>
                <button className="increment" onClick = {increment}>+</button>
                <span className="count">{count}</span>
                <button className="decrement" onClick = {decrement}>-</button>
            </div>
        )
    }
}

export default HocFunction(HandleChange);
