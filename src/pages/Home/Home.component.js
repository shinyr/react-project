import React from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';

import Menu from '../../components/Menu/index';  

const HomeComp = ({ home }) => (
  <div>
    <Menu selected ={dashboard}> </Menu>
  </div> 
);

HomeComp.propTypes = {
  home: PropTypes.string.isRequired,
};
HomeComp.displayName = HomeComp;

export { HomeComp as default };
