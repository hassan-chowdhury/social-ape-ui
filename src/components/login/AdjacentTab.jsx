
import PropTypes from 'prop-types';
import React from 'react';


const AdjacentTab = ({
  containerRef,
  tabName,
  onClick,
}) => (
  <div className="right-side" ref={containerRef} onClick={onClick} role="presentation">
    <div className="inner-container">
      <div className="text">{tabName}</div>
    </div>
  </div>
);

const propTypes = {
  tabName: PropTypes.string.isRequired,
  containerRef: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

AdjacentTab.propTypes = propTypes;

export default AdjacentTab;
