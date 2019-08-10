import React, { Component } from 'react'
import './App.css';
import KeyPad from "./components/KeyPad";
import CalResult from "./components/CalResult";

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      result: ""
    }
  }

totalCalculation = () => {
  try {
    this.setState({
      result: eval(this.state.result) || "" + ""
    })
  } catch (e) {
    this.setState({
      result: "Error"
    })
  }
}

  resetHandler = () => {
    this.setState({
      result: ""
    })
  }

  backspaceHandler = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }

  clickHandler = button => {
    if(button === "=")  {
      this.totalCalculation();
    } else if(button === "C") {
      this.resetHandler();
    } else if(button === "CE") {
      this.backspaceHandler();
    } else {
      this.setState({
        result: this.state.result + button
      });
    };
  };

  render() {
    return (
        <div className="container">
            <div className="calculator-body">
                <h1>Simple Calculator</h1>
                <CalResult result={this.state.result}/>
                <KeyPad clickHandler={this.clickHandler}/>
            </div>
        </div>
    );
  }
}
