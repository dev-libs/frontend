import React from "react";
import axios from "axios";
import styled from "styled-components";

const Btn = styled.button`
  font-size: 1rem;
  margin: 15px;
  padding: 5px;
`;

const LoginUsername = styled.div`
  padding: 15px;
`;

const LoginPassword = styled.div`
  margin-top: 10px;
  padding: 15px;
`;

const Border = styled.section`
  border: 2px solid #EDEDED;
`;

class Loginvanilla extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    },
    isLoading: false,
    regMessage: ""
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
      .post(
        "https://bw-dev-libs.herokuapp.com/auth/login",
        this.state.credentials
      )
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/protected");
      })
      .catch(err => console.log(err.response));
  };
  register = e => {
    e.preventDefault();
    axios
      .post(
        "https://bw-dev-libs.herokuapp.com/auth/register",
        this.state.credentials
      )
      .then(res => {
        console.log(res.data.message);
        this.setState({ ...this.state, regMessage: res.data.message });
        // this.props.history.push('/');
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <Border>
        <form>
          <LoginUsername>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
          </LoginUsername>
          
          <LoginPassword>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
          </LoginPassword>

          <Btn onClick={this.login}>Log in</Btn>
          <span>or</span>
          <Btn onClick={this.register}>register</Btn>
        </form>
        {this.state.regMessage && <p>{this.state.regMessage}</p>}
      </Border>
    );
  }
}

export default Loginvanilla;
