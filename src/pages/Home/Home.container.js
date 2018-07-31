import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import HomeComp from './Home.component';
import { loginActions } from '../Login/Login.action';


const mapState = state => ({
  home: state.home
});

const mapDispatch = (dispatch) => ({
  loginActions: bindActionCreators(loginActions, dispatch)
});

export default connect(mapState, mapDispatch)(HomeComp);