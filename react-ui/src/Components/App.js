import React, { Component } from 'react';
import './App.css';
import UserTweets from './UserTweets'
// import { Link } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
        return (
            <div className="main-app">
            <header>
              {/* <h1><Link to="/">Donald or Hillary Tweets</Link></h1> */}
              {/* <h1><Link to="/">Donald or Hillary Tweets</Link></h1> */}
              <h1>Donald or Hillary Tweets</h1>
            </header>
            <main className="main-content">
            <UserTweets>Pick one!!</UserTweets>
            
              {/* {this.props.children} */}
            </main>
    
          </div>

    )
  }
}


export default App;
