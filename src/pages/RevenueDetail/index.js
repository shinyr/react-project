import React from 'react';
import Loadable from 'react-loadable';

import ComponentLoading from '../../components/ComponentLoading';

const LoadableComponent = Loadable({
  loader: () => import('./RevenueDetail.container'),
  loading: ComponentLoading,
  timeout: 5000,
});

const RevenueDetail = props => <LoadableComponent {...props} />;

RevenueDetail.displayName = RevenueDetail;

export { RevenueDetail as default };
