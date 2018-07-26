import { connect } from 'react-redux';

import RevenueDetailComp from './RevenueDetail.component';

const mapState = state => ({
  revenueDetail: state.revenueDetail,
});

const mapDispatch = () => ({});

export default connect(mapState, mapDispatch)(RevenueDetailComp);