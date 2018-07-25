import React from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';

import Menu from '../../components/Menu/index'; 

class HomeComp extends React.Component {

}
const HomeComp = ({ home }) => (
  <div>
    <h2>{intl.get('menu/home').d('Home')}</h2>
    <p>dfsgsg</p>
    <p>{home}</p>
    <Menu></Menu>
  </div> 
);

HomeComp.propTypes = {
  home: PropTypes.string.isRequired,
};
HomeComp.displayName = HomeComp;

export { HomeComp as default };
