import React from 'react';

class FormApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            gender: ''
        };

        this.onNameChangeEvent = this.onNameChangeEvent.bind(this);
        this.onEmailChangeEvent = this.onEmailChangeEvent.bind(this);
        this.onGenderChangeEvent = this.onGenderChangeEvent.bind(this);
        this.onSubmitEvent = this.onSubmitEvent.bind(this);
    }
    
    onNameChangeEvent(event) {
        this.setState((prevState) => {
        return {
            name: event.target.value
        };
        });
    }
    
    onEmailChangeEvent(event) {
        this.setState((prevState) => {
        return {
            email: event.target.value
        };
        });
    }
    
    onGenderChangeEvent(event) {
        this.setState((prevState) => {
        return {
            gender: event.target.value
        };
        });
    }

    onSubmitEvent(event) {
        event.preventDefault();

        const message = `
            Name: ${this.state.name}
            Email: ${this.state.email}
            Gender: ${this.state.gender}
        `

        alert(message);
    }

    render() {
        return (
            <div>
                <h1> Register Form</h1>
                <form onSubmit={this.onSubmitEvent}>
                    <label for="name">Name: </label>
                    <input id="name" type="text" value={this.state.name} onChange={this.onNameChangeEvent} />
                    <br />
                    <label for="email">Email: </label>
                    <input id="email" type="text" value={this.state.email} onChange={this.onEmailChangeEvent} />
                    <br />
                    <label for="gender">Gender: </label>
                    <select id="gender" value={this.state.gender} onChange={this.onGenderChangeEvent}>
                        <option value="Man">Man</option>
                        <option value="Woman">Woman</option>
                    </select>
                    <br />
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

export default FormApp