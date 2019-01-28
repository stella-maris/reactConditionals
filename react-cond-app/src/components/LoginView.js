import React, { Component } from 'react';

class LoginView extends Component {
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input />
                <button>Log in</button>
            </form>
        );
    }
}

export default LoginView;