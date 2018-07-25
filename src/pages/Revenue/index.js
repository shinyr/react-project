import React from 'react';
import Loadable from 'react-loadable';

import ComponentLoading from '../../components/ComponentLoading';

const LoadableComponent = Loadable({
  loader: () => import('./Revenue.container'),
  loading: ComponentLoading,
  timeout: 5000,
});

const Revenue = props => <LoadableComponent {...props} />;

Revenue.displayName = Revenue;

export { Revenue as default };