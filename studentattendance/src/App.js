import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import MasterLayout from './layouts/admin/MasterLayout';
import Home from './components/frontend/Home';
import Login from './components/frontend/auth/Login';
import Register from './components/frontend/auth/Register';





function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/admin/" name="admin" render={(props)=> <MasterLayout {...props} /> } />
          
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
