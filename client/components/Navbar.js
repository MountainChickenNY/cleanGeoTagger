import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from 'react-router-dom';

class Navbar extends Component {
  render(){
    return( 
      <div>
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
          <a class="navbar-brand" href="/">Mountain Chicken</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="/login">Login <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link" href="/signup">Sign Up</a>
            </div>
          </div>
        </nav>
      </div>
    )
  }   
}
        
export default Navbar;
