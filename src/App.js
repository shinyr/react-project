import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import history from './history';

class App extends React.Component {
  render() {
    return (
          <Router history={history}>
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
              </Switch>
            </div>
          </Router>
    );
  }
}

export default App;
