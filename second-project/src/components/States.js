import { Component } from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            counter: 0,
        };
    }

    increament () {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement(){
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render(){
        
        return (
        <>
        <h3>Count value is: {this.state.counter}</h3>
        <button onClick={() => this.increament()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>

        </>
        )
    }
}

export default Counter;