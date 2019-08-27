import React from 'react';
import axios from 'axios';


class Loginvanilla extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    },
    isLoading: false,
    regMessage: ''
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axios
      .post('https://bw-dev-libs.herokuapp.com/auth/login', this.state.credentials)
      .then(res => {
        console.log(res)  
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/protected');
      })
      .catch(err => console.log(err.response));
  };
  register = e => {
    e.preventDefault();
    axios
      .post('https://bw-dev-libs.herokuapp.com/auth/register', this.state.credentials)
      .then(res => {
        console.log(res.data.message)
        this.setState({...this.state, regMessage: res.data.message})  
        // this.props.history.push('/');
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <div>
        <form >
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button onClick={this.login}>Log in</button>
          <span>or</span>
          <button onClick={this.register}>register</button>
        </form>
        {this.state.regMessage && <p>{this.state.regMessage}</p>}
      </div>
    );
  }
}

export default Loginvanilla;