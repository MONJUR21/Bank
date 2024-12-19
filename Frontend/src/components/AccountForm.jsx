// src/components/AccountForm.js
import React, { useState } from "react";
import styles from "./AccountForm.module.css"; // Import CSS module

const AccountForm = ({ addAccount }) => {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && balance >= 0) {
      addAccount(name, parseFloat(balance));
      setName("");
      setBalance(0);
    } else {
      alert("Please enter valid details.");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3 className={styles.title}>Create Account</h3>

        <div className={styles.formGroup}>
          <label htmlFor="account-name" className={styles.label}>
            Account Holder Name
          </label>
          <input
            id="account-name"
            type="text"
            className={styles.input}
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="initial-balance" className={styles.label}>
            Initial Balance
          </label>
          <input
            id="initial-balance"
            type="number"
            className={styles.input}
            placeholder="Enter balance"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            required
          />
        </div>

        <button type="submit" className={styles.button}>
          Create Account
        </button>
      </form>
    </div>
  );
};

export default AccountForm;
