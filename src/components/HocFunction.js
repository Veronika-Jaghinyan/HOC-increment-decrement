import React from "react";

const HocFunction = CurrentComponent => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                count: 0,
            };
        }

        increment = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 };
            });
        };

        decrement = () => {
            this.setState(prevState => {
                return { count: prevState.count - 1 };
            });
        };

        render() {
            return (
                <CurrentComponent count={this.state.count} increment={this.increment} decrement={this.decrement}/>
            );
        }
    }
    return NewComponent;
};

export default HocFunction;
