const root = ReactDOM.createRoot(document.querySelector('#root'));

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

function ContactItem ({name, tag}) {
    return (
        <div className="contactItem">
            <img src="./profile-placeholder.png" />
            <div className="contactItemBody">
                <h1 className="fullName">{name}</h1>
                <p className="username">{tag}</p>
            </div>
        </div>
    )
};

function Main () {
    const contacts = getData();

    return (
        <div id="main">
            <h1>Daftar Kontak</h1>
            <div id="contactListContainer">
                <ContactItem {...contacts[0]} />
                <ContactItem {...contacts[1]} />
                <ContactItem {...contacts[2]} />
            </div>
        </div>
    )
};

root.render(<Main />);