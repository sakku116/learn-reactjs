const root = ReactDOM.createRoot(document.querySelector('#root'));

function InstagramProfile(props) {
    const name = props.name;
    const username = props.username;
    const bio = props.bio;
    const isVerified = props.isVerified;
    // atau menggunakan {name, username, bio, isVerified} sebagai parameter dari func

    return (
        <div className="container">
            <dl>
                <dt>Name: {name}</dt>
                <dt>Username: {username}</dt>
                <dt>Bio: {bio}</dt>
                <dt>Verified: {isVerified ? 'yes' : 'no'}</dt>
            </dl>
        </div>
    )
};

// menggunakan children untuk pengganti props
function SayHello({children}) {
    return (
        <p>
            Hello, {children}!
        </p>
    )
};

const element = (
    <div>
        <InstagramProfile 
            name="Dicoding Indonesia"
            username="dicoding"
            bio="Bangung karirmu sebagai developer profesional"
            isVerified
        />

        <SayHello>Dicoding</SayHello>
    </div>
    // menggunakan children sebagai parameter berbeda dengan syntax diatas. harus menggunakan closing tags 
)
root.render(element);