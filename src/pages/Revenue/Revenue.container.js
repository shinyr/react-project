import { connect } from 'react-redux';

import RevenueComp from './Revenue.component';

const mapState = state => ({
  revenue: state.revenue,
});

const mapDispatch = () => ({});

export default connect(mapState, mapDispatch)(RevenueComp);