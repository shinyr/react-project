import React from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';
import styles from './css/styles.css';

const LoginComp = ({ login }) => (
  <div>
    <h2>{intl.get('menu/login').d('Login')}</h2>
    <p> </p>
    <div className={styles.loginWrapper}>
      <section className="loginBgContainer"></section>
      <section className="loginContainer">
          <p> Username</p>
          <input type="text" placeholder="Username"/>
          <p> Password</p>
          <input type="password" placeholder="Password"/>
          <button> Login </button>
      </section>
    </div>
  </div>
);

LoginComp.propTypes = {
  login: PropTypes.string.isRequired,
};
LoginComp.displayName = LoginComp;

export { LoginComp as default };