import React, { useState, useEffect } from "react";

import Login from "./login";
import Register from "./register";


const LoginRegister = ({showLogin}) => {
  const [isLoginActive, setIsLoginActive] = useState(showLogin);
  const [adjTabName, setAdjTabName] = useState(isLoginActive ? "Register" : "Login");
  const [adjTabIsOnRight, setAdjTabIsOnRight] = useState(true);

  useEffect(() => LoginRegister.adjacentTab.classList.add("right"), []);

  const changeTab = () => {
    const adjacentTab = LoginRegister.adjacentTab;

    if (adjTabIsOnRight) {
      adjacentTab.classList.remove("right");
      adjacentTab.classList.add("left");
      setAdjTabIsOnRight(!adjTabIsOnRight);
    } else {
      adjacentTab.classList.remove("left");
      adjacentTab.classList.add("right");
      setAdjTabIsOnRight(!adjTabIsOnRight);
    }

    setIsLoginActive(!isLoginActive);
    setAdjTabName(isLoginActive ? "Login" : "Register");
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
        tabName={adjTabName}
        containerRef={ref => (LoginRegister.adjacentTab = ref)}
        onClick={changeTab}
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