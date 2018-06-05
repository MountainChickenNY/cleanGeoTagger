import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from 'react-router-dom';

// import Tagger from './Tagger.js';
import Navbar from './Navbar.js';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userLogging: false,
            userPassword: false,
            userInfo: undefined
        }
    }

    render() {

        return (
            <div>
                <input type="text" name="username" id="userInput" defaultValue="Username"/>
                <input type="text" name="password" id="passwordInput" defaultValue="Password"/>
                <button>Login</button>
            </div>
        )
    }
}

export default Login;