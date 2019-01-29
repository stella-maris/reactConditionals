import React, { Component } from 'react';

class LoginView extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const name = this.input.value;
        console.log('Login:', name);
        this.setState({isLoggedIn: true});
      }
    render () {
        const isLoggedIn = this.props.handleSubmit;
        return (
            <form onSubmit={isLoggedIn}>
                <input />
                <button type="submit" value="submit">Log in</button>
            </form>
        );
    }
}

export default LoginView;