import { connect } from 'react-redux';

import HomeComp from './Home.component';

const mapState = state => ({
  home: state.home,
  login: state.login
});

const mapDispatch = () => ({});

export default connect(mapState, mapDispatch)(HomeComp);