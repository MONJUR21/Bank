// src/components/AccountList.js
import React from "react";

const AccountList = ({ accounts }) => {
  return (
    <div>
      <h3>Account List</h3>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>
            {account.name} - Balance: ${account.balance}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountList;
