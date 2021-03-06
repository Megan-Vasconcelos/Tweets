const express = require ('express');
const morgan = require ('morgan');
const path = require('path');
const Twitter = require ('twitter');
const cors = require('cors');

const port = process.env.PORT || 5000;

require('dotenv').config();
const app = express();

const client = new Twitter({
    consumer_key : process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

//Test .env file
console.log("Consumer key: " + process.env.CONSUMER_KEY)


app.use(morgan('dev'));

//Cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static(path.join(__dirname, 'react-ui/build')));

  app.get('/getTweets/:username', (request, response) => {
    client.get('statuses/user_timeline', {
    screen_name: request.params.username,
    tweet_mode: 'extended',
    count: 5
  })
  .then(tweets => response.json(tweets))
  .catch(error => console.log(error));
  });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/react-ui/build/index.html'));
  });
  
 

app.listen(port, function () {
    console.log(`Server is running on port ${port}., ${ process.env.PORT}`)
})