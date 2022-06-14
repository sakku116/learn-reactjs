import React from 'react';
import './style.css'

/*
untuk menggunakan file relative untuk keperluan render html sebaiknya import melalui js.
karena jika <img src="./relative-path" /> akan error karena react merender component kedalam
root di html. jadi relative-pathnya dimulai dari file index.htmlnya berada
*/
const img = require('./profile-placeholder.png')

function ContactItem ({id, name, tag, onDelete}) {
    return (
        <div className="contactItem card">
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
            contacts: [
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
            ],
            name: '',
            tag: '',
        };
        
        this.onNameChangeEvent = this.onNameChangeEvent.bind(this);
        this.onTagChangeEvent = this.onTagChangeEvent.bind(this);
        this.onSubmitContactEvent = this.onSubmitContactEvent.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    onNameChangeEvent(event) {
        this.setState(
            {
                name: event.target.value
            }
        )
    }

    onTagChangeEvent(event) {
        this.setState(
            {
                tag: event.target.value
            }
        )
    }

    onSubmitContactEvent(event) {
        event.preventDefault();
        
        // mendapatkan state 'name' dan 'tag'
        var name = this.state.name;
        var tag = this.state.tag;

        if (this.state.name !== "" && this.state.tag !== '') {

            // menambah value dari state 'contacts'
            this.setState(
                {
                    contacts: [
                        ...this.state.contacts,
                        {
                            id: +new Date(),
                            name,
                            tag,
                        }
                    ],
                }
            );
            /* ...this.state.contacts merupakan semua objek dari value state 'contacts' pada awalnya. 
            karena kita akan menambah objek lagi setelah objek objek awal, jadi objek objek awal
            juga harus di include. jika tidak di include, maka data awal hanya akan diganti */

            // mereset value input
            this.setState(
                {
                    name: '',
                    tag: '',
                }
            )
            /* karena data di input form di control oleh state react. maka untuk meresetnya juga harus menggunakan state */
        }
    }

    deleteItem(id) {
        // menghapus list jika listitem.id tidak sama dengan argument id dengan .filter()
        const contacts = this.state.contacts.filter(contact => contact.id !== id);
        this.setState({ contacts });
    }

    render() {
        return (
            <div id="main">
                <h1>Tambah Kontak</h1>
                <form id="addContactContainer" class="card" onSubmit={this.onSubmitContactEvent}>
                    <input type="text" placholder="Nama" value={this.state.name} onChange={this.onNameChangeEvent}/>
                    <input type="text" placholder="Tag" value={this.state.tag} onChange={this.onTagChangeEvent}/>
                    <button>Tambah Kontak</button>
                </form>

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