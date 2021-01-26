import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import BuySuccess from "./components/Buy/BuySuccess/BuySuccess";
import BuyFrontPage from './components/Buy/BuyFrontPage/BuyFrontPage';
import BuyStepFour from "./components/Buy/BuyStepFour/BuyStepFour";
import BuyStepThree from "./components/Buy/BuyStepThree/BuyStepThree";
import BuyStepTwo from "./components/Buy/BuyStepTwo/BuyStepTwo";
import SellFrontPage from "./components/Sell/SellFrontPage/SellFrontPage";
import SellStepTwo from "./components/Sell/SellStepTwo/SellStepTwo";
import SellStepThree from "./components/Sell/SellStepThree/SellStepThree";
import SellStepFourth from "./components/Sell/SellStepFourth/SellStepFourth";
import SellFifthPage from "./components/Sell/SellFifthPage/SellFifthPage";
import Data from "./components/Data/Data";

export const UserContext = createContext();

function App() {
  const [country, setCountry] = useState({})
  const [wallet, setWallet] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [iban, setIban] = useState('');
  const [TXid, setTXid] = useState('');

  return (
    <UserContext.Provider value={[country, setCountry, quantity, setQuantity, wallet, setWallet, iban, setIban, TXid, setTXid]}>
      <Router>
        <div className='mainContianer'>
          <Switch>
            <Route exact path='/'>
              <BuyFrontPage />
            </Route>

            <Route path='/buy-secondPage'>
              <BuyStepTwo />
            </Route>

            <Route path='/buy-thirdPage'>
              <BuyStepThree />
            </Route>

            <Route path='/buy-finalPage'>
              <BuyStepFour />
            </Route>

            <Route path='/buy-success'>
              <BuySuccess />
            </Route>

            <Route path='/sell-frontPage'>
              <SellFrontPage />
            </Route>
            <Route path='/sell-secondPage'>
              <SellStepTwo />
            </Route>

            <Route path='/sell-thirdPage'>
              <SellStepThree />
            </Route>

            <Route path='/sell-fourthPage'>
              <SellStepFourth />
            </Route>

            <Route path='/sell-fifthPage'>
              <SellFifthPage />
            </Route>

            <Route path='/data'>
              <Data />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
