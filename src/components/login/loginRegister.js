import React, { useState, useEffect } from "react";

import Login from "./login";
import Register from "./register";


const LoginRegister = () => {
    const [isLoginActive, setIsLoginActive] = useState(true);
    const [tabName, setTabName] = useState('Register');

    useEffect(() => LoginRegister.rightSide.classList.add("right"), []);

    const changeState = () => {
      const rightSide = LoginRegister.rightSide;
      if (isLoginActive) {
        rightSide.classList.remove("right");
        rightSide.classList.add("left");
        setTabName("Login");
      } else {
        rightSide.classList.remove("left");
        rightSide.classList.add("right");
        setTabName("Register");
      }
      setIsLoginActive(!isLoginActive);
    };

    return (
      <div className="login">
        <div className="container" ref={ref => (LoginRegister.container = ref)}>
          {isLoginActive && (
            <Login containerRef={ref => (LoginRegister.current = ref)} />
          )}
          {!isLoginActive && (
            <Register containerRef={ref => (LoginRegister.current = ref)} />
          )}
        </div>
        <RightSide
          tabName={tabName}
          containerRef={ref => (LoginRegister.rightSide = ref)}
          onClick={changeState}
        />
      </div>
    );
};
    
const RightSide = props => (
  <div className="right-side" ref={props.containerRef} onClick={props.onClick} >
    <div className="inner-container">
      <div className="text">{props.tabName}</div>
    </div>
  </div>
);

export default LoginRegister;