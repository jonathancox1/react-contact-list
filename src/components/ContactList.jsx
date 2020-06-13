import React, { Component } from 'react'
import ContactCard from './ContactCard'

export default class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        }
    }


    removeContact = (index) => {
        this.props.delete(index);
    }

    updateContact = (index) => {
        this.props.update(index);
    }


    render() {
        return (
            <div>
                <h2>Contacts</h2>
                <hr />

                {this.props.contactList.map((contact, index) => {
                    return (
                        <>
                            <ContactCard contact={contact} key={index} id={index} delete={this.removeContact} update={this.updateContact}></ContactCard>
                            <hr />
                        </>
                    )
                })}
            </div>
        )
    }
}
