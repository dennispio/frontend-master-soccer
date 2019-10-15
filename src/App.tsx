import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Admin from './pages/admin';
import Search from './pages/search';


class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Search} exact={true} />
            <Route path="/admin" component={Admin} />
            <Route component={Search} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
