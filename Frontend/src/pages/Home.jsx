// src/pages/Home.js
import React from "react";
import AccountForm from "../components/AccountForm";
import AccountList from "../components/AccountList";

const Home = ({ accounts, addAccount }) => {
  return (
    <div className="container">
      <h2>Home</h2>
      <AccountForm addAccount={addAccount} />
      <AccountList accounts={accounts} />
    </div>
  );
};

export default Home;
