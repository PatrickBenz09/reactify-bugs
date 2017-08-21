import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import NewBugForm from './components/NewBugForm'
import BugList from './components/BugList'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header></Header>
          <NewBugForm></NewBugForm>
          <BugList></BugList>
        </div>
      </div>
    );
  }
}

export default App;
