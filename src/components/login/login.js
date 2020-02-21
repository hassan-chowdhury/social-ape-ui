import axios from "axios";
import React, { useState } from "react";
import loginImg from "../../logo.svg";


const Login = ({ containerRef }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
      const url = "http://localhost:10524/auth/login"
      let data = {
        "email": email,
        "password": password
      };
      axios.post(url, data)
      .then(response => console.log(response))
      .catch(error => console.log(error));
    }

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
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={handleSubmit}>Login</button>
        </div>
      </div>
    );
}

export default Login;