import {Component} from "react";

export default class Form extends Component{

    state = {
        firstname: "",
        secondname: "",
    };
    handleChage = (event) => {
       this.setState({
        firstname: event.target.value
       });
       console.log(this.state.firstname)
    };
    handleLastNameChage = (event) =>{
        this.setState({
            secondname: event.target.value
        });
        console.log(this.state.secondname);
    };

    handleSubmit = (event) =>{
        event.preventDefault();
        console.log({
            fname: this.state.firstname,
            lname: this.state.secondname
        });
    };

    render(){
        return (
            
        <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.firstname} onChange={this.handleChage} />
            <input type="text" value={this.state.secondname} onChange={this.handleLastNameChage} />
            <button type="submit" >Submit</button>
        </form>
        </div>
        );
    }
}