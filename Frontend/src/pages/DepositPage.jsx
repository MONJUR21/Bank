// src/pages/DepositPage.js
import React from "react";
import Deposit from "../components/Deposit";

const DepositPage = ({ accounts, depositMoney }) => {
  return (
    <div className="container">
      <h2>Deposit Money</h2>
      <Deposit accounts={accounts} depositMoney={depositMoney} />
    </div>
  );
};

export default DepositPage;
