import { connect } from 'react-redux';

import HomeComp from './Home.component';

const mapState = state => ({
  home: state.home,
});

const mapDispatch = () => ({
  loginActions: bindActionCreators(loginActions, dispatch)
});

export default connect(mapState, mapDispatch)(HomeComp);