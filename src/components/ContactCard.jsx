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

    deleteContactCard = () => {
        this.props.delete(this.props.id);
    }

    render() {
        let innerClass = 'd-none';
        if (this.state.hidden === false) {
            innerClass = '';
        }
        return (
            <>
                <div>
                    <button onClick={this.toggle}>Full Contact</button><button onClick={this.deleteContactCard}>X</button>
                </div>
                <div className={innerClass}>
                    email: {this.props.contact.email}
                    <br />
                    phone: {this.props.contact.phone}
                    <br />
                    zip code: {this.props.contact.zip}
                    <br />
                    state: {this.props.contact.state}
                </div>
            </>
        )
    }
}
