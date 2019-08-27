import React from 'react';
import axios from 'axios';


class VanillaRegister extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    },
    isLoading: false
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  register = e => {
    e.preventDefault();
    axios
      .post('https://bw-dev-libs.herokuapp.com/auth/register', this.state.credentials)
      .then(res => {
        console.log(res)  
        this.props.history.push('/');
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.register}>
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
          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default VanillaRegister;