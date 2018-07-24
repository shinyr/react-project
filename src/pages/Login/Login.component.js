import React from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';

const LoginComp = ({ login }) => (
  <div>
    <h2>{intl.get('menu/login').d('Login')}</h2>
    <p>{login}</p>
  </div>
);

LoginComp.propTypes = {
  login: PropTypes.string.isRequired,
};
LoginComp.displayName = LoginComp;

export { LoginComp as default };