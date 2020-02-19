import React, { Component } from 'react'

export default class main extends Component {
    constructor(props) {
        super(props)
        // State
        this.state = {
        }
    }

    // Before render
    componentDidMount = async() => {

    }

    // Render elements
    render() {
        return (
            <div className="main-div" style={{ fontFamily: "regular" }}>
                <a>DJA</a>
            </div>
        )
    }
}
