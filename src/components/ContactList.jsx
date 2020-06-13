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


    render() {
        return (
            <div>
                {this.props.contactList.sort((a, b) => a.name.localeCompare(b.name)).map((contact, index) => {
                    return (
                        <>
                            <ContactCard contact={contact} key={index} id={index} delete={this.removeContact}></ContactCard>
                            <hr />
                        </>
                    )
                })}
            </div>
        )
    }
}
