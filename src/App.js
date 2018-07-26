import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Revenue from './pages/Revenue';
import history from './history';

class App extends React.Component {
  render() {
    return (
          <Router history={history}>
            <div>
              <Switch>
                <Route exact path="/" component={Login} /> 
                <Route path="/home" component={Home} />
                <Route exact path="/revenue" component={Revenue} />
                <Route path="/revenue:id" component={Home} />
              </Switch>
            </div>
          </Router>
    );
  }
}

export default App;
