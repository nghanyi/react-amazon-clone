import './App.css';
import Header from './Header';
import Home from './Home';
import Cart from './Cart';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from '../firebase';
import { useStateValue } from '../StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // The user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        // The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart">
            <Header />
            <Cart />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
