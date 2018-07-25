import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { loginActions } from './Login.action';

import LoginComp from './Login.component';

const mapState = state => ({
  login: state.login
});

const mapDispatch = (dispatch) => ({
  loginActions: bindActionCreators(loginActions, dispatch)
});

export default connect(mapState, mapDispatch)(LoginComp);