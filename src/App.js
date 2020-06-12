import React from 'react';
import Form from './components/Form';
import ContactList from './components/ContactList';
import 'bootstrap/dist/css/bootstrap.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [
      ]
    }
  }

  onFormSubmit = (data) => {
    this.setState({
      contacts: this.state.contacts.concat(data)
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
            <ContactList contactList={this.state.contacts}></ContactList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
