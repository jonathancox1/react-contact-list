import React, { Component } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import ContactCard from './ContactCard'
import FavoriteCard from './FavoriteCard'

export default class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            favorites: [],
            favsDisplay: false,
            search: '',
        }
    }

    componentDidMount = () => {
        this.setState({
            contacts: this.props.contactList
        })
    }


    removeContact = (index) => {
        this.props.delete(index);
        this.setState({
            search: '',
        })
    }

    updateContact = (index) => {
        this.props.update(index);
        this.setState({
            search: '',
        })
    }

    favorite = (index) => {
        let newFav = this.state.favorites.concat(index)
        this.setState({ favorites: newFav, search: '' })

    }

    favoriteRemove = (id) => {
        console.log(id);
        let updatedFavorites = this.state.favorites.filter((x => x !== this.state.favorites[id]));
        console.log(updatedFavorites)
        this.setState({
            favorites: updatedFavorites
        })
    }

    toggle = () => {
        this.setState({ favsDisplay: !this.state.favsDisplay })
    }

    searchChange = (e) => {
        e.preventDefault();
        this.setState({
            search: e.target.value
        })
        let searchResults = this.props.contactList.filter(contact => { return contact.name.includes(e.target.value) })
        this.setState({
            searchResults: searchResults
        })
    }

    searchResults = (e) => {
        e.preventDefault();
        console.log('test')
        this.setState({
            search: '',
            searchResults: []
        })
    }


    render() {
        let innerClass = 'd-none';
        let showFavs = '';
        if (this.state.favsDisplay === false) {
            innerClass = '';
            showFavs = 'd-none';
        }
        return (
            <div>
                <div className="row">
                    <div className="col-8">
                        <h2>
                            {this.state.favsDisplay ? <div>Favorite Contacts</div> : <div>Contacts</div>}
                        </h2>
                        <button className="mb-1 btn btn-sm btn-outline-secondary" onClick={this.toggle}>
                            {this.state.favsDisplay ? 'Back' : 'Favorites'}
                        </button>
                        <div className="row" className={innerClass}>
                            <form onSubmit={this.searchResults}>
                                <InputGroup size="sm" className="mb-3">
                                    <InputGroup.Prepend>
                                        <Button variant="outline-secondary">Clear</Button>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Search"
                                        value={this.state.search}
                                        onChange={this.searchChange}
                                    />
                                </InputGroup>
                            </form>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={showFavs}>
                    {this.state.favorites.map((contact, index) => {
                        return (
                            <>
                                <FavoriteCard contact={contact} key={index} id={index} favorite={this.favoriteRemove}></FavoriteCard>
                                <hr />
                            </>
                        )
                    })}
                </div>

                <div className={innerClass}>
                    {this.state.search !== '' ? this.state.searchResults.map((contact, index) => {
                        return (
                            <>
                                <ContactCard contact={contact} key={index} id={index} delete={this.removeContact} update={this.updateContact} favorite={this.favorite}></ContactCard>
                                <hr />
                            </>
                        )
                    }) :
                        this.props.contactList.map((contact, index) => {
                            return (
                                <>
                                    <ContactCard contact={contact} key={index} id={index} delete={this.removeContact} update={this.updateContact} favorite={this.favorite}></ContactCard>
                                    <hr />
                                </>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
