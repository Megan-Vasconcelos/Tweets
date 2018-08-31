import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Button extends Component {
    constructor() {
        super()
        this.state = {
            toggle : false
        }

    }

    click = evt => this.setState({toggle: !this.state.toggle})

    render() {
        return (
        <div>
            <Link to={'/tweets/' + (this.state.toggle ? 'realDonaldTrump' : 'HillaryClinton')} >

            <button onClick={this.click}> 
                Switch View
            </button>
            </Link>
        </div>
        )
    }
}


export default Button;