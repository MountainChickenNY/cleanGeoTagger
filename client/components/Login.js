import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from 'react-router-dom';

import Navbar from './Navbar';
import Tagger from './Tagger';


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
            <div>
                <Navbar />
                <Tagger />
                <br />
                <input type="text" className="username" id="userInput" defaultValue="Username"/>
                <input type="text" className="password" id="passwordInput" defaultValue="Password"/>
                <button onClick>Login</button>
                <button>Sign Up</button>
            
            </div>
            
        )
    }
}

export default Login;