import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Commerciality from './pages/Commerciality'

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Commerciality" component={Commerciality} />
       </Switch>
    </Router>
    </div>
  );
}

export default App;