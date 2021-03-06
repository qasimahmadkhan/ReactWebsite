import './App.css';
import './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import SignUP from './components/pages/SignUp'
import Products from './components/pages/Products'

function App() {
  return (
    < >
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUP} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
