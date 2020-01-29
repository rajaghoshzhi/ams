import React, { Component } from 'react';
import Classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={Classes.App}>
        
          <div className={Classes.FlexContainer}>
              <div>Attendence Management System</div>
              <div>Log In</div>
              <div>Register</div>
          </div>
      </div>
    );
  }
}

export default App;
