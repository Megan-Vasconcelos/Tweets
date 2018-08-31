import React, { Component } from 'react';
import { connect } from 'react-redux';
import RenderTweet from './tweet';
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
    // constructor() {
    //     super()
    //     this.state = {
    //         tweets : [],
    //     }
    //     // this.fetchTweets = this.fetchTweets.bind(this)
    // }


    componentDidMount() {
        const username = this.props.username
        console.log(username)
        // fetch(`/getTweets/${username}`)
        //  .then(response => response.json())
        //  .then(data => this.setState({tweets: data}));
        this.props.fetchTweets(username)
    
    }

    render(){
        const { tweets } = this.props;
        

        if(tweets.length === 0){
            return(<div>Patience is a virtue...</div>)
            
        }
        return(
            <div className="tweets">{tweets.map((item) => {
                console.log(this.props.username)
                return <RenderTweet key={item.id} data={item}/>
            })}</div>
        )
    }
}

  export default connect(mapStateToProps, mapDispatchToProps)(UserTweets);