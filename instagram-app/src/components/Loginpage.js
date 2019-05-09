import React, {Component} from 'react';
import './Login.css';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

handleInputChange = e => {
    this.setState({
        [e.target.name] : e.target.value
    })
}

    handleLoginSubmit = e => {
       
        const user = this.state.username;
        localStorage.setItem('user',user);
        window.location.reload();
    };

    render(){
        return (
            <form className='login-info'onSubmit={this.handleLoginSubmit}>
            <h2>Welcome to my Insta App</h2>
            <div>LogIn</div>
            <input
                
                type='text'
                placeholder='username'
                name='username'
                value={this.state.username}
                onChange={this.handleInputChange}
                />

            
                <input

                type='text'
                placeholder='password'
                name='password'
                value={this.state.password}
                onChange={this.handleInputChange}
                />
                <br />
                <button color='SUCCESS' size= 'small' onClick={this.handleLoginSumbit}>
                LogIn
                </button>
           
            </form>
        );
    }
}

export default Login;