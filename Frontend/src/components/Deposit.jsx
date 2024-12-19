// src/components/Deposit.js
import React, { useState } from "react";

const Deposit = ({ accounts, depositMoney }) => {
  const [accountId, setAccountId] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    depositMoney(parseInt(accountId), parseFloat(amount));
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Deposit Money</h3>
      <select onChange={(e) => setAccountId(e.target.value)} required>
        <option value="">Select Account</option>
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
      <button type="submit">Deposit</button>
    </form>
  );
};

export default Deposit;
