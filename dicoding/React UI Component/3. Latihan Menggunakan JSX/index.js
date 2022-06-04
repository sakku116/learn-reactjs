const root = ReactDOM.createRoot(document.querySelector('#root'));
const logo = 'dicoding-logo.png';

const element = (
    <div>
        <h1>Biodata Perusahaan</h1>
        <ul>
            <li>Nama: Dicoding Indonesia</li>
            <li>Bidang: Education</li>
            <li>Tagline: Decode Ideas, Discover Potential.</li>

            <img src={logo} alt="dicoding logo"/>
        </ul>
    </div>
);

root.render(element);