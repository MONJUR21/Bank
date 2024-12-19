import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { accounts as initialAccounts } from "../data.js";
import Home from "./pages/Home";
import DepositPage from "./pages/DepositPage";
import WithdrawPage from "./pages/WithdrawPage";
import TransferPage from "./pages/TransferPage";

const App = () => {
  const [accounts, setAccounts] = useState(initialAccounts);

  const addAccount = (name, balance) => {
    const newAccount = {
      id: accounts.length + 1,
      name,
      balance,
    };
    setAccounts([...accounts, newAccount]);
  };

  const depositMoney = (accountId, amount) => {
    const updatedAccounts = accounts.map((account) =>
      account.id === accountId
        ? { ...account, balance: account.balance + amount }
        : account
    );
    setAccounts(updatedAccounts);
  };

  const withdrawMoney = (accountId, amount) => {
    const updatedAccounts = accounts.map((account) => {
      if (account.id === accountId) {
        if (amount > account.balance) {
          alert("Insufficient funds!");
          return account;
        }
        return { ...account, balance: account.balance - amount };
      }
      return account;
    });
    setAccounts(updatedAccounts);
  };

  const transferMoney = (fromId, toId, amount) => {
    if (fromId === toId) {
      alert("Cannot transfer to the same account!");
      return;
    }

    const updatedAccounts = accounts.map((account) => {
      if (account.id === fromId) {
        if (amount > account.balance) {
          alert("Insufficient funds!");
          return account;
        }
        return { ...account, balance: account.balance - amount };
      }
      if (account.id === toId) {
        return { ...account, balance: account.balance + amount };
      }
      return account;
    });
    setAccounts(updatedAccounts);
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Banking System
            </Link>
            <div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/deposit">
                    Deposit
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/withdraw">
                    Withdraw
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/transfer">
                    Transfer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<Home accounts={accounts} addAccount={addAccount} />}
          />
          <Route
            path="/deposit"
            element={<DepositPage accounts={accounts} depositMoney={depositMoney} />}
          />
          <Route
            path="/withdraw"
            element={<WithdrawPage accounts={accounts} withdrawMoney={withdrawMoney} />}
          />
          <Route
            path="/transfer"
            element={<TransferPage accounts={accounts} transferMoney={transferMoney} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
