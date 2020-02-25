import React, { useState, useEffect } from "react";

import Login from "./login";
import Register from "./register";


const LoginRegister = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const [tabName, setTabName] = useState('Register');

  useEffect(() => LoginRegister.adjacentTab.classList.add("right"), []);

  const selectLoginTab = () => {
    const adjacentTab = LoginRegister.adjacentTab;
    adjacentTab.classList.remove("right");
    adjacentTab.classList.add("left");
    setTabName("Login");
    setIsLoginActive(!isLoginActive);
  };

  const selectRegisterTab = () => {
    const adjacentTab = LoginRegister.adjacentTab;
    adjacentTab.classList.remove("left");
    adjacentTab.classList.add("right");
    setTabName("Register");
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
      <AdjacentTab
        tabName={tabName}
        containerRef={ref => (LoginRegister.adjacentTab = ref)}
        onClick={() => isLoginActive ? selectLoginTab() : selectRegisterTab() }
      />
    </div>
  );
};
    
const AdjacentTab = props => (
  <div className="right-side" ref={props.containerRef} onClick={props.onClick} >
    <div className="inner-container">
      <div className="text">{props.tabName}</div>
    </div>
  </div>
);

export default LoginRegister;