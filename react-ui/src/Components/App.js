import React, { Component } from 'react';
import './App.css';
import UserTweets from './UserTweets'
import Button from './Button'
// import { Link } from "react-router-dom";
import {Route, Switch} from 'react-router-dom';


class App extends Component {
  constructor() {
    super()
    this.renderTweets = this.renderTweets.bind(this)
  }

  renderTweets (routerData) {
    return (
    <UserTweets key={routerData.match.params.username} username={routerData.match.params.username} />
    )
  }
  render() {
        return (
            <div className="main-app">
            <header>
            <h1>Donald or Hillary</h1>
            <Button></Button>
            </header>
            <main className="main-content">
            {this.props.children}
            <Route exact={true} path='/tweets/:username' render={this.renderTweets} />
            </main>
    
          </div>

    )
  }
}


export default App;
