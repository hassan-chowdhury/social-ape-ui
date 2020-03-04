import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

import loginImg from '../../logo.svg';
import {
  formValid,
  validateEmail,
  validatePassword,
} from '../../validations';


const Login = ({ containerRef }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({
    email: 'Required!',
    password: 'Required!',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const errors = formErrors;

    switch (name) {
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
      const url = 'auth/login';
      const data = {
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
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img className="App-logo" src={loginImg} alt="" />
        </div>
        <form className="form" onSubmit={handleSubmit} autoComplete="on">
          <TextField
            autoFocus
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
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <div className="footer">
            <Button variant="contained" color="primary" type="submit">Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

const propTypes = {
  containerRef: PropTypes.func.isRequired,
};

Login.propTypes = propTypes;

export default Login;
