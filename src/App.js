import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Topics from './pages/Topics';
import Page404 from './pages/Page404';

class App extends React.Component {
  render() {
    return (
          <Router>
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
          </Router>
    );
  }
}

export default App;
