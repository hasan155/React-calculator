import React, { Component } from 'react'

export default class KeyPad extends Component {
    render() {
        const { clickHandler } = this.props;
        return (
            <div className="button">
                <button name="(" onClick={e => clickHandler(e.target.name)}>(</button>
                <button name="CE" onClick={e => clickHandler(e.target.name)}>CE</button>
                <button name=")" onClick={e => clickHandler(e.target.name)}>)</button>
                <button name="C" onClick={e => clickHandler(e.target.name)}>C</button><br/>


                <button name="1" onClick={e =>clickHandler(e.target.name)}>1</button>
                <button name="2" onClick={e => clickHandler(e.target.name)}>2</button>
                <button name="3" onClick={e => clickHandler(e.target.name)}>3</button>
                <button name="+" onClick={e => clickHandler(e.target.name)}>+</button><br/>


                <button name="4" onClick={e => clickHandler(e.target.name)}>4</button>
                <button name="5" onClick={e => clickHandler(e.target.name)}>5</button>
                <button name="6" onClick={e => clickHandler(e.target.name)}>6</button>
                <button name="-" onClick={e => clickHandler(e.target.name)}>-</button><br/>

                <button name="7" onClick={e => clickHandler(e.target.name)}>7</button>
                <button name="8" onClick={e => clickHandler(e.target.name)}>8</button>
                <button name="9" onClick={e => clickHandler(e.target.name)}>9</button>
                <button name="*" onClick={e => clickHandler(e.target.name)}>x</button><br/>


                <button name="." onClick={e => clickHandler(e.target.name)}>.</button>
                <button name="0" onClick={e => clickHandler(e.target.name)}>0</button>
                <button name="=" onClick={e => clickHandler(e.target.name)}>=</button>
                <button name="/" onClick={e => clickHandler(e.target.name)}>÷</button><br/>
            </div>
        );
    }
}