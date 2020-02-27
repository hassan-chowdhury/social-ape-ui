import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import loginImg from "../../logo.svg";
import {
  formValid,
  validateUsername,
  validateEmail,
  validatePassword,
} from "../../validations";


const Register = ({containerRef}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({
    username: "Required!",
    email: "Required!",
    password: "Required!"
  });

  const usernameRef = useRef(null);
  useEffect(() => usernameRef.current.focus(), []);

  const handleChange = (e) => {
    const {name, value} = e.target;
    let errors = formErrors;

    switch(name) {
      case "username":
        errors.username = validateUsername(value);
        setUsername(value);
        break;
      case "email":
        errors.email = validateEmail(value);
        setEmail(value);
        break;
      case "password":
        errors.password = validatePassword(value);
        setPassword(value);
        break;
      default:
        break;
    }

    setFormErrors(errors);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(formErrors)) {
      const url = "auth/register"
      let data = {
        "name": username,
        "email": email,
        "password": password
      };
      axios.post(url, data)
      .then(response => console.log(response))
      .catch(error => console.log(error));
    } else {
      alert(JSON.stringify(formErrors));
    }
  }

  return (
    <div className="base-container" ref={containerRef}>
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
          <img className="App-logo" src={loginImg} alt="" />
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              ref={usernameRef}
              type="text"
              name="username"
              placeholder="username"
              value={username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              placeholder="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="footer">
            <button type="submit" className="btn">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;