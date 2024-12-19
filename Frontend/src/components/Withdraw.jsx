// src/components/Withdraw.js
import React, { useState } from "react";

const Withdraw = ({ accounts, withdrawMoney }) => {
  const [accountId, setAccountId] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    withdrawMoney(parseInt(accountId), parseFloat(amount));
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Withdraw Money</h3>
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
      <button type="submit">Withdraw</button>
    </form>
  );
};

export default Withdraw;
