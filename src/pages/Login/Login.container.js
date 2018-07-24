import { connect } from 'react-redux';

import LoginComp from './Login.component';

const mapState = state => ({
  login: state.login,
});

const mapDispatch = () => ({});

export default connect(mapState, mapDispatch)(LoginComp);