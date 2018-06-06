import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from 'react-router-dom';


class Signup extends React.Component {
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
                <input type="text" className="username" id="userInput" defaultValue="Username"/>
                <input type="text" className="password" id="passwordInput" defaultValue="Password"/>
                <button onClick="">Signup</button>
            </div>
            
        )
    }
}

export default Signup;