import axios from "axios";
import React from "react";
import loginImg from "../../logo.svg";

// TODO define baseURL, port in separate config file
// const backendPort = 10524;
// const baseURL = `http://localhost:${backendPort}/`
// const axiosInstance = axios.create({
//     baseURL: baseURL
// });
// axios.defaults.baseURL = URL;
// axios.defaults.post['Content-Type'] = 'application/json';

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        email: '',
        password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  handleSubmit() {
    const {username, email, password} = this.state;
    const url = "http://localhost:10524/auth/register"
    let data = {
        "name": username,
        "email": email,
        "password": password
    };
    axios.post(url, data)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                name="username" 
                placeholder="username"
                onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="text" 
                name="email" 
                placeholder="email"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="text"
                name="password"
                placeholder="password"
                onChange={this.handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.handleSubmit}>
            Register
          </button>
        </div>
      </div>
    );
  }
}