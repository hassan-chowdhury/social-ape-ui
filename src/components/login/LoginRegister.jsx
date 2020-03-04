import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import AdjacentTab from './AdjacentTab';
import Login from './Login';
import Register from './Register';


const LoginRegister = ({ showLogin }) => {
  const [isLoginActive, setIsLoginActive] = useState(showLogin);
  const [adjTabName, setAdjTabName] = useState(isLoginActive ? 'Register' : 'Login');
  const [adjTabIsOnRight, setAdjTabIsOnRight] = useState(true);

  useEffect(() => LoginRegister.adjacentTab.classList.add('right'), []);

  const changeTab = () => {
    const { adjacentTab } = LoginRegister;

    if (adjTabIsOnRight) {
      adjacentTab.classList.remove('right');
      adjacentTab.classList.add('left');
      setAdjTabIsOnRight(!adjTabIsOnRight);
    } else {
      adjacentTab.classList.remove('left');
      adjacentTab.classList.add('right');
      setAdjTabIsOnRight(!adjTabIsOnRight);
    }

    setIsLoginActive(!isLoginActive);
    setAdjTabName(isLoginActive ? 'Login' : 'Register');
  };

  return (
    <div className="login">
      <div className="container" ref={(ref) => { LoginRegister.container = ref; }}>
        {isLoginActive && (
          <Login containerRef={(ref) => { LoginRegister.current = ref; }} />
        )}
        {!isLoginActive && (
          <Register containerRef={(ref) => { LoginRegister.current = ref; }} />
        )}
      </div>
      <AdjacentTab
        tabName={adjTabName}
        containerRef={(ref) => { LoginRegister.adjacentTab = ref; }}
        onClick={changeTab}
      />
    </div>
  );
};

const propTypes = {
  showLogin: PropTypes.bool.isRequired,
};

LoginRegister.propTypes = propTypes;

export default LoginRegister;
