import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import DashBoard from "./components/DashBoard/DashBoard";

export const UserContext = createContext();

function App() {
  const [country, setCountry] = useState({})
  const [wallet, setWallet] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [iban, setIban] = useState('');
  const [TXid, setTXid] = useState('');
 


  return (
    <UserContext.Provider value={[ country, setCountry, quantity, setQuantity, wallet, setWallet, iban, setIban, TXid, setTXid]}>
      <Router>
        <Switch>
          <Route path='/'>
           <DashBoard/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
