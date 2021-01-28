import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import BuySuccess from "./components/Buy/BuySuccess/BuySuccess";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import BuyStepFour from "./components/Buy/BuyStepFour/BuyStepFour";
import BuyStepThree from "./components/Buy/BuyStepThree/BuyStepThree";
import BuyStepTwo from "./components/Buy/BuyStepTwo/BuyStepTwo";
import SellStepTwo from "./components/Sell/SellStepTwo/SellStepTwo";
import SellStepThree from "./components/Sell/SellStepThree/SellStepThree";
import SellStepFourth from "./components/Sell/SellStepFourth/SellStepFourth";
import SellFifthPage from "./components/Sell/SellFifthPage/SellFifthPage";
import Data from "./components/Data/Data";
import Home from "./components/Home/Home";
import LogInForm from "./components/LogInForm/LogInForm";
import DashBoard from "./components/DashBoard/DashBoard";

export const UserContext = createContext();

function App() {
  const [country, setCountry] = useState({})
  const [wallet, setWallet] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [iban, setIban] = useState('');
  const [TXid, setTXid] = useState('');
  const [loggedInUser, setLoggedInUser] = useState({});
  const [user, setUser] = useState({
    isSignedIn: false,
    firstName: '',
    lastName: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    success: false,
    error: '',
    newUser: false
  })

  if (user.firstName && user.lastName) {
    user.name = user.firstName + ' ' + user.lastName;
  }

  if (loggedInUser.name) {
    sessionStorage.setItem('name', JSON.stringify(loggedInUser.name));
  }
  if (loggedInUser.email) {
    sessionStorage.setItem('email', JSON.stringify(loggedInUser.email));
  }


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, user, setUser, country, setCountry, quantity, setQuantity, wallet, setWallet, iban, setIban, TXid, setTXid]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/login'>
            <LogInForm />
          </Route>

          <PrivateRoute path='/dashboard'>
            <DashBoard />
          </PrivateRoute>

        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
