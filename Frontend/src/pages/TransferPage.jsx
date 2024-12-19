// src/pages/TransferPage.js
import React from "react";
import Transfer from "../components/Transfer";

const TransferPage = ({ accounts, transferMoney }) => {
  return (
    <div className="container">
      <h2>Transfer Funds</h2>
      <Transfer accounts={accounts} transferMoney={transferMoney} />
    </div>
  );
};

export default TransferPage;
