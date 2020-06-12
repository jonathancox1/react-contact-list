import React, { Component } from 'react'
import ContactCard from './ContactCard'

export default class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        }
    }

    getDe() {
        this.setState({ contacts: this.state.contacts.concat(this.props.contactList) })
    }

    render() {
        return (
            <div>
                {this.props.contactList.map((contact, index) => {
                    return (
                        <>
                            <ContactCard contact={contact} key={index}></ContactCard>
                            {contact.name}
                        </>
                    )
                })}
            </div>
        )
    }
}
