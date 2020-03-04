import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
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

  const emailRef = useRef(null);
  useEffect(() => emailRef.current.focus(), []);

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
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              ref={emailRef}
              type="text"
              name="email"
              placeholder="email"
              value={email}
              autoComplete="username"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              autoComplete="current-password"
              onChange={handleChange}
            />
          </div>
          <div className="footer">
            <button type="submit" className="btn">Login</button>
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
