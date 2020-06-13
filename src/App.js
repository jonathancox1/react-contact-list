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
    this.setState({
      contacts: this.state.contacts.concat(data)
    })
  }

  deleteContact = (index) => {
    this.setState({
      contacts: this.state.contacts.filter((x => x !== this.state.contacts[index]))
    })
  }

  render() {
    return (
      <div className="App">
        <div className="row m-5">
          <div className="col-md-6">
            <Form appPropCall={this.onFormSubmit}></Form>
          </div>
          <div className="col-md-6">
            <h2>Contacts</h2>
            <hr />
            <ContactList contactList={this.state.contacts} delete={this.deleteContact}></ContactList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
