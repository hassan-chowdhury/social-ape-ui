import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import loginImg from "../../logo.svg";


const Login = ({containerRef}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRef = useRef(null);
  useEffect(() => emailRef.current.focus(), []);

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

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <img className="App-logo" src={loginImg} alt="" />
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              ref={emailRef}
              type="text"
              name="email"
              placeholder="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
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
            />
          </div>
          <div className="footer">
            <button type="submit" className="btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;