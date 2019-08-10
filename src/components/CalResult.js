import React, { Component } from 'react'

export default class CalResult extends Component {
    render() {
        let {result} = this.props;
        return (
            <div className="result">
                <h1>{result}</h1>
            </div>
        )
    }
}