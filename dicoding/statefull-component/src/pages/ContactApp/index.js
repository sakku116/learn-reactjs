import React from 'react';
import './style.css'

/*
untuk menggunakan file relative untuk keperluan render html sebaiknya import melalui js.
karena jika <img src="./relative-path" /> akan error karena react merender component kedalam
root di html. jadi relative-pathnya dimulai dari file index.htmlnya berada
*/
const img = require('./profile-placeholder.png')

const getData = () => {
    return [
        {
            id: 1,
            name: 'Dimas Saputra',
            tag: 'dimasmds',
        },
        {
            id: 2,
            name: 'Arif Faizin',
            tag: 'arifaizin',
        },
        {
            id: 3,
            name: 'Rahmat Fajri',
            tag: 'rfajri27',
        },
    ]
};

function ContactItem ({id, name, tag, onDelete}) {
    return (
        <div className="contactItem">
            <img src={img} />
            <div className="contactItemBody">
                <h1 className="fullName">{name}</h1>
                <p className="username">{tag}</p>
            </div>
            <button onClick={ () => {onDelete(id)} }>Delete</button>
        </div>
    )
};

class ContactApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: getData()
        };
        
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(id) {
        // menghapus list jika listitem.id tidak sama dengan argument id dengan .filter()
        const contacts = this.state.contacts.filter(contact => contact.id !== id);
        this.setState({ contacts });
    }

    render() {
        return (
            <div id="main">
                <h1>Daftar Kontak</h1>
                <div id="contactListContainer">
                {
                    this.state.contacts.map((contact) => (
                        <ContactItem 
                        key={contact.id}
                        id={contact.id}
                        onDelete={this.deleteItem}
                        {...contact} />
                    ))
                }
                </div>
            </div>
        )
    }
}

export default ContactApp;