import React, { Component } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap';

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: '',
            state: '',
            zip: '',
        }

    }

    handleInputChange = (e) => {
        e.preventDefault();
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.appPropCall(this.state);
        this.setState({
            name: '',
            email: '',
            phone: '',
            state: '',
            zip: '',
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.contactToUpdate !== this.props.contactToUpdate && this.props.contactToUpdate.name !== this.state.name) {
            console.log(prevProps)
            let contact = this.props.contactToUpdate
            this.setState({
                name: contact.name,
                email: contact.email,
                phone: contact.phone,
                state: contact.zip,
                zip: contact.zip
            })
        }
    }

    render() {
        return (
            <div className="row" >
                <form onSubmit={this.onSubmit} contactFormPopulate={this.contactToUpdate}>
                    <h5>New Contact</h5>
                    {this.props.update}
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="name" name="name">Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            name="name"
                            onChange={this.handleInputChange}
                            value={this.state.name}
                        />
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="email" name="email">Email</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            name="email"
                            onChange={this.handleInputChange}
                            value={this.state.email}
                        />
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="phone" name="phone">Phone Number</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            name="phone"
                            onChange={this.handleInputChange}
                            value={this.state.phone}
                        />
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="state">State</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            name="state"
                            onChange={this.handleInputChange}
                            value={this.state.state}
                        />
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="zip">Zip</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            name="zip"
                            onChange={this.handleInputChange}
                            value={this.state.zip}
                        />
                    </InputGroup>

                    <button className="btn btn-outline-secondary" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
