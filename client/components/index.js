/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

import Login from './Login.js';
import Tagger from './Tagger.js';
import Navbar from './Navbar.js';
import Signup from './Signup.js';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
      <div>
          <Navbar />
          <Route exact path="/" component={Tagger} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
      </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('contents'));
