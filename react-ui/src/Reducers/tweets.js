import {FETCH_TWEETS_SUCCESS} from '../Action';

const tweets = (state = [], action) => {
    switch (action.type) {
        case FETCH_TWEETS_SUCCESS:
        console.log("bacon")
            return  action.tweets;
            
        default:
            return state;
    }
};

export default tweets;