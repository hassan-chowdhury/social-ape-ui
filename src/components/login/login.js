import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import loginImg from "../../logo.svg";


const Login = ({containerRef}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRef = useRef(null);
  useEffect(() => emailRef.current.focus(), []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // enter key pressed
      handleSubmit();
    }
  };

  const validate = () => {
    let errors = {};
    let formIsValid = true;

    if (!email) {
      errors["email"] = "Required";
      formIsValid = false;
    }

    if (!password) {
      errors["password"] = "Required";
      formIsValid = false;
    }

    return {"errors": errors, "formIsValid": formIsValid};
  };

  const handleSubmit = () => {
    let formValidation = validate();
    if (formValidation.formIsValid) {
      const url = "http://localhost:10524/auth/login"
      let data = {
        "email": email,
        "password": password
      };
      axios.post(url, data)
      .then(response => console.log(response))
      .catch(error => console.log(error));
    } else {
      alert(JSON.stringify(formValidation.errors));
    }
  };

  return (
    <div className="base-container" ref={containerRef}>
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} alt="" />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              ref={emailRef}
              type="text"
              name="email"
              placeholder="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn" onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
}

export default Login;