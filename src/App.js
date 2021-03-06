import React, { Component } from 'react';
import Classes from './App.css';
import Header from './components/Header/Header';
import Login from './containers/Login/Login';
class App extends Component {
  state = {
    preLogin :{
      values:['Log In','Register'],
      status:true
    },
    postLogin:{
      values:['Student','Teacher','Admin'],
      status:false
    }
  }
  render() {
    return (
      <div className={Classes.App}>
          <Header fields={this.state.preLogin}/>
          <Login></Login>
      </div>
    );
  }
}

export default App;
