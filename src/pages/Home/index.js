import React from 'react';
import Loadable from 'react-loadable';

import ComponentLoading from '../../components/ComponentLoading';

node_modules/font-awesome/css/font-awesome.min.css
const LoadableComponent = Loadable({
  loader: () => import('./Home.container'),
  loading: ComponentLoading,
  timeout: 5000,
});

const Home = props => <LoadableComponent {...props} />;

Home.displayName = Home;

export { Home as default };
