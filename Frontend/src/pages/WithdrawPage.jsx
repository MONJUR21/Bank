// src/pages/WithdrawPage.js
import React from "react";
import Withdraw from "../components/Withdraw";

const WithdrawPage = ({ accounts, withdrawMoney }) => {
  return (
    <div className="container">
      <h2>Withdraw Money</h2>
      <Withdraw accounts={accounts} withdrawMoney={withdrawMoney} />
    </div>
  );
};

export default WithdrawPage;
