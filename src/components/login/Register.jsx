import PropTypes from 'prop-types';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

import loginImg from '../../logo.svg';
import {
  formValid,
  validateUsername,
  validateEmail,
  validatePassword,
} from '../../validations';


const Register = ({ containerRef }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({
    username: 'Required!',
    email: 'Required!',
    password: 'Required!',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const errors = formErrors;

    switch (name) {
      case 'username':
        errors.username = validateUsername(value);
        setUsername(value);
        break;
      case 'email':
        errors.email = validateEmail(value);
        setEmail(value);
        break;
      case 'password':
        errors.password = validatePassword(value);
        setPassword(value);
        break;
      default:
        break;
    }

    setFormErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(formErrors)) {
      const url = 'auth/register';
      const data = {
        name: username,
        email,
        password,
      };
      axios.post(url, data)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    } else {
      alert(JSON.stringify(formErrors));
    }
  };

  return (
    <div className="base-container" ref={containerRef}>
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
          <img className="App-logo" src={loginImg} alt="" />
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <TextField
            autoFocus
            label="Username"
            variant="standard"
            margin="normal"
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            variant="standard"
            margin="normal"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            variant="standard"
            margin="normal"
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <div className="footer">
            <button type="submit" className="btn">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const propTypes = {
  containerRef: PropTypes.func.isRequired,
};

Register.propTypes = propTypes;

export default Register;
