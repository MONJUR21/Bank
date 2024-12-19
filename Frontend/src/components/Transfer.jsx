// src/components/Transfer.js
import React, { useState } from "react";

const Transfer = ({ accounts, transferMoney }) => {
  const [fromAccountId, setFromAccountId] = useState("");
  const [toAccountId, setToAccountId] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    transferMoney(parseInt(fromAccountId), parseInt(toAccountId), parseFloat(amount));
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Transfer Funds</h3>
      <select onChange={(e) => setFromAccountId(e.target.value)} required>
        <option value="">From Account</option>
        {accounts.map((account) => (
          <option key={account.id} value={account.id}>
            {account.name}
          </option>
        ))}
      </select>

      <select onChange={(e) => setToAccountId(e.target.value)} required>
        <option value="">To Account</option>
        {accounts.map((account) => (
          <option key={account.id} value={account.id}>
            {account.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Transfer</button>
    </form>
  );
};

export default Transfer;
