import React, { Component } from 'react';
import './App.css';
import LoginView from './components/LoginView';
import UserView from './components/UserView';

class App extends Component {
    constructor (props){
        super(props);
        this.state = {
            isLoggedIn: true
        };
    }
  render() {
      const isLoggedIn = this.state.isLoggedIn;
      let view;
      if (isLoggedIn) {
        view = (
            < UserView />
        );
      } else{
          view = (
              <LoginView isLoggedIn={this.state.isLoggedIn} onSubmit={this.state.handleSubmit}/>
          );
      }
    return (
      <div className="App">
          {view}
          {this.state.isLoggedIn ? (
              <p>You are logged in</p>
          ) : (
              <p>Please log in</p>
          )
          }
      </div>
    );
  }
}

export default App;
