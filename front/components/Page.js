import React from 'react';
import PropTypes from 'prop-types';

function Page({ children }) {
  return (
    <div>
      <h2>Helo</h2>
      {children}
    </div>
  );
}

export default Page;
Page.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};
