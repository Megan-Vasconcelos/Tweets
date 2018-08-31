import React, { Component } from 'react';
import { connect } from 'react-redux';
import RenderTweet from './Tweet';
import {fetchTweets} from '../Action';



const mapStateToProps = state => ({
    tweets: state.tweets,
  });
  
  const mapDispatchToProps = (dispatch) => {
   return { 
       fetchTweets: (username) => dispatch(fetchTweets(username))
   }
  };


class UserTweets extends Component {

    componentDidMount() {
        const username = this.props.username
        this.props.fetchTweets(username)
    }

    render(){
        const { tweets } = this.props;
    
        if(tweets.length === 0){
            return(<div></div>)
            
        }
        return(
            <div className="tweets">{tweets.map((item) => {

                return <RenderTweet username={this.props.username} key={item.id} data={item}></RenderTweet>
            })}</div>
        )
    }
}

  export default connect(mapStateToProps, mapDispatchToProps)(UserTweets);