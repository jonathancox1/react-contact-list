import React from 'react';
import Form from './components/Form';
import ContactList from './components/ContactList';
import 'bootstrap/dist/css/bootstrap.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          name: 'Jon C',
          email: 'aoign@going.com',
          phone: '408-13r-1-235',
          state: 'Georgia',
          zip: '30318',
        },
        {
          name: 'Sarah O',
          email: 'sarah@s.com',
          phone: '208235',
          state: 'Florida',
          zip: '32025',
        },
        {
          name: 'Hunter B',
          email: 'hunty@h.com',
          phone: '280-255-1122',
          state: 'Bed',
          zip: '21325',
        }
      ]
    }
  }

  onFormSubmit = (data) => {
    console.log(data);
    // concat
    let newList = this.state.contacts.concat(data);
    // sort
    newList.sort((a, b) => a.name.localeCompare(b.name))
    // setstate
    this.setState({
      contacts: newList
    })
  }

  deleteContact = (index) => {
    this.setState({
      contacts: this.state.contacts.filter((x => x !== this.state.contacts[index]))
    })
  }

  updateContact = (index) => {
    // console.log(this.state.contacts[index])
    this.deleteContact(index);
    this.setState({ contactToUpdate: this.state.contacts[index] });
  }

  render() {
    return (
      <div className="App">
        <div className="col-md-8 mx-auto">
          <div className="row mt-5 p-5 border">
            <div className="col mx-auto">
              <Form appPropCall={this.onFormSubmit} contactToUpdate={this.state.contactToUpdate}></Form>
            </div>
            <div className="col mx-auto">
              <ContactList contactList={this.state.contacts} delete={this.deleteContact} update={this.updateContact}></ContactList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
