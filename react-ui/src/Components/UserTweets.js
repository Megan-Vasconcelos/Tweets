import React, { Component } from 'react';
import RenderTweet from './tweet';



class UserTweets extends Component {
    constructor() {
        super()
        this.state = {
            tweets : [],
        }
        // this.getTweets = this.getTweets.bind(this)
    }


    componentDidMount() {
        // const { screen_name } = this.props.params
    
        fetch(`/getTweets/$realDonaldTrump`)
         .then(response => response.json())
         .then(data => this.setState({tweets: data}));
    
    }

    // getTweets() {
    //     fetch(`/getTweets/$realDonaldTrump`)
    //      .then(response => response.json())
         
    //      .then(data => this.setState({tweets: data}));
    // }


    render(){
        const { tweets } = this.state;
        
        if(tweets.length === 0){
            return(<div>Patience is a virtue...</div>)
            
        }
        return(
            <div className="tweets">{tweets.map((item) => {
                return <RenderTweet key={item.id} data={item}/>
            })}</div>
        )
    }
}


export default UserTweets;