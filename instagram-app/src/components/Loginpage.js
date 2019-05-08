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

    handleLoginSubmit = e => {
        const user = this.state.username;
        localStorage.setItem('user',user);
        window.location.reload();
    };

    render(){
        return (
            <form className='login-info'>
            <h2>Welcome to my Insta App</h2>
            <div>LogIn</div>
            
                <input
                type='text'
                placeholder='PW'
                name='PW'
                value={this.state.password}
                onChange={this.handelInputChange}
                />
                <br />
                <button color='SUCCESS' size= 'small' onClick={this.handelLoginSumbit}>
                LogIn
                </button>
           
            </form>
        );
    }
}

export default Login;