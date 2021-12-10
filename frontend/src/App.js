import './css/App.css';
import Header from './Header';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Log from './components/Log/Log'
import LogDeleted from './components/Log/LogDeleted'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="font-themes color-themes misc font-sizes">
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/logs/log-not-found" component={LogDeleted}/>
          <Route exact path="/logs/:id" component={Log}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
