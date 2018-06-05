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


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('contents'));
