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
            password: '',
            userVerified: undefined
        }
        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleSubmit(route) {
        //event.preventDefault();
        //console.log('event.target.value', event.target.val())
       // const data = new FormData(event.target);

        fetch(route, {
            method: 'POST',
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: this.state.username, password: this.state.password})
        })
            .then(response => {
                // console.log('what is my response : ', responseJSON);    
                return response.json()
            })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log('error is : ', err)
            });
    }

    render() {

        return (
            <div className="container"> 
                <Navbar />

                <Tagger />
                <br / >

            
            <form>
                <label htmlFor="username"></label>
                <input id="username" name="username" type="text" onChange={(e)=>{
                    // console.log(e.target.value);
                    console.log('this is my username:' , e.target.value)
                    this.setState({username: e.target.value})
                    
                }} placeholder="Username"/>

                <label htmlFor="password"></label>
                <input id="password" name="password" type="text" onChange={(e)=>{
                     console.log('this is my password:' , e.target.value)
                    this.setState({password: e.target.value})
                }} placeholder="Password"/>

                <button type="submit" onClick={ () => {this.handleSubmit('/signup')} } name="signup" >Sign Up</button>
                <button type="submit" onClick={ () => {this.handleSubmit('/login')} } name="login" >Login</button>
            </form>

            </div>
        
        )
    }

export default Login;