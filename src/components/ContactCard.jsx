import React, { Component } from 'react'

export default class ContactCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true
        }
    }

    toggle = () => {
        this.setState({ hidden: !this.state.hidden })
    }

    render() {
        let innerClass = 'd-none';
        if (this.state.hidden === false) {
            innerClass = '';
        }
        return (
            <>
                <div className={innerClass}>
                    {this.props.contact.name}
                    {this.props.contact.email}
                    {this.props.contact.phone}
                    {this.props.contact.zip}
                    {this.props.contact.state}
                </div>
                <div>
                    <button onClick={this.toggle}>Full Contact</button>
                </div>
            </>
        )
    }
}
