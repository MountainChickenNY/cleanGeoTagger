import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from 'react-router-dom';


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        username: '',
        userPassword: '',
        userVerified: undefined
    }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {

    return (
      <div className="container"> 
        <form className="form-signin">
          <input type="text" className="username form-control" id="userInput" placeholder="Username"/>
          <input type="text" className="password form-control" id="passwordInput" placeholder="Password"/>
          <button onClick="">Login</button>
        </form>
      </div>
    )
  }
}

export default Login;