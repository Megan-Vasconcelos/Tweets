import React, { Component } from 'react';
import Tweet from 'react-tweet'

//Renders the tweet in twitter format

class RenderTweet extends Component {
  
  render () {
    const linkProps = {target: '_blank', rel: 'noreferrer'}

    return (
      <Tweet data={this.props.data} linkProps={linkProps} />
    )
  }
}


export default RenderTweet;