import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import './App.css';
import UserTweets from './UserTweets'
import Button from './Button'


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
              <header className="main-header">
                <h1>Donald Trump or Hillary Clinton</h1>
                <h3>Pick the lesser of 2 evils..</h3>      
              </header>
            
            <main className="main-content">
              <Button></Button>
              <div className="tweetContainer">
                <Route className="tweets" exact={true} path='/tweets/:username' render={this.renderTweets} />
              </div>
            </main>
    
            </div>
    )
  }
}


export default App;
