import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';


import App from './Components/App';
// import ButtonChoices from './components/ButtonChoices';
import UserTweets from './Components/UserTweets';

const Routes = () => (
    <BrowserRouter>
    <div>
    <App />
    {/* <Route path="/tweets/:username" exact={true}/> */}
    {/* render={renderTweets} */}
    </div>
  </BrowserRouter>
);

export default Routes;